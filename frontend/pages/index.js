import styles from "../styles/CreatorSight.module.css";
import React, { useState } from "react";
import { Provider, chain, createClient, defaultChains } from 'wagmi';
import { Profile } from "./components/provider";
import { Holdings } from "./components/holdings";
import { Wallet } from "./components/wallet";
import { AssetsSupplied } from "./components/assetssupplied";
import { AssetsBorrowed } from "./components/assetsborrowed";
import { NFTList } from "./components/nftlist";

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
  Container,
  Table,
  Image,
} from "@mantine/core";
import { AlertCircle } from 'tabler-icons-react';


const Home = () => {

  // which Theme to use
  const theme = useMantineTheme();

  // // Setup wagmi.sh connector
  // const { connect, connectors, error, isConnecting, pendingConnector } =
  //   useConnect()

  const [opened, setOpened] = useState(false);
  const [error, setError] = useState('');
  const [address, setAddress] = useState(null);
  // const [holders, setHolders] = useState([]);
  // const [token, setToken] = useState(null);
  const [balances, setBalances] = useState([]);
  const [networth, setNetworth] = useState([]);
  const [holdings, setHoldings] = useState([]);
  const [nftlist, setNftlist] = useState([]);

  const [breweries, setBreweries] = useState([]);
  // const [averages, setAverages] = useState(null);
  // const [topNFTs, setTopNFTs] = useState(null);
  const [state, setState] = useState();

  // Fetches all information performed by a search
  const getContractData = async () => {
    setState("loading");
    const getBalances = await fetch(`/api/balances?address=${address}`);
    const getNetworth = await fetch(`/api/networth?address=${address}`);
    const getHoldings = await fetch(`/api/holdings?address=${address}`);
    // const getNftlist = await fetch(`/api/nftlist?address=${address}`);

    const city = 'san_diego';
    const getBreweries = await fetch(`/api/beer?city=${city}`);

    const _balances = await getBalances.json();
    const _networth = await getNetworth.json();
    const _holdings = await getHoldings.json();
    const _breweries = await getBreweries.json();
    // const _nftlist = await getNftlist.json();

    setBalances(_balances.data);
    setNetworth(_networth.data);
    setHoldings(_holdings.data);
    setBreweries(_breweries.data);
    // setNftlist(_nftlist.data);

    setState("fresh");
    if(networth == []) {setError('error')};
    if(networth != []) {setError('ok') };

  };
 
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
                  {`${address && address.substring(0, 9)}...${address &&
                    address.substring(address.length - 9, address.length)
                    }`}
                </Text>
                <Space h="xl" />
              </>
            ) : null}
          </Navbar>
        }
      

        // header={
        //   <Header height={70} p="md" pl="0">
        //     <div
        //       style={{ display: "flex", alignItems: "center", height: "100%" }}
        //     >
        //       <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        //         <Burger
        //           opened={opened}
        //           onClick={() => setOpened((o) => !o)}
        //           size="sm"
        //           color={theme.colors.gray[6]}
        //           mr="xl"
        //         />
        //       </MediaQuery>
        //       <div style={{ display: "flex" }} className={styles.main}>
        //         <Image src="CREATORSIGHt.png" height={220} alt="" />

        //       </div>
        //       {/* <Text>CreatorSight</Text> */}
        //     </div>
        //   </Header>
        // }

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
            <Provider client={Wallet()}>
              <Profile/>
            </Provider>

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
              <NFTList/>



              {/* Sanity Check */}
              <div className="mt-6">
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className={styles.main}
                >
                  {/* <Image src="bullet-swirl.png" height={20} alt="" /> */}
                  <Space w="xs" />
                  <h2>Sanity Check: Breweries</h2>
                </div>
                <Space h="md" />
                <p>This should show data from breweries</p>
                {/* <p>{breweries.map(brewery => <div>{brewery.name}</div>)}</p> */}
                <p>{JSON.stringify(breweries)}</p>
                {/* <Card variant="overview" data={balances} /> */}
              </div>
              <Space h="lg" />

            </>
          )}
        </div>
      </AppShell>
    </Container>
  );
};

export default Home;
