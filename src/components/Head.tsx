import {Header, Container, Image } from '@mantine/core';
import '../styles/Head.css';
import logoDev from '../assets/logoDev.webp';
import logoColl from '../assets/logoColl.webp';

const HEADER_HEIGHT = 84;



export function Head() {
  return (
    <Header height={HEADER_HEIGHT} mb={84} className={'Head'}>
      <Container display={'flex'}>
        <Image src={logoDev} width={100} left = {'0'}/>
      </Container>
    </Header>
  );
}


