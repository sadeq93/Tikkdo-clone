import React, { FC ,ReactElement,useEffect} from 'react';
import  { Container,H1 } from 'src/library'
import {useSelector} from 'react-redux';
export const HomeScreen:FC = () : ReactElement => {
     const theme = useSelector((state) => state.theme.theme);

     useEffect(() => {
     console.log(theme)
     }, [])
    return (
        <Container>
            <H1>Home Screen </H1>
        </Container>
    )
}


