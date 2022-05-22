
import ScoreGauge from '../components/scoreGauge';

export default function SocialScoreView() {
    const score = 12.1;
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
                    {/* <div className="h-24 w-24 rounded-full border-4 border-gray-400 flex justify-center items-center">
                        <div>
                            <div className="text-4xl text-center">9.7</div>
                            <div className="text-xs">CANDID Score</div>
                        </div>
                    </div> */}
                    <ScoreGauge val={score} />
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
                    <td className="p-2 text-right">8.9</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="p-2 text-left">Multi-sig signer</td>
                    <td className="p-2 text-right">6.8</td>
                </tr>
                <tr className="bg-white">
                    <td className="p-2 text-left">Public good doner</td>
                    <td className="p-2 text-right">10</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="p-2 text-left">Age</td>
                    <td className="p-2 text-right">10</td>
                </tr>
                </tbody>
            </table>
            <div className="mt-3">
                <h1 className="text-2xl m-3">Latest Activity </h1>
            </div>
            <div className="w-full h-44 flex justify-center items-center bg-gray-50">
                <span className="text-gray-300 ">Activity area</span>
            </div>

        </div>
    )
}