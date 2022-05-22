import React, { forwardRef, useImperativeHandle } from "react";

let items =[];
let totalSize =0;
// export default function NftsView() {
const NftsView = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        reload(_ds){
            load(_ds)
        }
    }))
    const load = (_ds)=>{
        console.log('nft ds:::', _ds)
        let filted=[];
        totalSize = _ds.data.length;
        if(totalSize> 10){
            filted =_ds.data.slice(0, 10)
        }else {
            filted =_ds.data;
        }
         items = filted.map((i) => (
                <tr key={i.detail_url} className="bg-white">
                    <td className="p-2 text-left">
                        <div className="flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={i.thumbnail_url} alt={i.name}/>
                        </div>
                    </td>
                    <td className="p-2 text-left">{i.name}</td>
                    <td className="p-2 text-left">{i.chain}</td>
                    <td className="p-2 text-left">{i.usd_price}</td>
                    <td className="p-2 text-right underline"><a href={i.detail_url} target="_blank">see more</a></td>
                </tr>
        ));    
    }
    return (
        <div className="">
            <div className="mt-3">
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-2xl m-3">NFTs </h1>
                    <h2 className="text-sm mr-5">{
                     totalSize > 0 &&
                        'total'+totalSize
                    }</h2>
                </div>
            </div>
            {/* <div className="w-full h-44 flex justify-center items-center">
                <span className="text-gray-300 ">NFTs area</span>
            </div> */}

            <table className="relative w-full ">
                <thead>
                <tr className="text-xs border-b-2">
                    
                    <th className="sticky px-2 py-1  text-left ">Thumbnail</th>
                    <th className="sticky px-2 py-1  text-left ">Name</th>
                    <th className="sticky px-2 py-1  text-left ">Network</th>
                    <th className="sticky px-2 py-1  text-right">USD</th>
                    <th className="sticky px-2 py-1  text-left">Detail</th>
                </tr>
                </thead>
                <tbody className="divide-y text-md">
                    {items}
            </tbody>
</table>
        </div>
        
    )
  }
)
export default NftsView;