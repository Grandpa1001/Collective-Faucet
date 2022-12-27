//@ts-check
import * as React from 'react';
import './styles/App.css';
import {useEffect,useState} from "react";

import {Header, Container, Image, Button, Grid, Input, createStyles } from '@mantine/core';
import logoDev from './assets/logoColl.webp';

const HEADER_HEIGHT = 84;
const useStyles = createStyles((theme) => ({
  grid: {
    color: theme.white,
    border: 0,
    borderRadius: theme.radius.md,
    padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
    margin: theme.spacing.md,
  },
  button: {
          background: theme.fn.linearGradient(90, '#00a1e4', '#ed1a3b', '#ffcb05'),
          border: 0 
  }
}));

function App() {
  const { classes } = useStyles();

  const [connectedMM, setConnectedMM] = useState<boolean>(false);
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
  const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);

  useEffect(() => {
    if((window as any).ethereum){
      //check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
      checkIfWalletIsConnected();
    }
  },[]);
  
  const checkIfWalletIsConnected = async () =>{
    try{
      const accounts = await (window as any).ethereum.request({method: 'eth_accounts'});
      console.log(accounts);
      if(accounts>0){
        const account = accounts[0];
        setConnectedMM(true);
        setEthereumAccount(account);
        console.log("Jest ETH", account+ " oraz zmienna czy polaczony na ["+ connectedMM+"]");
      } else{
        console.log("Brak eth");
      }
    } catch(error){
      console.log(error);
    }
  }

//Does the User have an Ethereum wallet/account?
async function connectMetamaskWallet(): Promise<void> {
  //to get around type checking
  (window as any).ethereum
    .request({
        method: "eth_requestAccounts",
    })
    .then((accounts : string[]) => {
      setEthereumAccount(accounts[0]);
      console.log("Połączony " +accounts[0]);
      checkIfWalletIsConnected();
      
    })
    .catch((error: any) => {
        alert(`Something went wrong: ${error}`);
    });
}

if(connectedMM){
  return(
    <div className="App">
      <Header height={HEADER_HEIGHT} mb={84} className={'Head'}>
        <Container display={'flex'}>
          <Image src={logoDev} width={100} left = {'0'}/>
        </Container>
      </Header>
        <h1 className="App-title1">Faucet ETH GOERLI</h1>
        <div className='LoginContainer'>    
       <header className="WalletLabel">
           <p>Połączony: 
           {ethereumAccount}</p>
       </header>
  

        </div>

        <div className='Faucet'>
        <Container>
                <Grid bg="white" className={classes.grid}>
                        <Grid.Col span={8}>
                                <Input placeholder="Wpisz swój adres portfela Goerli ETH" mt="12px"/>
                        </Grid.Col>
                        <Grid.Col span={4}>
                        <Button component='a' href='' target={"_blank"} className={classes.button} size="xl">
                            Wyślij ETH</Button>
                        </Grid.Col>
                </Grid>
        </Container>
        </div>
    </div>
  
  );
}

return(
  <div className="App">
      <Header height={HEADER_HEIGHT} mb={84} className={'Head'}>
        <Container display={'flex'}>
          <Image src={logoDev} width={100} left = {'0'}/>
        </Container>
      </Header>
        <h1 className="App-title1">Faucet ETH GOERLI</h1>
        <div className='LoginContainer'>    
        if(ethereumAccount === null){
       <div>
         {
           isMetamaskInstalled ? (
             <div>
                        <Button component='a' onClick={connectMetamaskWallet} target={"_blank"} variant="gradient" gradient={{ from: 'blue', to: '#008aff' }} size="xl" >
                            Połącz metamask
                        </Button>
                        
             </div>
           ) : (
             <p>Zainstaluj Metamaska</p>
           )
         }
   
       </div>
      }


        </div>

        <div className='Faucet'>
        <Container>
                <Grid bg="white" className={classes.grid}>
                        <Grid.Col span={8}>
                                <Input placeholder="Wpisz swój adres portfela Goerli ETH" mt="12px" disabled/>
                        </Grid.Col>
                        <Grid.Col span={4}>
                        <Button component='a' href='' target={"_blank"} className={classes.button} size="xl" disabled>
                            Wyślij ETH</Button>
                        </Grid.Col>
                </Grid>
        </Container>
        </div>
    </div>
  
);
}


export default App;











  

