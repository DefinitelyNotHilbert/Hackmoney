import styles from "../../styles/CreatorSight.module.css";
import { Card, Image, Space, Text, Table } from '@mantine/core'


export function NFTList() {

    return (
        <>
            <Card shadow='sm'>
                <div
                    style={{ display: "flex", alignItems: "center" }}
                    className={styles.main}
                >
                    <Space w="xs" />
                    <h2>NFT List</h2>
                </div>
                <Space h="md" />
                <Text>empty for now</Text>
            </Card>
            <Space h="lg" />
        </>
    )
}
