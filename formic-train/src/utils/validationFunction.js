import * as Yup from "yup";

export const getValidationScheme = (arg) => {
  switch (arg) {
    case "word5":
      return Yup.string().max(5, "Need < 5").required("Required");
    case "word2":
      return Yup.string().max(2, "Need < 2").required("Required");
    default:
      return Yup.string().max(10, "Need < 10").required("Required");
  }
};
