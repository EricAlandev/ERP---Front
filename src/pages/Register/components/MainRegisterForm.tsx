import { useState } from "react"
import type { UserType } from "../../../types/UserTypes";
import { Box, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import BlackButton from "../../../components/generals/tsxComponents/ButtonButton";
import { ADRESS_REGISTER } from "../const/RegisterConst";
import TextError from "../../../components/generals/tsxComponents/error/TextError";
import MaskedTextFIeld from "../../../components/mui/MaskedTextField";
import { RegisterValidator } from "../validators/RegisterValidator";


type RegisterForm = {
    nextPage: (nextPage: string , data: UserType) => void;
}

export default function  RegisterForm({nextPage} : RegisterForm){

    const [userData, setUserData] = useState<UserType>({email: "", password: "", birthday: "", typeUser: "", cic: "" , gender: ""});
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<String | null>(null);
    
    const handleChanger = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setUserData((e) => {
            const updateValues =  { ...e, [name] : value};

            cleanFields(updateValues, name, value);

            return updateValues;
        })
    }

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        const blankFields : boolean | void = await verifyBlankFields();

        if(!blankFields){
            nextPage(ADRESS_REGISTER, userData);
        }
    }

    const verifyBlankFields = async () => {

        try {
            await RegisterValidator(userData, userData?.typeUser)
        } catch (error : any) {
            setError(true)
            setErrorMessage(error?.message);
            return true;
        }
    }

    const cleanFields = (object: UserType , nameField : string, value: string) => {
        if(nameField === "typeUser"){
            const typeClient = value;

            object.cic = "";
            if(typeClient === "P"){
                object.gender = "";
            }

            else{
                object.gender = "";
            }
        }
    }

    const renderCic = () => {
        const typeUser = userData?.typeUser;

        const mask : string = (typeUser === "P" ? "000.000.000-00" : "**.***.***/****-00");
        const cpf : string = (typeUser === "P"? "Cpf" : "Cnpj");

        return (
           <>
                <FormLabel htmlFor="cic">Client {cpf}</FormLabel>
                <MaskedTextFIeld
                    key={mask}
                    id="cic"
                    name="cic"
                    value={userData?.cic}
                    onChange={handleChanger}
                    mask={mask}
                />
                
           </>
        )
    }

    return(
        <Box>
            <InputLabel
                sx={{
                    mt: '10px',
                    textAlign: 'center'
                }}
            >
                Register
            </InputLabel>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2"
            >

                    <FormLabel htmlFor="email">Email</FormLabel>
                    <TextField
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChanger}
                    />

                    <InputLabel htmlFor="password">Password</InputLabel>
                    <TextField
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChanger}
                    />

                    <FormLabel htmlFor="date">BirthDay</FormLabel>
                    <TextField
                        id="date"
                        type="date"
                        name="birthday"
                        value={userData.birthday}
                        onChange={handleChanger}
                    />

                    
                    <FormLabel htmlFor="typeUser">Type of User</FormLabel>
                    <Select
                        id="typeUser"
                        name="typeUser"
                        value={userData?.typeUser}
                        onChange={handleChanger}
                    >
                        <MenuItem value="P">Person</MenuItem>
                        <MenuItem value="C">Company Owner</MenuItem>
                    </Select>

                    {userData.typeUser === "P" && (
                        <>
                            <FormLabel htmlFor="gender">Client Gender</FormLabel>
                        
                            <Select
                                id="gender"
                                name="gender"
                                value={userData?.gender}
                                onChange={handleChanger}
                            >
                                <MenuItem value="M">Male</MenuItem>
                                <MenuItem value="F">Female</MenuItem>
                            </Select>
                        </>
                    )}

                    
                    
                    {/*RENDERIZE THE CPF OR THE CNPJ HERE CALLING THE FUNCTION */}
                    {
                        renderCic()
                    }

                    {error && (
                        <TextError text={`${errorMessage}`}/>
                    )}
                    
                <BlackButton text="Next Step"/>
            </form>
        </Box>
    )
}