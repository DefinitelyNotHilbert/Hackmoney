

export default function AssetsSuppliedView() {
    return (
        <div className="border border-gray-700 rounded-2xl m-3">
            <div className="bg-gray-100 rounded-t-2xl h-10 flex items-center">
                <h1 className="ml-5">Assets Supplied</h1>
            </div>
            <ul className="w-full bg-white rounded-b-2xl space-y-2 text-sm">
                <li className="p-2 flex justify-between items-center">
                    <div className="flex items-center">
                        <img className="w-8 h-8" src="./assets/ETH.png" alt="ETH" />
                        <span className="ml-2">1 ETH</span>
                    </div>
                    <div>
                        <a href="#">
                            <span className="underline text-xs">Supplied on Aave</span>
                        </a>
                    </div>
                </li>
                <li className="p-2 flex justify-between items-center">
                    <div className="flex items-center">
                    <img className="w-8 h-8" src="./assets/SUSHI.png" alt="SUSHI" />
                        <span className="ml-2">1519 SUSHI</span>
                    </div>
                    <div>
                        <a href="#">
                            <span className="underline text-xs">Supplied on Compound</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
  }