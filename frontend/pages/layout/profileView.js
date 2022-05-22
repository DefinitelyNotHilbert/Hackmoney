import React, { forwardRef, useImperativeHandle } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi';

let age='';
let totalScore=0;
let SocialScore={}
const ProfileView = forwardRef((props, ref) => {

  
  // let SocialScore={}
  useImperativeHandle(ref, () => ({
    reload(_age, _socialscore){
        age=_age.data;
        SocialScore = _socialscore.data;
        console.log('_age::', _age)

        let idx=0;
        let total=0;
        if(SocialScore.age_score != null){
            ++idx;
            total= total + SocialScore.age_score;
        }
        if(SocialScore.multisig_score != null){
            ++idx;
            total= total + SocialScore.multisig_score;
        }
        if(SocialScore.part_score != null){
            ++idx;
            total= total + SocialScore.part_score;
        }
        if(SocialScore.pubgoods_score != null){
            ++idx;
            total= total + SocialScore.pubgoods_score;
        }
        
        totalScore=(total/idx )*(idx*1.3)
        console.log('totalScore' , totalScore)
        
    }
}))
  const load = (_ds)=>{
      
  }

  const { data: account } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: account?.address })
  const { data: ensName } = useEnsName({ address: account?.address })

  
  // console.log('#############',connectors)
  return (
<div className="w-full mt-5">
   <div className="flex flex-col md:flex-row">
      <div className="flex justify-center m-5">
      {
        ensAvatar === undefined || ensAvatar == null
        ?<div className='w-48 h-48 bg-gray-100 rounded-full flex justify-center items-center'>Empty ens Avatar</div>
        :<img src={ensAvatar} alt="profile image" />
      }
        {/* <img src="./assets/Oval.png" alt="profile image" /> */}
      </div>
      <div className="flex flex-row justify-center m-5">
        <ul>
          <li>
            <div className="flex">
              <div className="text-2xl">{ensName}</div>
              <div className="flex justify-center items-center mx-2">
                {
                  ensName === null?
                  <span></span>
                  :<img src="./assets/ProfileChecked.svg" art="" />
                }
                {/* <img src="./assets/ProfileChecked.svg" art="" /> */}
              </div>
            </div>
              </li>
          <li>
            <div className="text-lg"> {account?.address}</div>
          </li>
          <li className="flex">
              <div className="">
                <span>123</span><span className="ml-1">Following</span>
              </div>
              <div className="mx-2">
                <span>984</span><span className="ml-1">Followers</span>
              </div>
          </li>
          <li>
            <p>A lot of roads lead to rome but only one leads to <span>CANDID</span>. </p>
          </li>
          <li>
            <div className="flex items-center">
            <span className="mr-2">Candid score:</span> <span className="text-blue-600">{totalScore.toFixed(1)}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2 fill-gray-500 hover:fill-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            </div>
          </li>
          <li>
            <div className="text-md">
              Wallet Age <span className="text-md text-light text-gray-500">{age}</span>
            </div>
          </li>
        </ul>
        
      </div>
   </div>
</div>

  );
})
export default ProfileView;
