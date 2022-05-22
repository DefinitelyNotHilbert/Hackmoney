import styles from "../styles/Candid.module.css";
import { AlertCircle, Coin, Wallet, Social, Exchange} from 'tabler-icons-react';

import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";

import { Profile } from "./components/profile";
import { Holdings } from "./components/holdings";
import { NFTList } from "./components/nftlist";
import { NftHoldings } from "./components/nftholdings";
import { DAO } from "./components/dao";
import { CompoundDefi } from "./components/compounddefi";
import { CompoundDAO } from "./components/compounddao";
import { SocialActivity } from "./components/socialactivity";


{
  /* <i class="fa-solid fa-magnifying-glass"></i> */
}
import {
  Alert,
  AppShell,
  Card,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Tabs,
  TextInput,
  Group,
  Button,
  Grid,
  Space,
  Divider, 
  Select,
  SimpleGrid,
  Container,
  Table,
  Image,
} from "@mantine/core";



const Home = () => {

  // which Theme to use
  const theme = useMantineTheme();

  // Wagmi account hook
  const { data: account } = useAccount()

  // only render components on client
  const [isSSR, setIsSSR] = useState(true);
  const [opened, setOpened] = useState(false);
  const [error, setError] = useState(false);
  const [address, setAddress] = useState('');
  const [balances, setBalances] = useState([]);
  const [holdings, setHoldings] = useState([]);
  const [nftlist, setNftlist] = useState([]);
  const [nftholdings, setNftholdings] = useState([]);
  const [compounddefi, setCompoundDefi] = useState([]);
  const [daos, setDaos] = useState([]);
  const [compounddao, setCompoundDao] = useState([]);
  const [socialscore, setSocialScore] = useState([]);
  const [walletage, setWalletAge] = useState([]);

  const [state, setState] = useState();

  // Fetches all information performed by a search
  const getContractData = async () => {
    setState("loading");
    setError(false);

    const getBalances = await fetch(`/api/balances?address=${address}`);
    const getHoldings = await fetch(`/api/holdings?address=${address}`);
    const getNftlist = await fetch(`/api/nftlist?address=${address}`);
    const getNftholdings = await fetch(`/api/nftholdings?address=${address}`);
    const getCompoundDefi = await fetch(`/defi/compound/${address}`);
    const getDaos = await fetch(`/daos/${address}`);
    const getCompoundDao = await fetch(`/dao/compound/${address}`);
    const getSocialScore = await fetch(`/api/socialscore?address=${address}`);
    const getWalletAge = await fetch(`/api/walletage?address=${address}`);

    const _balances = await getBalances.json();
    const _holdings = await getHoldings.json();
    const _nftlist = await getNftlist.json();
    const _nftholdings = await getNftholdings.json();
    const _compounddefi = await getCompoundDefi.json();
    const _daos = await getDaos.json();
    const _compounddao = await getCompoundDao.json();
    const _socialscore = await getSocialScore.json();
    const _walletage = await getWalletAge.json();

    console.log('balances', _balances.data)
    setBalances(_balances.data);
    setHoldings(_holdings.data);
    setNftlist(_nftlist.data);
    setNftholdings(_nftholdings.data);
    setCompoundDefi(_compounddefi);
    setDaos(_daos);
    setCompoundDao(_compounddao);
    setSocialScore(_socialscore.data);
    setWalletAge(_walletage.data);

    console.log('_daos', _daos)
    console.log('daos', daos)

    setState("fresh");
  };
 
  // If account?.address exists over wagmi the search is performed automatically
  // if account?.address updates, this first part of the useEffect function is called
  useEffect(() => {if (account?.address) setAddress(account?.address) & getContractData()}, [account?.address])
  useEffect(() => { setIsSSR(false) }, [])


  return (
    <Container size={1400} px={0}>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : null,
          },
          maxWidth: "75%",
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        fixed

        // Navigation Bar
        navbar={
          <Navbar
            p="lg"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            {/* Show Side Bar if balances exists */}
            {balances.data && balances.length ? (
              <>
                <Space h="md" />
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className={styles.main}
                >
                  <Image src="https://www.creativefabrica.com/wp-content/uploads/2019/05/Wallet-icon-by-nurfajrialdi95-580x387.jpg" height={40} alt="" />
                  <Text weight="bold" size="xl">
                    Wallet
                  </Text>
                </div>

                <Space h="xs" />              
                <Text>
                    {account?.address ?
                    `${account?.address && account?.address.substring(0, 6)}...${account?.address &&
                    account?.address.substring(account?.address.length - 6, account?.address.length)}`
                      :
                      `${address && address.substring(0, 6)}...${address &&
                    address.substring(address.length - 6, address.length)}`                      
                    }
                </Text>
                <Space h="xl" />
              </>
            ) : null}
          </Navbar>
        }
      
        // Header Bar
        header={
          <Header height={70} p="md" pl="0">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <div style={{ display: "flex" }} className={styles.main}>
                <Space w='20px'/>
                <a href='/'>
                  <Image src="CANDID.svg" height={20} alt="" />
                </a>
              </div>
            </div>
          </Header>
        }

        // Footer
        footer={
          <Footer height={60} p="md">
              <Text style={{ textAlign: "center" }} size='xs'>
                @2022 °Candid. All right reserved.
              </Text>
          </Footer>
        }

      >
        
        <div className={styles.main}>

          {/* Search Bar */}
          <h2>Search a Wallet Address</h2>
          <p>0x831B90C81757FFbE401A0081435E3CD4feC198c4</p>  
          <Space h="md" />
          <Grid>
            <Grid.Col span={10}>
              <TextInput
                placeholder="Enter Wallet Address"
                wrapperProps={{ padding: "100px" }}
                size="lg"
                value={address}
                onChange={(event) => setAddress(event.currentTarget.value)}
              />
            </Grid.Col>
            <Grid.Col span={2} style={{}}>
              <Button
                type="submit"
                color="orange"
                size="lg"
                onClick={getContractData}
              >
                Search
              </Button>
            </Grid.Col>
          </Grid>

          <h2>Or connect your wallet</h2>
          {/* Wagmi Wallet connector */}
          {!isSSR && <Profile/>}

          {/* Loading Bar */}
          <Space h="md" id="stats" />
          {state === "loading" && (
            <div style={{ textAlign: "center" }}>
              <img
                src={
                  "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
                }
                alt="loading..."
                width={200}
              />
            </div>
          )}

          {/* If Search gives no result */}
          <Space h='md' id='stats' />
          {error === true && (
            <>
              <Alert icon={<AlertCircle size={16} />} title="Bummer!" color="red">
                We can't find anything under that address!
                Try the following address: 0xEB5b3590d4F59Ddef7ab03C444656DF2D9806E82
              </Alert>            
            </>
          )}

          {/* <Divider my='sm'/> */}
          {/* New Card Boxes appearing */}
          {balances && balances.length > 0 && (
            <>
              {/* Ether Balances */}
              {/* <EtherBalance balances={balances}/> */}
              <Tabs tabPadding='lg'>
                <Tabs.Tab label="Social Activity" icon={<Image src="../assets/socialactivity.png" width={25} height={25}/>}>
                  {/* Social Activity */}
                  <SocialActivity socialscore={socialscore}/>
                  {/* DAOs */}
                  <DAO daos={daos} />

                  {/* Compound DAO */}
                  <CompoundDAO compounddao={compounddao} />
                </Tabs.Tab>

                <Tabs.Tab label="Borrowing & Lending" icon={<Exchange size={25}/>}>
                  {/* Compund Defi*/}
                  <CompoundDefi compound={compounddefi} />
                </Tabs.Tab>

                <Tabs.Tab label="Holdings & NFTs" icon={<Coin size={25}/>}>
                  {/* Holdings Overview */}
                  <Holdings holdings={holdings} />
                  {/* DeBank NFT List */}
                  <NFTList nftlist={nftlist} />
                  {/* Etherscan NFT List */}
                  <NftHoldings nftholdings={nftholdings} />
                </Tabs.Tab>

              </Tabs>
            </>
          )}
        </div>
      </AppShell>
    </Container>
  );
};

export default Home;
