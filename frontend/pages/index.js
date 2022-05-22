// import styles from "../styles/CreatorSight.module.css";
import React, { useState, useEffect, useRef } from "react";
import { Profile } from "./components/profile";
import { Holdings } from "./components/holdings";
import { Wallet } from "./components/wallet";
import { AssetsSupplied } from "./components/assetssupplied";
import { AssetsBorrowed } from "./components/assetsborrowed";
import { NFTList } from "./components/nftlist";
import { NftHoldings } from "./components/nftholdings";
import  HeaderView  from "./layout/headerView"
import ProfileView from "./layout/profileView"
import SocialScoreView from "./layout/socialScoreView"
import AssetsBorrowedView from "./layout/assetsBorrowedView";
import AssetsSuppliedView from "./layout/assetsSuppliedView"
import DefiActivityView from "./layout/defiActivityView";
import HoldingsView from "./layout/holdingsView";
import NftsView from "./layout/nftsView";
import NetWorthView from "./layout/NetWorth";
import FooterView from "./layout/footerView";

import ActivityFeedView from "./layout/activityFeedView";
import ChooseLiquidityPoolView from "./layout/chooseLiquidityPoolView";

{
  /* <i className="fa-solid fa-magnifying-glass"></i> */
}
import {
  Alert,
  AppShell,
  Card,
  Navbar,
  // Header,
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


  /**child component */
  const refProfile = useRef({});
  const refSocialVeiw = useRef({});
  const refHolding = useRef({});
  const refNFTList = useRef({});
  
  
  

  // Fetches all information performed by a search
  const getContractData = async (address) => {
    setState("loading");
    setError(false);

    const getBalances = await fetch(`/api/balances?address=${address}`);
    const _balances = await getBalances.json();
    setBalances(_balances.data);

    const getHoldings = await fetch(`/api/holdings?address=${address}`);
    const _holdings = await getHoldings.json();
    setHoldings(_holdings.data);

    const getNftlist = await fetch(`/api/nftlist?address=${address}`);
    const getNftholdings = await fetch(`/api/nftholdings?address=${address}`);
    const getCompoundDefi = await fetch(`/defi/compound/${address}`);
    const getDaos = await fetch(`/daos/${address}`);
    const getCompoundDao = await fetch(`/dao/compound/${address}`);
    const getSocialScore = await fetch(`/api/socialscore?address=${address}`);
    const getWalletAge = await fetch(`/api/walletage?address=${address}`);

    const _nftlist = await getNftlist.json();
    const _nftholdings = await getNftholdings.json();
    // const _compounddefi = await getCompoundDefi.json();
    // const _daos = await getDaos.json();
    // const _compounddao = await getCompoundDao.json();
    const _socialscore = await getSocialScore.json();
    const _walletage = await getWalletAge.json();

    console.log('balances', _balances.data)

    setNftlist(_nftlist.data);
    setNftholdings(_nftholdings.data);
    // setCompoundDefi(JSON.stringify(_compounddefi));
    // setDaos(JSON.stringify(_daos));
    // setCompoundDao(JSON.stringify(_compounddao));
    setSocialScore(_socialscore.data);
    setWalletAge(_walletage.data);

    // try{console.log(_daos)} catch(exeption){console.log(exeption)}

    /** child component relaod */
    refProfile.current.reload(_walletage, _socialscore)
    refSocialVeiw.current.reload(_socialscore)
    refHolding.current.reload(_holdings);
    refNFTList.current.reload(_nftlist)

    setState("fresh");
    // if(networth == []) {setError('error')};
    // if(networth != []) {setError('ok') };

  };
  // function onSearch(addr){
  //   alert('parent:'+ addr)
  // }

  const getSearch = (addr) => {
    console.log('parent:'+ addr)
    setAddress(addr)
    getContractData(addr)
  }

 
  // If account address exists over wagmi the search is performed automatically
  useEffect(()=> {if (account?.address) setAddress(account?.address) & getContractData(account?.address)}, [account?.address])
  return (
    <div className="w-full">
    {/** Header */}
    <HeaderView  getSearch={getSearch}></HeaderView>
    <div className="container mx-auto">
      <ProfileView  ref={refProfile}></ProfileView>
      {/** summary */}
      <div className="w-full mt-5">
        <div>Profile Summary</div>
        <hr className="border-2"></hr>
        <div className="flex flex-nowrap flex-col md:flex-row md:space-x-5 space-y-10 md:space-y-0 p-3">
          <div className="w-full border border-gray-700 rounded-2xl pb-2">
            <SocialScoreView  ref={refSocialVeiw}/>
          </div>
          <div className="w-full border border-gray-700 rounded-2xl pb-2">
            <AssetsBorrowedView />
            <AssetsSuppliedView />
            <DefiActivityView />
          </div>
          <div className="w-full border border-gray-700 rounded-2xl pb-2">
            <HoldingsView ref={refHolding} ds={nftholdings} />
            <NftsView ref={refNFTList} />
            <NetWorthView />
          </div>
        </div>
      </div>
    </div>
    <FooterView />
    {/** */}
    {/* <ActivityFeedView /> */}
    {/* <ChooseLiquidityPoolView /> */}
    </div>

  );
};

export default Home;
