export interface ILoginSliceInitialState {
  input: {
    email: string;
    password: string;
  };
}

export type Role = "ADMIN" | "STUDENT";

export interface IExceptionResponse {
  message?: string | Array<string>;
  error: string;
  statusCode: number;
}

export interface IPostLoginResponse extends Partial<IExceptionResponse> {
  accessToken: string;
  id: string;
  email: string;
  role: Role;
  emailVerified: boolean;
}

export interface IGetSession {
  id: string;
  emailVerified: boolean;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  UserInformation: UserInformation | null;
}

export interface UserInformation {
  id?: string;
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  studentNo: string | null;
  specialOrder: string | null;
  lrn: string | null;
  address: string | null;
  userId?: string;
}

export interface IPostEmailConfirmationResponse extends Partial<IExceptionResponse> {
  data: string;
}

export interface IPostVerifyOtpResponse extends Partial<IExceptionResponse> {}

export interface IInformationRegistrationSliceInitialState {
  personalInformation: {
    firstName: string;
    middleName: string;
    lastName: string;
    address: string;
  };
  academicInformation: {
    studentNo: string;
    specialOrderNo: string;
    lrn: string;
  };
}

export interface IPostDashboardProfileResponse extends Partial<IExceptionResponse>, Partial<UserInformation> {}

export interface IPostRegisterResponse extends Partial<IExceptionResponse> {
  id: string;
  emailVerified: boolean;
  email: string;
  password: string;
  role: "STUDENT" | "ADMIN";
  createdAt: Date;
  updatedAt: Date;
}

export interface IRegisterSliceInitialState {
  input: {
    email: string;
    password: string;
    confirmPassword: string;
  };
}
