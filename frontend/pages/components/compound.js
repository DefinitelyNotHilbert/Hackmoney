import styles from "../../styles/CreatorSight.module.css";
import { Card, Image, Space, Text, Table } from '@mantine/core'


export function Compound(compound) {

    return (
        <>
            <Card shadow='sm'>
                <div
                    style={{ display: "flex", alignItems: "center" }}
                    className={styles.main}
                >
                    <Space w="xs" />
                    <h2>Compound</h2>
                </div>
                <Space h="md" />
                <Text>{JSON.stringify(compound)}</Text>
            </Card>
            <Space h="lg" />
        </>
    )
}
