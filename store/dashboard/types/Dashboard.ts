// Root response
export interface DashboardResponse {
  data: DashboardStats;
  timestamp: string; // ISO date string
  path: string;
  success: boolean;
}

// Dashboard statistics
export interface DashboardStats {
  totalUsers: number;
  totalUsersChange: string;

  activeToday: number;
  activeTodayChange: string;

  labReports: number;
  labReportsChange: string;

  aiConversations: number;
  aiConversationsChange: string;
}
