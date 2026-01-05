"use client";

import { UpdateUserRequest } from "@/store/user/types/singleUser";
import { useUpdateSingleUserMutation } from "@/store/user/userManagementApi";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";
import CommonSelect from "../common/custom/CommonSelect";
import CommonHeader from "../common/header/CommonHeader";
import CloseButton from "../reuseable/CloseButton";

/* =========================
   ZOD SCHEMA
========================= */
const userProfileSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters"),

  gender: z.string().nonempty("Gender is required"),

  height: z
    .string()
    .refine((v) => !isNaN(Number(v)), "Height must be a number")
    .transform(Number)
    .refine((v) => v >= 50 && v <= 300, "Height must be between 50 and 300 cm"),

  weight: z
    .string()
    .refine((v) => !isNaN(Number(v)), "Weight must be a number")
    .transform(Number)
    .refine((v) => v >= 20 && v <= 500, "Weight must be between 20 and 500 kg"),

  language: z.string().nonempty("Language is required"),

  healthGoal: z.string().nonempty("Health goal is required"),
});

/* =========================
   TYPES
========================= */
type FormInput = z.input<typeof userProfileSchema>;
type FormOutput = z.output<typeof userProfileSchema>;
type FormErrors = Partial<Record<keyof FormInput, string>>;

interface UserProfileModalProps {
  setProfileModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProfileUser: UpdateUserRequest;
  selectedUserId: string;
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({
  setProfileModalOpen,
  selectedProfileUser,
  selectedUserId,
}) => {
  const [formData, setFormData] = useState<FormInput>({
    fullName: selectedProfileUser?.profile?.fullName || "John Updated Doe",
    gender: selectedProfileUser?.profile?.gender || "MALE",
    height: selectedProfileUser?.profile?.height?.toString() || "180",
    weight: selectedProfileUser?.profile?.weight?.toString() || "80.5",
    language: selectedProfileUser?.profile?.language || "EN",
    healthGoal: selectedProfileUser?.profile?.healthGoal || "LOSE_WEIGHT",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<"" | "success" | "error">(
    ""
  );
  const [updateUser, { isLoading }] = useUpdateSingleUserMutation();

  /* =========================
     HANDLERS
  ========================= */
  const handleChange = (name: keyof FormInput, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus("");

    const parsed = userProfileSchema.safeParse(formData);

    if (!parsed.success) {
      const fieldErrors: FormErrors = {};

      parsed.error.issues.forEach((err) => {
        const field = err.path[0] as keyof FormInput;
        fieldErrors[field] = err.message;
      });

      setErrors(fieldErrors);
      setSubmitStatus("error");
      return;
    }

    const validated: FormOutput = parsed.data;

    const payload = {
      role: "USER" as const,
      profile: validated,
    };
    if (selectedUserId && payload) {
      await updateUser({ id: selectedUserId, data: payload });
    }
    toast.success("User profile updated successfully");
    handleClose();
    setSubmitStatus("success");

    setTimeout(() => setSubmitStatus(""), 1500);
  };

  const handleClose = () => {
    setErrors({});
    setSubmitStatus("");
    setProfileModalOpen(false);
  };

  /* =========================
     JSX (DESIGN UNCHANGED)
  ========================= */
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <div className="w-fit ml-auto absolute top-1 right-2.5">
          <CloseButton close={() => setProfileModalOpen(false)} />
        </div>

        <CommonHeader
          size="md"
          className="!text-lg !font-bold !leading-[18px] p-6"
        >
          Edit User Profile
        </CommonHeader>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className={`w-full px-4 py-2.5 border rounded-lg ${
                errors.fullName ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1.5 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-2">Gender *</label>
            <CommonSelect
              value={formData.gender}
              onValueChange={(val) => handleChange("gender", val)}
              item={[
                { label: "Male", value: "MALE" },
                { label: "Female", value: "FEMALE" },
              ]}
              className={`w-full ${
                errors.gender ? "border-red-500 bg-red-50" : ""
              }`}
            />
            {errors.gender && (
              <p className="mt-1.5 text-sm text-red-600">{errors.gender}</p>
            )}
          </div>

          {/* Height & Weight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Height (cm) *
              </label>
              <input
                type="number"
                value={formData.height}
                onChange={(e) => handleChange("height", e.target.value)}
                className={`w-full px-4 py-2.5 border rounded-lg ${
                  errors.height ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
              />
              {errors.height && (
                <p className="mt-1.5 text-sm text-red-600">{errors.height}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Weight (kg) *
              </label>
              <input
                type="number"
                value={formData.weight}
                onChange={(e) => handleChange("weight", e.target.value)}
                className={`w-full px-4 py-2.5 border rounded-lg ${
                  errors.weight ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
              />
              {errors.weight && (
                <p className="mt-1.5 text-sm text-red-600">{errors.weight}</p>
              )}
            </div>
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium mb-2">Language *</label>
            <CommonSelect
              value={formData.language}
              onValueChange={(val) => handleChange("language", val)}
              item={[
                { label: "English", value: "EN" },
                { label: "Spanish", value: "ES" },
                { label: "French", value: "FR" },
                { label: "German", value: "DE" },
              ]}
              className={`w-full ${
                errors.language ? "border-red-500 bg-red-50" : ""
              }`}
            />
            {errors.language && (
              <p className="mt-1.5 text-sm text-red-600">{errors.language}</p>
            )}
          </div>

          {/* Health Goal */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Health Goal *
            </label>
            <CommonSelect
              value={formData.healthGoal}
              onValueChange={(val) => handleChange("healthGoal", val)}
              item={[
                { label: "Lose Weight", value: "LOSE_WEIGHT" },
                { label: "Gain Weight", value: "GAIN_WEIGHT" },
                { label: "Maintain Weight", value: "MAINTAIN_WEIGHT" },
                { label: "Build Muscle", value: "BUILD_MUSCLE" },
                { label: "Improve Fitness", value: "IMPROVE_FITNESS" },
              ]}
              className={`w-full ${
                errors.healthGoal ? "border-red-500 bg-red-50" : ""
              }`}
            />
            {errors.healthGoal && (
              <p className="mt-1.5 text-sm text-red-600">{errors.healthGoal}</p>
            )}
          </div>

          {/* Status */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              ✓ Profile updated successfully!
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              Please fix the errors above and try again.
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2.5 border rounded-lg cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-indigo-600 text-white rounded-lg cursor-pointer"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileModal;
