import styles from "../../styles/Candid.module.css";
import {Card, Image, Space, Text, Table} from '@mantine/core'
import { arrayify } from "ethers/lib/utils";

// clear holdings which have usd_value of 0
function clean(obj) {
        for (var i=0; i<obj.length; i++) {
            if (obj[i].usd_value === 0) {
                obj.splice(i, 1)
                i--;
            }
        }
        return obj
}



export function Holdings(holdings) {
    try {
        const table = clean(holdings.holdings.chain_list)
        const rows = table.map((holding) => (
            <tr key={holding.id}>
                <td> <Image width={20} height={20} fit="containt" src={holding.logo_url} alt="Without placeholder"/> </td>
                <td>{holding.id}</td>
                <td>{holding.name}</td>
                <td>{holding.usd_value}</td>
            </tr>
        ));
        return (
            <>
                <Card shadow='sm'>
                    <div
                        style={{ display: "flex", alignItems: "center" }}
                        className={styles.main}
                    >
                        <Space w="xs" />
                        <h2>Holdings</h2>
                    </div>
                    <Space h="md" w='xs'/>
                    <Text>Total holdings in USD: {holdings.holdings.total_usd_value}</Text>
                    {/* <p>{JSON.stringify(table)}</p> */}
                    <Space h="md" w='xs' />
                    <Table highlightOnHover>
                        <thead>
                            <tr>
                                <th>Token</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>USD Value</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>
                </Card>
                <Space h="lg" />
            </>
        )
    }
    catch (err) {
        console.log(err)
    }
}