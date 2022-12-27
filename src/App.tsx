//@ts-check
import * as React from 'react';
import './styles/App.css';
import { Header, Container, Image, Button, Grid, Input, createStyles } from '@mantine/core';
import logoDev from './assets/logoColl.webp';

import { useAccount, useConnect } from 'wagmi'



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
  const { address, isConnected } = useAccount()

  const { connect, connectors, error, isLoading } = useConnect()

  // useEffect(() => {

  // },[]);

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
           {isConnected ? <p>Połączony: {address}</p> : ""}
       </header>



    <div>

      {
      
        connectors.map((connector) => (

          // Kiedy nie ma Metamaska
          !connector.ready ? <p style={{color: 'red'}}>Nie wykryto MetaMaska</p> :

          // Kiedy wykryto Metamaska
          <Button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
            loading={isLoading}
            style={{display: isConnected ? 'none' : ''}}
          >
            {isLoading ? "Logowanie" : "Podłącz portfel"}
          </Button>
        ))
      
      }
 
      {error && <div>{error.message}</div>}
    </div>

        </div>

        <div className='Faucet'>
        <Container>
                <Grid bg="white" className={classes.grid}>
                        <Grid.Col span={8}>
                                <Input disabled={!isConnected} placeholder="Wpisz swój adres portfela Goerli ETH" mt="12px"/>
                        </Grid.Col>
                        <Grid.Col span={4}>
                        <Button disabled={!isConnected} 
                        className={classes.button} size="xl">
                            Wyślij ETH</Button>
                        </Grid.Col>
                </Grid>
        </Container>
        </div>
    </div>
  
  );


}


export default App;
