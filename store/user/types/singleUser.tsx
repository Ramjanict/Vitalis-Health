// Root API response
export interface SingleUserResponse {
  data: User;
  timestamp: string;
  path: string;
  success: boolean;
}

// User
export interface User {
  id: string;
  email: string;
  role: "USER" | "ADMIN";
  phone: string | null;
  firebaseUid: string | null;
  appleId: string | null;
  password: string | null;
  fcmtoken: string | null;
  refreshToken: string | null;

  fitbitAccessToken: string | null;
  fitbitRefreshToken: string | null;
  fitbitAccessTokenExpiry: string | null;

  stravaAccessToken: string | null;
  stravaRefreshToken: string | null;
  stravaAccessTokenExpiry: string | null;

  isAgreeTerms: boolean;
  otp: string | null;
  otpExpiry: string | null;
  isDeleted: boolean;
  changePasswordAt: string | null;

  createdAt: string;
  updatedAt: string;
  lastActive: string;

  status: "active" | "inactive" | "blocked";

  profile: UserProfile;
  deviceIntegration: DeviceIntegration | null;
  notificationSettings: NotificationSettings;

  nudges: any[];
  meals: any[];
  labReports: any[];
  MedicalReports: any[];
  conversations: any[];
  HealthDatas: any[];
  chats: any[];
  devices: any[];
}

// Profile
export interface UserProfile {
  id: string;
  userId: string;
  photo: string | null;
  fullName: string;
  isEnableNotification: boolean;
  language: "EN" | "BN" | string;
  dateOfBirth: string | null;
  gender: string | null;
  height: number | null;
  weight: number | null;
  healthGoal: string | null;
  createdAt: string;
  updatedAt: string;
}

// Notification settings
export interface NotificationSettings {
  id: string;
  userId: string;
  doNotDisturb: boolean;
  systemAlerts: boolean;
  personalizedNudges: boolean;
  wellnessNudges: boolean;
  createdAt: string;
  updatedAt: string;
}

// Device integration (empty in response, kept flexible)
export type DeviceIntegration = Record<string, any>;

// singleUser payload for update
export interface UpdateUserRequest {
  role: "USER" | "ADMIN";
  profile: UserProfileUpdate;
}

export interface UserProfileUpdate {
  fullName: string;
  gender: string;
  height: number;
  weight: number;
  language: "EN" | "BN" | string;
  healthGoal: "LOSE_WEIGHT" | "GAIN_WEIGHT" | "MAINTAIN_WEIGHT" | string;
}
