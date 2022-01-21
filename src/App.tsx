import "./App.css";
import { useMemo } from "react";

import Minter from "./Minter";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getMathWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { ThemeProvider, createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
  : undefined;

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet(), getMathWallet() ],
    []
  );

  function toggleMenu() {
    const menu = document.getElementById("mobileNavContainer")!;
    menu.classList.toggle("open-menu");
    console.log("pressed");
  }

  return (
    <div>
      <div id="mobileNavContainer" className="mobile-nav">
        <div className="mobile-nav-close-button" >
          <img src="/icons/close.svg" alt="" onClick={toggleMenu}/>
        </div>
        <ul>
          <li>
            <img className="mobile-nav-logo" src="/img/logo.png" alt="" />
          </li>
          <li>
            <a href="/#link1" onClick={toggleMenu}>
              Link 1
            </a>
          </li>
          <li>
            <a href="/#link2" onClick={toggleMenu}>
              Link 2
            </a>
          </li>
          <li>
            <a href="/#link3" onClick={toggleMenu}>
              Link 3
            </a>
          </li>
          <li>
            <a href="/#link4" onClick={toggleMenu}>
              Link 4
            </a>
          </li>
          <li>
            <div className="social-icons">
              <img className="nav-social" src="/icons/twitter.svg" alt="" />
              <img className="nav-social" src="/icons/discord.svg" alt="" />
            </div>
          </li>
        </ul>
      </div>
      <div className="mobile-menu-button" onClick={toggleMenu}>
        <img src="/icons/menu.svg" alt="" />
      </div>
      <nav>
        <div className="nav-container">
          <img className="nav-logo" src="/img/logo.png" alt="" />
          <a className="hide-800" href="/#Home">
            Home
          </a>
          <a className="hide-800" href="/#link2">
            About Us
          </a>
          <a className="hide-800" href="/#link3">
            Gallery
          </a>
          <a className="hide-800" href="/#link4">
            Team
          </a>
          <div className="social-icons hide-800">
            <img className="nav-social" src="/icons/twitter.svg" alt="" />
            <img className="nav-social" src="/icons/discord.svg" alt="" />
          </div>
        </div>
      </nav>

         <div className="content-wrapper">
          <header className="card" id="link1">
            <div style={{ padding: "0px 24px 0px 24px" }}>
              <h3 className="text-secondary-color">Welcome To</h3>
              <h1 className="pb-3">SolNFT</h1>
              <p className="text-secondary-color">
                The new minting website for help people create NFT on solana blockhain
              </p>
            </div>
            <div>
              <ThemeProvider theme={theme}>
                <ConnectionProvider endpoint={endpoint}>
                  <WalletProvider wallets={wallets} autoConnect>
                    <WalletDialogProvider>

                        <Minter
                          candyMachineId={candyMachineId}

                          connection={connection}
                          startDate={startDateSeed}
                          txTimeout={txTimeout}
                          rpcHost={rpcHost}
                        />

                    </WalletDialogProvider>
                  </WalletProvider>
                </ConnectionProvider>
              </ThemeProvider>
            </div>
          </header>

          <div className="pb-4">
          </div>

          <div className="content-wrapper">
           <header className="body" id="link1">
             <div style={{ padding: "24px 10px 24px 24px" }}>
               <h3 className="Pb-3">About Us</h3>
               <div className="pb-2">
               </div>
               <p className="pb-2">
               SolNFT is the first Text NFT collection that also serves as your Mint Pass, allowing you to get unlimited NFT airdrops of artistic representations of your token. Each version is hand-drawn by artists from all across the world.
We're the outcasts. Persona non grata at the yacht club, written off and forgotten. We construct together. We make art together. SOLNFT unite to form a formidable force.
               </p>
             </div>
             <div>
              <div className="img">
                  <div style={{ padding: "25px 25px 25px 25px" }}>
                 <img src="img/sssss.jpeg"  className="img-responsive" alt="" />
              </div>
             </div>
            </div>
          </header>
         </div>

              <div className="pb-4">
              </div>


              <div className="container" id="Content">
                <h1 className="text-center">Content</h1>
                <div className="row">
                  <div className="teamCard">
                    <div className="card mx-auto">
                      <img src="img/sssss.jpeg" className="card-img-top" alt="CEO" style={{width: `15rem` }} />
                      <div className="card-body">
                        <h5 className="card-title">Team memeber 1</h5>
                        <p className="card-text">The CEO</p>
                        <a href="https://twitter.com/CryptoBoil?t=BoU5KDjJVg_ab3bXxmkYmg&s=09" className="btn btn-primary">twitter</a>
                      </div>
                    </div>

                    <div className="card mx-auto">
                      <img src="img/sssss.jpeg" className="card-img-top" alt="CEO" style={{width: `15rem`}} />
                      <div className="card-body">
                        <h5 className="card-title">Team memeber 1</h5>
                        <p className="card-text">The CEO</p>
                        <a href="https://twitter.com/CryptoBoil?t=BoU5KDjJVg_ab3bXxmkYmg&s=09" className="btn btn-primary">twitter</a>
                      </div>
                    </div>

                    <div className="card mx-auto">
                      <img src="img/sssss.jpeg" className="card-img-top" alt="CEO" style={{width: `15rem`}} />
                      <div className="card-body">
                        <h5 className="card-title">Team memeber 1</h5>
                        <p className="card-text">The CEO</p>
                        <a href="https://twitter.com/CryptoBoil?t=BoU5KDjJVg_ab3bXxmkYmg&s=09" className="btn btn-primary">twitter</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


          <div id="link3" className="container card">
            <h1 className="pb-3">Lorem ipsum</h1>
</div>


          <div id="link4" className="container faq">
            <h1 style={{ padding: "0 0 24px 0" }}>FAQ</h1>
            <div>
              <h4>Lorem ipsum?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                id metus id mauris tincidunt posuere. Vivamus neque odio, imperdiet
                vitae.
              </p>

              <hr />
            </div>

            <div>
              <h4>Lorem ipsum?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                id metus id mauris tincidunt posuere. Vivamus neque odio, imperdiet
                vitae.
              </p>

              <hr />
            </div>

            <div>
              <h4>Lorem ipsum?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                id metus id mauris tincidunt posuere. Vivamus neque odio, imperdiet
                vitae.
              </p>

              <hr />
            </div>
          </div>
      </div>
    </div>
  );
};

export default App;
