import styled from 'styled-components';
import { HashLoader } from 'react-spinners';

const Container = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// import { Container } from './styles';

export function Loading() {
    return (
        <Container>
            <HashLoader color="#613cab" loading size={72} />
        </Container>
    );
}