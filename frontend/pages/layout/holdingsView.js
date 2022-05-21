

export default function HoldingsView() {
    return (
        <div className="">
            <div className="mt-3">
                <h1 className="text-2xl m-3">Holdings </h1>
            </div>
            <ul className="w-full bg-white rounded-b-2xl space-y-2 text-sm">
                <li className="p-2 flex justify-between items-center">
                    <div className="flex items-center">
                    <img className="w-8 h-8" src="./assets/ETH.png" alt="ETH" />
                        <span className="ml-2">ETH</span>
                    </div>
                </li>
                <li className="p-2 flex justify-between items-center">
                    <div className="flex items-center">
                    <img className="w-8 h-8" src="./assets/VRN.png" alt="VRN" />
                        <span className="ml-2">VRN</span>
                    </div>
                </li>
                <li className="p-2 flex justify-between items-center">
                    <div className="flex items-center">
                    <img className="w-8 h-8" src="./assets/AAVE.png" alt="AAVE" />
                        <span className="ml-2">AAVE</span>
                    </div>
                </li>
                <li className="p-2 flex justify-between items-center">
                    <div className="flex items-center">
                    <img className="w-8 h-8" src="./assets/REP.png" alt="REP" />
                        <span className="ml-2">REP</span>
                    </div>
                </li>
                <li className="p-2 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./assets/VRN.png" alt="VRN"/>
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./assets/ETH.png" alt="ETH"/>
                        </div>
                        <span className="ml-2">VRN-ETH LP</span>
                    </div>
                </li>
                <li className="p-2 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./assets/AAVE.png" alt="AAVE"/>
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./assets/REP.png" alt="REP"/>
                        </div>
                        <span className="ml-2">AAVE-REP LP</span>
                    </div>
                </li>
            </ul>
        </div>
    )
  }
