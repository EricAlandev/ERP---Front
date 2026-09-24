
import * as yup from 'yup';
import type { UserType } from "../../../types/UserTypes";

export const LoginValidator = async (data : UserType) => {
    
    const loginSchema = yup.object({
        email: yup
            .string()
            .email('Email not valid')
            .required('Empty Email'),

        password: yup
            .string() 
            .min(6, 'Password need to have at least 6 letters')
            .matches(/[A-Z]/, "Password must include at least one uppercase letter")
            .matches(/[0-9]/, "Password must include at least one number")
            .matches(/[@$!%*?&]/, "Password must include at least one special character")
    })


    await loginSchema.validate(data);
}