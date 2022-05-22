import React, { forwardRef, useImperativeHandle } from "react";

// export default function NftsView() {
const NftsView = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        reload(_ds){
            load(_ds)
        }
    }))
    const load = (_ds)=>{
        console.log('ds:::', _ds)
        total_usd_value = _ds.total_usd_value;
        const filted = _ds.data.chain_list.filter(function(x){return x.usd_value > 0});
        console.log('filted::', filted)
         items = filted.map((i) => (
                <tr className="bg-white">
                    <td className="p-2 text-left">{i.community_id}</td>
                    <td className="p-2 text-left">
                        <div className="flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={i.logo_url} alt={i.name}/>
                        </div>
                    </td>
                    <td className="p-2 text-left">{i.name}</td>
                    <td className="p-2 text-right">{i.usd_value}</td>
                </tr>
        ));    
    }
    return (
        <div className="">
            <div className="mt-3">
                <h1 className="text-2xl m-3">NFTs </h1>
            </div>
            <div className="w-full h-44 flex justify-center items-center">
                <span className="text-gray-300 ">NFTs area</span>
            </div>
        </div>
    )
  }
  export default NftsView;