import { loadComponents } from "next/dist/server/load-components";
import React, { forwardRef, useImperativeHandle } from "react";

let items =[];
let total_usd_value=[];

const HoldingsView = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        reload(_ds){
            load(_ds)
        }
    }))
    
    const load = (_ds)=>{
        total_usd_value = _ds.total_usd_value;
        const filted = _ds.data.chain_list.filter(function(x){return x.usd_value > 0});
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
                <div className="w-full flex justify-between">
                <h1 className="text-2xl m-3">Holdings </h1>
                <h2 className="text-sm m-3">{total_usd_value} usd</h2>
                </div>
            </div>
            <table className="relative w-full ">
                <thead>
                <tr className="text-xs border-b-2">
                    <th className="sticky px-2 py-1  text-left ">No</th>
                    <th className="sticky px-2 py-1  text-left ">Logo</th>
                    <th className="sticky px-2 py-1  text-left ">Name</th>
                    <th className="sticky px-2 py-1  text-right">USD</th>
                </tr>
                </thead>
                <tbody className="divide-y text-md">
                    {items}
                </tbody>
            </table>
        </div>
    )
  })

export default HoldingsView;