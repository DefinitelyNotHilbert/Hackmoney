
import CoinSelector from "../components/coinSelector";

function getRndAddress(){
    return '0x'+Math.random().toString(36).substr(0,4)+'...'+ Math.random().toString(36).substr(0,4);
}
function getRndDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
  }

export default function ChooseLiquidityPoolView({val}) {
    
    const feeds=[]
    for(let i=0;i < 10; ++i){
        feeds.push({
            tx:Math.random().toString(36).substr(0,23),
            from:getRndAddress(),
            to:getRndAddress(),
            value:Math.floor(Math.random()*1000),
            at: getRndDate(2022,0,1)
        })
    }
    const rows = feeds.map((_lp) => (
        <tr className="bg-white">
            <td className="p-2 text-left">
            {_lp.tx}
            </td>
            <td className="p-2 text-center">
            {_lp.from}
            </td>
            <td className="p-2 text-center">
            {_lp.value}
            </td>
            <td className="p-2 text-center">
            {/* {_lp.at} */}
            </td>
            <td className="p-2 text-right underline">
                <a href="#" >See more</a>
            </td>
        </tr>
    ));

    return (
        <div className="border border-gray-700 rounded-2xl m-3 pb-3">
            <div className="h-50 flex-col items-center">
                <h1 className="mt-16 ml-5 text-4xl font-extrabold">Choose liquidity pool to see activity</h1>
                <div className="w-full flex justify-end mt-4 mb-10">
                    <div className="w-24 mr-8">
                    <CoinSelector />
                    </div>
                </div>
                
            </div>
            <table className="relative w-full ">
                <thead>
                <tr className="text-xs border-b-2">
                    <th className="sticky px-2 py-1  text-left ">ETH Tx</th>
                    <th className="sticky px-2 py-1  text-center ">Borrowed by</th>
                    <th className="sticky px-2 py-1  text-center ">Value</th>
                    <th className="sticky px-2 py-1  text-center ">Time</th>
                    <th className="sticky px-2 py-1  text-right">Detail</th>
                </tr>
                </thead>
                <tbody className="divide-y text-md">
                    {rows}
                </tbody>
            </table>
        </div>
    )
  }