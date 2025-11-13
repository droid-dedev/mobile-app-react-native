type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
};

type AuthToken = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
};

type PaginationParams = {
  page: number;
  limit: number;
};

type PaginationResult<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
};

type Notification = {
  id: string;
  title: string;
  body: string;
  isRead: boolean;
  createdAt: Date;
};

type AppConfig = {
  apiBaseUrl: string;
  env: 'development' | 'staging' | 'production';
  version: string;
};

export type { User, AuthToken, ApiResponse, PaginationParams, PaginationResult, Notification, AppConfig };