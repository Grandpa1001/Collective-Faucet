import { Button} from '@mantine/core';
import { useEffect, useState } from "react";
import '../styles/App.css';
//import { ethers } from "ethers";


//export function Login() {

  const Login: React.FC = () => {
   const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
   const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);
   
   useEffect(() => {
     if((window as any).ethereum){
       //check if Metamask wallet is installed
       setIsMetamaskInstalled(true);
     }
   },[]);
   
   //Does the User have an Ethereum wallet/account?
   async function connectMetamaskWallet(): Promise<void> {
     //to get around type checking
     (window as any).ethereum
       .request({
           method: "eth_requestAccounts",
       })
       .then((accounts : string[]) => {
         setEthereumAccount(accounts[0]);
       })
       .catch((error: any) => {
           alert(`Something went wrong: ${error}`);
       });
   }
   
   if (ethereumAccount === null) {
     return (
       <div>
         {
           isMetamaskInstalled ? (
             <div>
                        <Button component='a' onClick={connectMetamaskWallet} target={"_blank"} variant="gradient" gradient={{ from: 'blue', to: '#008aff' }} size="xl">
                            Connect metamask
                        </Button>
             </div>
           ) : (
             <p>Zainstaluj Metamaska</p>
           )
         }
   
       </div>
     );
   }
   
   return (
       <header className="WalletLabel">
           <p>Połączony: 
           {ethereumAccount}</p>
       </header>
   );
  }

  export default Login;


