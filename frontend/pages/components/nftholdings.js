import styles from "../../styles/CreatorSight.module.css";
import { Card, Image, Space, Text, Table } from '@mantine/core'


export function NftHoldings(nftholdings) {

    return (
        <>
            {/* <Card shadow='sm'> */}
                <div
                    style={{ display: "flex", alignItems: "center" }}
                    className={styles.main}
                >
                    <Space w="xs" />
                    <h2>NFT Holdings on Etherscan</h2>
                </div>
                <Space h="md" />
                <p>{JSON.stringify(nftholdings)}</p>
            {/* </Card> */}
            <Space h="lg" />
        </>
    )
}
