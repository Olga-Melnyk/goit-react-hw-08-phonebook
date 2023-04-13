import {
  RegistrationBox,
  RegistrationForm,
  RegistrationButton,
  RegistrationInput,
  RegistrationLabel,
  RegistrationTitle,
} from './Registration.styled';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations';
// import { SlHome } from 'react-icons/sl';

const Registration = () => {
  // const [passwordType, setPasswordType] = useState('password');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  // const changePasswordType = e => {
  //   e.preventDefault();
  //   if (passwordType === 'text') {
  //     setPasswordType('password');
  //     return;
  //   }
  //   setPasswordType('text');
  // };
  return (
    <RegistrationBox>
      <RegistrationForm autoComplete="off" onSubmit={handleSubmit}>
        <RegistrationTitle>Sign up</RegistrationTitle>
        <RegistrationLabel>
          Name
          <RegistrationInput required type="text" name="name" />
        </RegistrationLabel>
        <RegistrationLabel>
          Email
          <RegistrationInput required type="email" name="email" />
        </RegistrationLabel>
        <RegistrationLabel>
          Password
          <RegistrationInput required type="password" name="password" />
        </RegistrationLabel>

        <RegistrationButton type="submit">Sign up</RegistrationButton>
      </RegistrationForm>
    </RegistrationBox>
  );
};

export default Registration;
