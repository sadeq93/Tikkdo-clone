import React, { FC ,ReactElement} from 'react';
import  { Container,H1,Icons } from 'src/library'
export const HomeScreen:FC = () : ReactElement => {
    return (
        <Container>
            <H1>Home Screen </H1>
            {Icons.home}
        </Container>
    )
}


