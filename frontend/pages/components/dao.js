import styles from "../../styles/Candid.module.css";
import { Card, Image, Space, Text, Table } from '@mantine/core'

export function DAO(daos) {

    // const rows = daos.map((dao) => (
    //     <tr key={dao.daos}>
    //         <td>{dao.daos}</td>
    //         <td>{dao.total_proposals}</td>
    //         <td>{dao.daos}</td>
            // </tr>
    // ))

    return (
        <>
            <Card shadow='sm'>
                <div
                    style={{ display: "flex", alignItems: "center" }}
                    className={styles.main}
                >
                    <Space w="xs" />
                    <h2>DAO Activity</h2>
                </div>
                <Space h="md" />
                <Text>{JSON.stringify(daos)}</Text>
            </Card>
            <Space h="lg" />
        </>
    )
}
