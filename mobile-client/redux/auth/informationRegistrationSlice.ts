import { IInformationRegistrationSliceInitialState } from "@/typings";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState: IInformationRegistrationSliceInitialState = {
  personalInformation: {
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
  },
  academicInformation: {
    studentNo: "",
    specialOrderNo: "",
    lrn: "",
  },
};

export const informationRegistrationSlice = createSlice({
  name: "informationRegistration",
  initialState,
  reducers: {
    setPersonalInformationFirstName: (state, action: PayloadAction<string>) => {
      state.personalInformation.firstName = action.payload;
    },
    setPersonalInformationMiddleName: (state, action: PayloadAction<string>) => {
      state.personalInformation.middleName = action.payload;
    },
    setPersonalInformationLastName: (state, action: PayloadAction<string>) => {
      state.personalInformation.lastName = action.payload;
    },
    setPersonalInformationAddress: (state, action: PayloadAction<string>) => {
      state.personalInformation.address = action.payload;
    },
    setAcademicInformationStudentNo: (state, action: PayloadAction<string>) => {
      state.academicInformation.studentNo = action.payload;
    },
    setAcademicInformationSpecialOrderNo: (state, action: PayloadAction<string>) => {
      state.academicInformation.specialOrderNo = action.payload;
    },
    setAcademicInformationLRN: (state, action: PayloadAction<string>) => {
      state.academicInformation.lrn = action.payload;
    },
    cleanUpInformationRegistration: (state) => {
      state = {
        personalInformation: {
          firstName: "",
          middleName: "",
          lastName: "",
          address: "",
        },
        academicInformation: {
          studentNo: "",
          specialOrderNo: "",
          lrn: "",
        },
      };
    },
  },
  extraReducers(builder) {},
});

export const {
  setAcademicInformationLRN,
  setAcademicInformationSpecialOrderNo,
  setAcademicInformationStudentNo,
  setPersonalInformationAddress,
  setPersonalInformationFirstName,
  setPersonalInformationLastName,
  setPersonalInformationMiddleName,
  cleanUpInformationRegistration,
} = informationRegistrationSlice.actions;
export default informationRegistrationSlice.reducer;
