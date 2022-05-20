import styles from "../styles/CreatorSight.module.css";
import React, { useState, useEffect } from "react";
import { Profile } from "./components/profile";
import { Holdings } from "./components/holdings";
import { Wallet } from "./components/wallet";
import { AssetsSupplied } from "./components/assetssupplied";
import { AssetsBorrowed } from "./components/assetsborrowed";
import { NFTList } from "./components/nftlist";
import { NftHoldings } from "./components/nftholdings";
import Head from 'next/head'

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
import { AlertCircle } from 'tabler-icons-react';
import { useAccount } from "wagmi";


const Home = () => {

  // which Theme to use
  const theme = useMantineTheme();

  // Wagmi account hook
  const { data: account } = useAccount()

  const [opened, setOpened] = useState(false);
  const [error, setError] = useState('');
  const [address, setAddress] = useState(null);
  const [balances, setBalances] = useState([]);
  const [networth, setNetworth] = useState([]);
  const [holdings, setHoldings] = useState([]);
  const [nftlist, setNftlist] = useState([]);
  const [nftholdings, setNftholdings] = useState([]);


  const [state, setState] = useState();

  // Fetches all information performed by a search
  const getContractData = async () => {
    setState("loading");
    const getBalances = await fetch(`/api/balances?address=${address}`);
    const getNetworth = await fetch(`/api/networth?address=${address}`);
    const getHoldings = await fetch(`/api/holdings?address=${address}`);
    const getNftlist = await fetch(`/api/nftlist?address=${address}`);
    const getNftholdings = await fetch(`/api/nftholdings?address=${address}`);

    const _balances = await getBalances.json();
    const _networth = await getNetworth.json();
    const _holdings = await getHoldings.json();
    const _nftlist = await getNftlist.json();
    const _nftholdings = await getNftholdings.json();

    setBalances(_balances.data);
    setNetworth(_networth.data);
    setHoldings(_holdings.data);
    setNftlist(_nftlist.data);
    setNftholdings(_nftholdings.data);

    setState("fresh");
    if(networth == []) {setError('error')};
    if(networth != []) {setError('ok') };

  };
 
  // If account address exists over wagmi the search is performed automatically
  useEffect(()=> {if (account?.address) setAddress(account?.address) & getContractData()}, [account?.address])


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
            {balances && balances.length ? (
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
          <p>0x5B5ECfc8122bA166b21d6Ea26268Ef97e09B2E9F</p>  
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
              {/* <Group position="right" mt="md"> */}
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
            {/* <Provider client={Wallet()}> */}
            <Profile/>
            {/* </Provider> */}

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
          {error === 'error' && (
            <>
              <Alert icon={<AlertCircle size={16} />} title="Bummer!" color="red">
                We can't find anything under that address!
                Try the following address: 0xEB5b3590d4F59Ddef7ab03C444656DF2D9806E82
              </Alert>            
            </>
          )}

          <Divider my='sm'/>
          {/* New Card Boxes appearing */}
          {balances && balances.length > 0 && (
            <>
              {/* Ether Overview */}
              <div className="mt-6">
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className={styles.main}
                >
                  {/* <Image src="bullet-swirl.png" height={20} alt="" /> */}
                  <Space w="xs" />
                  <h2>Ether Balance</h2>
                </div>
                <Space h="md" />
                <p>{balances} ether</p>
                {/* <Card variant="overview" data={balances} /> */}
              </div>
              <Space h="lg" />

              {/* Holdings Overview */}
              <Holdings holdings={holdings}/>
            
              {/* Assets Supplied */}
              <AssetsSupplied/>

              {/* Assets Supplied */}
              <AssetsBorrowed />

              {/* NFT List */}
              <NFTList nftlist={nftlist}/>

              <NftHoldings nftholdings={nftholdings}/>

            </>
          )}
        </div>
      </AppShell>
    </Container>
  );
};

export default Home;
