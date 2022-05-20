import styles from "../../styles/CreatorSight.module.css";
import { Card, Image, Space, Text, Table } from '@mantine/core'

export function NFTList(nftlist) {
    // try {
    const table = nftlist.nftlist
    const rows = table.map((nft) => (
        <tr key={nft.id}>
            <td>
                {nft.content == null ? 
                    <Image width={40} height={40} fit="containt" src='https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'/>:
                    <Image width={40} height={40} fit="containt" src={nft.content} />
                    }
            </td>
            <td>{nft.name}</td>
            <td>{nft.contract_name}</td>
            <td>{nft.usd_price}</td>
            <td><Text style={{flexShrink:1}} size='xm' variant='Link' component='a' href={nft.detail_url}>{nft.detail_url}</Text></td>
        </tr>
    ));
    return (
        <>
            {/* <Card shadow='sm'> */}
                <div
                    style={{ display: "flex", alignItems: "center" }}
                    className={styles.main}
                >
                    <Space w="xs" />
                    <h2>NFT Holdings</h2>
                </div>
                <Space h="md" />
                {/* <Text>Total NFT holdings in USD: {holdings.holdings.total_usd_value}</Text> */}
                {/* <p>{JSON.stringify(table)}</p> */}
                <Table highlightOnHover verticalSpacing='10' horizontalSpacing='10'>
                    <thead>
                        <tr>
                            <th>NFT</th>
                            <th>Name</th>
                            <th>contract_name</th>
                            <th>USD Value</th>
                            {/* <th>URL</th> */}
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            {/* </Card> */}
            <Space h="lg" />
        </>
    )
}
//     catch (err) {
//         console.log(err)
//     }
// }

// export function NFTList(nftlist) {

//     return (
//         <>
//             <Card shadow='sm'>
//                 <div
//                     style={{ display: "flex", alignItems: "center" }}
//                     className={styles.main}
//                 >
//                     <Space w="xs" />
//                     <h2>NFT List</h2>
//                 </div>
//                 <Space h="md" />
//                 <Text>empty for now</Text>
//                 <Text>{JSON.stringify(nftlist.nftlist)}</Text>
//             </Card>
//             <Space h="lg" />
//         </>
//     )
// }
