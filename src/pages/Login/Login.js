import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations';

import {
  RegistrationBox,
  RegistrationForm,
  RegistrationButton,
  RegistrationInput,
  RegistrationLabel,
  RegistrationTitle,
} from './Login.styled';

const LogIn = () => {
  //   const [passwordType, setPasswordType] = useState('password');
  const dispatch = useDispatch();

  //   const changePasswordType = e => {
  //     e.preventDefault();
  //     if (passwordType === 'text') {
  //       setPasswordType('password');
  //       return;
  //     }
  //     setPasswordType('text');
  //   };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <RegistrationBox>
      <RegistrationForm autoComplete="off" onSubmit={handleSubmit}>
        <RegistrationTitle>Log in</RegistrationTitle>
        <RegistrationLabel>
          Email
          <RegistrationInput required name="email" type="text" />
        </RegistrationLabel>
        <RegistrationLabel>
          Password
          <RegistrationInput required name="password" type="password" />
        </RegistrationLabel>
        <RegistrationButton type="submit">Log in</RegistrationButton>
      </RegistrationForm>
    </RegistrationBox>
  );
};

export default LogIn;
