// Single User type
export type AdminUser = {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
  devices: string;
  joinDate: string; // ISO date string
  lastActive: string; // ISO date string
};

// Pagination meta type
export type UsersMeta = {
  total: number;
  page: number;
  lastPage: number;
};

// Main API response type
export type AdminUsersResponse = {
  data: {
    data: AdminUser[];
    meta: UsersMeta;
  };
  timestamp: string;
  path: string;
  success: boolean;
};
export type UserParams = {
  page?: number;
  limit?: number;
  status?: "active" | "inactive";
  search?: string;
};
