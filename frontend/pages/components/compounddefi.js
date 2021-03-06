import styles from "../../styles/Candid.module.css";
import { Card, Image, Space, Text, Table } from '@mantine/core'


export function CompoundDefi(compound) {

    return (
        <>
            <Card shadow='sm'>
                <div
                    style={{ display: "flex", alignItems: "center" }}
                    className={styles.main}
                >
                    <Space w="xs" />
                    <h2>Compound Defi</h2>
                </div>
                <Space h="md" />
                <Text>{JSON.stringify(compound)}</Text>
            </Card>
            <Space h="lg" />
        </>
    )
}
