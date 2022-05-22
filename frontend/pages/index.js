// import styles from "../styles/CreatorSight.module.css";
import React, { useState, useEffect } from "react";
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


  const [opened, setOpened] = useState(false);
  const [error, setError] = useState('');
  const [address, setAddress] = useState(null);
  const [balances, setBalances] = useState([]);
  const [walletage, setWalletAge] = useState([])
  const [holdings, setHoldings] = useState([]);
  const [nftlist, setNftlist] = useState([]);
  const [nftholdings, setNftholdings] = useState([]);

  const [state, setState] = useState();
  

  // Fetches all information performed by a search
  const getContractData = async (address) => {
    setState("loading");
    
    const getBalances = await fetch(`/api/balances?address=${address}`);
    const getWalletAge = await fetch(`/api/walletage?address=${address}`);
    const getHoldings = await fetch(`/api/holdings?address=${address}`);
    const getNftlist = await fetch(`/api/nftlist?address=${address}`);
    const getNftholdings = await fetch(`/api/nftholdings?address=${address}`);

    const getDaos = await fetch(`/api/daos/${address}`);
    const getCompoundDefi = await fetch(`/api/compound/${address}`);
    const getCompoundDao = await fetch(`/api/dao/compound/${address}`);
  


    const _balances = await getBalances.json();
    const _walletage = await getWalletAge.json();
    const _holdings = await getHoldings.json();
    const _nftlist = await getNftlist.json();
    const _nftholdings = await getNftholdings.json();
  
    const _compounddefi = await getCompoundDefi.json();
    const _daos = await getDaos.json();
    const _compounddao = await getCompoundDao.json();

    setBalances(_balances.data);
    setWalletAge(_walletage.data);
    setHoldings(_holdings.data);
    setNftlist(_nftlist.data);
    setNftholdings(_nftholdings.data);
    setCompoundDefi(_compounddefi.data);
    setDaos(_daos.data);
    setCompoundDao(_compounddao.data);

    try{console.log(_daos)} catch(exeption){console.log(exeption)};

    setState("fresh");
    if(networth == []) {setError('error')};
    if(networth != []) {setError('ok') };

  };
  function onSearch(addr){
    alert(addr)
  }
 
  // If account address exists over wagmi the search is performed automatically
  useEffect(()=> {if (account?.address) setAddress(account?.address) & getContractData(account?.address)}, [account?.address])
  return (
    <div className="w-full">
    {/** Header */}
    <HeaderView  onSearchAddress={ ()=>onSearch}></HeaderView>
    <div className="container mx-auto">
      <ProfileView ></ProfileView>
      {/** summary */}
      <div className="w-full mt-5">
        <div>Profile Summary</div>
        <hr className="border-2"></hr>
        <div className="flex flex-nowrap flex-col md:flex-row md:space-x-5 space-y-10 md:space-y-0 p-3">
          <div className="w-full border border-gray-700 rounded-2xl pb-2">
            <SocialScoreView />
          </div>
          <div className="w-full border border-gray-700 rounded-2xl pb-2">
            <AssetsBorrowedView />
            <AssetsSuppliedView />
            <DefiActivityView />
          </div>
          <div className="w-full border border-gray-700 rounded-2xl pb-2">
            <HoldingsView />
            <NftsView />
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
