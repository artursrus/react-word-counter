import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { Banner } from './components/Banner';
import { WordCount } from './components/WordCount';

export const App = () => {
  return (
    <Container className="my-5">
      <Stack gap={4}>
        <Banner />
        <WordCount />
      </Stack>
    </Container>
  );
};

export default App;
