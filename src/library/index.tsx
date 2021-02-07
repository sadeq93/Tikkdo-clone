import React, { FC ,ReactElement} from 'react';
import styled from 'styled-components/native';

// ---------------------------------------------------------- Container 
interface Props{
    children:ReactElement
}
 const Container :FC <Props> = ({children}:Props):ReactElement  => {
  return <StyledContainer>{children}</StyledContainer>;
};


const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
// ---------------------------------------------------------- Text Types

const H1 = styled.Text`
  font-size: 28px;
`;
const H2 = styled.Text`
  font-size: 24px;
`;
const H3 = styled.Text`
  font-size: 20px;
`;
const H4 = styled.Text`
  font-size: 18px;
`;
const P = styled.Text`
  font-size: 14px;
`;
// ----------------------------------------------------------
export {Container, H1, H2, H3, H4, P}