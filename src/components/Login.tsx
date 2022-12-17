import { Button } from '@mantine/core';
import '../styles/App.css';
//import { ethers } from "ethers";


export function Login() {


    return (
        <Button component='a' href='' target={"_blank"} variant="gradient" gradient={{ from: 'pink', to: 'yellow' }} size="xl">
            Connect metamask
        </Button>
    );
  }