import React, {BaseSyntheticEvent, FC, useEffect} from 'react'
import {
    Control,
    Controller,
    DeepRequired,
    FieldErrorsImpl,
    FieldValues, GlobalError,
    SubmitErrorHandler,
    SubmitHandler
} from "react-hook-form";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import {IFormInput} from "../../features/SignIn/types";

interface Props {
    onSubmit: SubmitHandler<IFormInput>,
    control: Control<IFormInput, any>,
    errors: Partial<FieldErrorsImpl<DeepRequired<IFormInput>>> & { root?: Record<string, GlobalError> & GlobalError }
    handleSubmit: (onValid: SubmitHandler<IFormInput>, onInvalid?: SubmitErrorHandler<IFormInput>) => (e?: BaseSyntheticEvent) => Promise<void>
}

const AuthForm: FC<Props> = ({onSubmit, control, handleSubmit, errors}) => {

    return (

        <form style={{display: 'flex', flexDirection: 'column', gap: 16, width: 350}} onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="username"
                control={control}
                rules={{required: "Логин не должен быть пустым"}}
                render={({field}) =>
                    <Input
                        {...field}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                        placeholder={'Введите логин'}
                        label={'Логин'}
                    />
                }
            />
            <Controller
                name="password"
                control={control}
                rules={{required: "Пароль не должен быть пустым"}}
                render={({field}) =>
                    <Input
                        {...field}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        placeholder={'Введите пароль'}
                        label={'Пароль'}
                    />
                }
            />
            <Button style={{marginTop: 32}} type={'submit'}>
                Авторизоваться
            </Button>
        </form>
    )
}

export default AuthForm
