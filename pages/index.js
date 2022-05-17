import Web3 from "web3";
import styles from "../styles/CreatorSight.module.css";
import React, { useState } from "react";
{
  /* <i class="fa-solid fa-magnifying-glass"></i> */
}
import {
  AppShell,
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
import Link from "next/link";

const Home = () => {

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  // const [error, setError] = useState("");

  const [address, setAddress] = useState(null);
  // const [holders, setHolders] = useState([]);
  // const [token, setToken] = useState(null);
  const [balances, setBalances] = useState([]);
  const [networth, setNetworth] = useState([]);
  const [holdings, setHoldings] = useState([]);
  const [breweries, setBreweries] = useState([]);


  // const [averages, setAverages] = useState(null);
  // const [topNFTs, setTopNFTs] = useState(null);

  const [state, setState] = useState();


  const getContractData = async () => {
    setState("loading");
    const getBalances = await fetch(`/api/balances?address=${address}`);
    const getNetworth = await fetch(`/api/networth?address=${address}`);
    const getHoldings = await fetch(`/api/holdings?address=${address}`);

    const city = 'san_diego';
    const getBreweries = await fetch(`/api/beer?city=${city}`);

    const _balances = await getBalances.json();
    const _networth = await getNetworth.json();
    const _holdings = await getHoldings.json();
    const _breweries = await getBreweries.json();


    setBalances(_balances.data);
    setNetworth(_networth.data);
    setHoldings(_holdings.data);
    setBreweries(_breweries.data);


    setState("fresh");
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
                  <Text weight="bold" size="xl">
                    Contract
                  </Text>
                  {/* <Space w="xs" />

                  <Image src="bullet-swirl.png" height={20} alt="" /> */}
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
          {/* <p>0x37A03D4AF1D7046d1126987b20117A0FdCBF6535</p> */}
          <Space h="md" />
          <Grid>
            <Grid.Col span={10}>
              <TextInput
                placeholder="Enter Collection Address"
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

              {/* </Group> */}
            </Grid.Col>
          </Grid>

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
                  <h2>Holdings</h2>
                </div>
                <Space h="md" />
                <p>{balances} ether</p>
                {/* <Card variant="overview" data={balances} /> */}
              </div>
              <Space h="lg" />

              {/* Holdings Overview */}
              <div className="mt-6">
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className={styles.main}
                >
                  {/* <Image src="bullet-swirl.png" height={20} alt="" /> */}
                  <Space w="xs" />
                  <h2>Networth</h2>
                </div>
                <Space h="md" />
                <p>USD {networth.data.total_usd_value}</p>
                <p>{JSON.stringify(holdings)}</p>

                {/* <Card variant="overview" data={balances} /> */}
              </div>
              <Space h="lg" />
            
              {/* Token Collateral */}
              <div className="mt-6">
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className={styles.main}
                >
                  {/* <Image src="bullet-swirl.png" height={20} alt="" /> */}
                  <Space w="xs" />
                  <h2>Token Collateral Supplied</h2>
                </div>
                <Space h="md" />
                <p>empty for now</p>
                {/* <Card variant="overview" data={balances} /> */}
              </div>
              <Space h="lg" />

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
