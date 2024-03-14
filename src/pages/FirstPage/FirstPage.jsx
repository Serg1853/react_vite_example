import { Container, Title, StyledImage } from './FirstPage.styled';
import example from '../../assets/example.png';
import Feedback from '../../components/Feedback/Feddback';

const FirstPage = () => {
  return (
    <Container>
      <Title>First Page</Title>
      <Feedback />
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default FirstPage;
