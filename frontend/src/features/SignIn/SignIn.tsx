import React, {FC, useEffect} from 'react'
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import AuthForm from "../../entitiies/AuthForm";
import {IFormInput} from "./types";
import axios from "axios";


interface Props {
    props?: any
}

const SignIn: FC<Props> = ({props}) => {

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        defaultValues: {
            username: "",
            password: ""
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            console.log(await axios.post('/api/users/create-user', data))
        } catch (e) {
            console.log(e);
        }
    }


    return (<AuthForm errors={errors} control={control} handleSubmit={handleSubmit} onSubmit={onSubmit}/>)
}

export default SignIn
