
import * as yup from 'yup';
import type { UserType } from '../../../types/UserTypes';

type RegisterValidator = {
    userData?: UserType;
    userType?: string;
}

export const RegisterValidator = async ({userData, userType} : RegisterValidator) => {
    let registerSchema : any = yup.object({
        email: yup
            .string()
            .email("Type a valid email")
            .required("Email remaining"),

        password: yup
            .string()
            .min(6, "Password need to have at least 6 letters")
            .required("Password required")
            .matches(/[A-Z]/, "Password must include at least one uppercase letter")
            .matches(/[0-9]/, "Password must include at least one number")
            .matches(/[@$!%*?&]/, "Password must include at least one special character"),

        birthday: yup
            .string()
            .required("Birthday its necessary"),

        typeUser: yup
            .string()
            .oneOf(['P', 'C'], 'Error Type User')
            .required("Type user its necessary"),

        cic: yup
            .string()
            .required("CIC cannot be null"),

        gender: yup
            .string()
            .oneOf(['M', 'F'], "Error on the gender type")
            .required("Gender cannot be null")
    });

    if(userType === "C"){
        registerSchema = registerSchema.omit(["gender"]);
    }

    await registerSchema.validate(userData);
}