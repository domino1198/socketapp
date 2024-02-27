import React, { FC, useContext, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { CreateChatRequest } from '../../shared/api/rest/controllers/data-contracts';
import { SubmitHandler, useForm } from 'react-hook-form';
import CreateChatModal from '../../entitiies/CreateChatModal';
import api from '../../shared/api';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { userForm } from './types';
import context from '../../shared/context';

interface Props {
  props?: any;
}

const {
  services: { chatsService, userService },
} = api;

const AddChat: FC<Props> = () => {
  const navigate = useNavigate();
  const authContext = useContext(context.AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      users: [],
    } as userForm,
    criteriaMode: 'all',
  });

  const { enqueueSnackbar } = useSnackbar();

  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);

  const { data: users } = useQuery({
    queryFn: () => {
      return userService(true).getUsers();
    },
    queryKey: ['users'],
    select: (data) => {
      return data.filter(
        (itemFilter) => itemFilter.id !== authContext?.user?.id
      );
    },
  });

  const { mutate: createChat, isPending } = useMutation({
    mutationFn: (newChat: CreateChatRequest) => {
      return chatsService.createChat(newChat);
    },
    onSuccess: (data) => {
      handleCloseModal();
      enqueueSnackbar(`Чат успешно создан!`, { variant: 'success' });
      navigate(`/main/chats/${data.id}`);
    },
    onError: () => {
      enqueueSnackbar(`Ошибка сервера!`, { variant: 'error' });
    },
  });

  const onSubmit: SubmitHandler<userForm> = (data) => {
    createChat({
      ...data,
      users: data.users
        .map((itemMap) => {
          return {
            id: itemMap,
            isAdmin: false,
          };
        })
        .concat({ id: authContext?.user?.id ?? '', isAdmin: true }),
    });
  };

  const handleCloseModal = () => {
    setIsOpenModalCreate(false);
  };

  const handleOpenModal = () => {
    setIsOpenModalCreate(true);
  };

  return (
    <CreateChatModal
      isLoading={isPending}
      handleOpenModal={handleOpenModal}
      control={control}
      isOpenModal={isOpenModalCreate}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
      handleCloseModal={handleCloseModal}
      users={users ?? []}
    />
  );
};

export default AddChat;
