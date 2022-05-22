import React, { forwardRef, useImperativeHandle } from "react";
import ScoreGauge from '../components/scoreGauge';
import ActivityFeedView from "../layout/activityFeedView";



let SocialScore={}
let totalScore=0;

const SocialScoreView = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
      reload(_socialscore){
          SocialScore = _socialscore.data;
          console.log('_socialscore::', _socialscore)
          console.log('multisig_score::', SocialScore.multisig_score)

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
        
        totalScore=(total/idx )*10
        console.log('totalScore' , totalScore)
      }
  }))

  
    return (
        <div className="w-full">
            <div className="flex m-3">
                <div className="w-full">
                    <h1 className="text-2xl">Social score</h1>
                    <p className="text-sm">Measures the integrity of the person with our open source social score for the blockchain.</p>
                    <div className="text-blue-400">
                        <a href="#">Learn more here  &gt;</a>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                                        
                    <ScoreGauge val={ Math.floor(totalScore,2) } />
                </div>
            </div>
            <table className="relative w-full ">
                <thead>
                <tr className="text-xs border-b-2">
                    <th className="sticky px-2 py-1  text-left ">Criteria</th>
                    <th className="sticky px-2 py-1  text-right">Score</th>
                </tr>
                </thead>
                <tbody className="divide-y text-sm">
                <tr className="bg-white">
                    <td className="p-2 text-left">DAO Voter</td>
                    <td className="p-2 text-right">{Math.floor(SocialScore.part_score,2)}</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="p-2 text-left">Multi-sig signer</td>
                    <td className="p-2 text-right">{Math.floor(SocialScore.multisig_score,2)}</td>
                </tr>
                <tr className="bg-white">
                    <td className="p-2 text-left">Public good doner</td>
                    <td className="p-2 text-right">{Math.floor(SocialScore.pubgoods_score,2)}</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="p-2 text-left">Age</td>
                    <td className="p-2 text-right">{Math.floor(SocialScore.age_score,2)}</td>
                </tr>
                </tbody>
            </table>
            <div className="mt-3">
                <h1 className="text-2xl m-3">Latest Activity </h1>
            </div>
            {/* <ActivityFeedView /> */}
            <div className="w-full h-44 flex justify-center items-center bg-gray-50">
                <span className="text-gray-300 ">Activity area</span>
            </div>

        </div>
    )
})
export default  SocialScoreView;