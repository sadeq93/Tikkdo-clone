// This is my Custom Library 
import React, { FC ,ReactElement} from 'react';
import styled from 'styled-components/native';

// ---------------------------------------------------------- Container 
interface Props{
    children:ReactElement[]
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
// ---------------------------------------------------------- Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface IconsInterface {
  home : ReactElement
  home_o : ReactElement
  bookmark : ReactElement
  bookmark_o : ReactElement
  edit : ReactElement
  deleteIcon : ReactElement
}
const Icons :IconsInterface = {
  home : <Ionicons name="home" size={30} color="#000" />,
  home_o : <Ionicons name="home-outline" size={30} color="#000" />,
  bookmark : <FontAwesome name="bookmark" size={30} color="#000" />,
  bookmark_o : <FontAwesome name="bookmark-o" size={30} color="#000" />,
  edit : <FontAwesome name="edit" size={30} color="#000" />,
  deleteIcon : <MaterialCommunityIcons name="delete" size={30} color="#000" />
}
// ----------------------------------------------------------

export {Container, H1, H2, H3, H4, P,Icons}