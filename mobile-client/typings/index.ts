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
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  studentNo: string;
  specialOrder: string;
  lrn: string;
  address: string;
  userId: string;
}

export interface IPostEmailConfirmationResponse extends Partial<IExceptionResponse> {
  data: string;
}

export interface IPostVerifyOtpResponse extends Partial<IExceptionResponse> {}

export interface IInformationRegistrationSliceInitialState {
  personalInformation: {
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    address: string | null;
  };
  academicInformation: {
    studentNo: string | null;
    specialOrderNo: string | null;
    lrn: string | null;
  };
}
