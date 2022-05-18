import styles from "../../styles/CreatorSight.module.css";
import { Card, Image, Space, Text, Table } from '@mantine/core'


export function AssetsBorrowed() {

    return (
        <>
            <Card shadow='sm'>
                <div
                    style={{ display: "flex", alignItems: "center" }}
                    className={styles.main}
                >
                    <Space w="xs" />
                    <h2>Assets Borrowed</h2>
                </div>
                <Space h="md" />
                <Text>empty for now</Text>
            </Card>
            <Space h="lg" />
        </>
    )
}
