import React, {
  FC,
  FormEventHandler,
  memo,
  ReactElement,
  useEffect,
  useMemo,
} from 'react';
import Modal from '../../shared/ui/Modal';
import IconButton from '@mui/material/IconButton';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Button from '../../shared/ui/Button';
import MultipleSelect from '../../shared/ui/MultipleSelect';
import { User } from '../../shared/api/rest/controllers/data-contracts';
import { ItemMultipleSelect } from '../../shared/ui/MultipleSelect/types';
import { CircularProgress, Grid } from '@mui/material';
import {
  Control,
  Controller,
  DeepRequired,
  FieldErrorsImpl,
  GlobalError,
} from 'react-hook-form';
import FormControl from '../../shared/ui/FormControl/FormControl';
import { userForm } from '../../features/AddChat/types';

interface Props {
  isOpenModal: boolean;
  isLoading?: boolean;
  handleOpenModal: () => void;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleCloseModal: () => void;
  users: User[];
  control: Control<userForm, any>;
  errors: Partial<FieldErrorsImpl<DeepRequired<userForm>>> & {
    root?: Record<string, GlobalError> & GlobalError;
  };
}

const parseUserToItems = (users: User[]): ItemMultipleSelect[] => {
  return users.map((user) => {
    return {
      value: user.id,
      label: `${user.firstName} ${user.lastName}`,
    } as ItemMultipleSelect;
  });
};

const CreateChatModal: FC<Props> = ({
  handleOpenModal,
  handleCloseModal,
  handleSubmit,
  isOpenModal,
  users,
  errors,
  control,
  isLoading,
}) => {
  const ActionModal = () => (
    <>
      <Button type="submit">
        {isLoading ? <CircularProgress size={24.5} /> : 'Создать чат'}
      </Button>
      <Button variant="outlined" onClick={handleCloseModal}>
        Отменить
      </Button>
    </>
  );

  const WrapperDialog = (children: ReactElement) => (
    <form style={{ width: 700 }} onSubmit={handleSubmit}>
      {children}
    </form>
  );

  const items = useMemo(() => parseUserToItems(users), [users]);

  const ContentModal = () => (
    <Grid
      sx={{ marginTop: 0.1 }}
      alignItems="center"
      container={true}
      rowSpacing={4}
    >
      <Grid item={true} xs={12}>
        <Controller
          name="name"
          rules={{ required: 'Название чата не должно быть пустым' }}
          control={control}
          render={({ field }) => (
            <FormControl
              {...field}
              ref={undefined}
              error={!!errors.name}
              textError={errors.name?.message}
              placeholder="Введите название чата"
              label="Название чата"
            />
          )}
        />
      </Grid>
      <Grid item={true} xs={12}>
        <Controller
          name="users"
          control={control}
          render={({ field }) => (
            <MultipleSelect
              {...field}
              ref={undefined}
              label="Пользователи"
              items={items}
            />
          )}
        />
      </Grid>
    </Grid>
  );

  useEffect(() => {
    console.log(control);
  }, [control]);

  return (
    <>
      <IconButton onClick={handleOpenModal}>
        <AddCommentIcon color="primary" />
      </IconButton>
      <Modal
        maxWidth="lg"
        open={isOpenModal}
        onClose={handleCloseModal}
        customTitle="Новый чат"
        customContent={<ContentModal />}
        customAction={<ActionModal />}
        wrapper={WrapperDialog}
      />
    </>
  );
};

export default memo(CreateChatModal);
