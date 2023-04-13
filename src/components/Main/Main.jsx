import { MainBox, TextBox, HelloTitle, Text } from './Main.styled';

const Main = () => {
  return (
    <MainBox>
      <TextBox>
        <HelloTitle>Hello!</HelloTitle>
        <Text>I am your assistant!</Text>
        <Text>Sign up!</Text>
      </TextBox>
    </MainBox>
  );
};

export default Main;
