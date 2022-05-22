
export default function ActivityFeedView({val}) {

    const feeds=[]
    const rows = feeds.map((nft) => (
        
        <li key={nft} className="p-2 flex justify-between items-center">
            <div className="flex items-center">
            <img className="w-8 h-8" src="./assets/DAI.png" alt="ETH" />
                <span className="ml-2">21'002 DAI</span>
            </div>
            <div>
                <a href="#">
                    <span className="underline">Borrowed on Aave</span>
                </a>
            </div>
        </li>
    ));

    return (
        <div className="border border-gray-700 rounded-2xl m-3 pb-3">
            <div className="bg-gray-100 rounded-t-2xl h-10 flex items-center">
                <h1 className="ml-5">Activity feed</h1>
            </div>
            <table className="relative w-full ">
                <thead>
                <tr className="text-xs border-b-2">
                    <th className="sticky px-2 py-1  text-left ">No</th>
                    <th className="sticky px-2 py-1  text-left ">Title</th>
                    <th className="sticky px-2 py-1  text-left ">Time</th>
                    <th className="sticky px-2 py-1  text-right">Func</th>
                </tr>
                </thead>
                <tbody className="divide-y text-md">
                    <tr className="bg-white">
                        <td className="p-2 text-left">
                            <img className="w-8 h-8" src="./assets/Oval.png" alt="ETH" />
                        </td>
                        <td className="p-2 text-left">Borrow 5 ETH from Aave</td>
                        <td className="p-2 text-left">05/20/22, 19:00</td>
                        <td className="p-2 text-right underline">
                            <a href="#" >See transaction</a>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className="p-2 text-left">
                            <img className="w-8 h-8" src="./assets/SUSHI.png" alt="SUSHI" />
                        </td>
                        <td className="p-2 text-left">1519 SUSHI</td>
                        <td className="p-2 text-left">-</td>
                        <td className="p-2 text-right underline">
                            <a href="#">Supplied on Compound</a>
                        </td>
                    </tr>
                
                </tbody>
            </table>
        </div>
    )
  }