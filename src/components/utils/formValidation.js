import * as yup from 'yup';

export const validateUserData = yup.object({
  name: yup.string().min(2).max(25).required("*Please Enter Your Name"),
  email: yup.string().email().required("*Please Enter Your Email"),
  message: yup.string().min(5).max(200).required("*Please Write Your Message"),
})