import styles from "../../styles/Candid.module.css";
import { Card, Image, Space, Text, Table } from '@mantine/core'


export function EtherBalance(balances) {

    return (
        <>
            <Card shadow='sm'>
                <div
                    style={{ display: "flex", alignItems: "center" }}
                    className={styles.main}
                >
                    <Space w="xs" />
                    <h2>Ether Balance</h2>
                </div>
                <Space h="md" />
                <Text>{balances} ether</Text>
            </Card>
            <Space h="lg" />
        </>
    )
}
