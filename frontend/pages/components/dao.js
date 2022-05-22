import styles from "../../styles/Candid.module.css";
import { Card, Image, Space, Text, Table } from '@mantine/core'

export function DAO(daos) {

    const input = daos.daos
    const names = input.daos
    const proposals = input.total_proposals
    const votes = input.votes
    const data = []

    // console.log(daos)
    // console.log(input)

    // for (let i = 0; i < input.daos.length; i++) {
    //     data.push({ 'Name': names[i], 'Total Proposals': proposals[names[i]], 'Votes': votes[names[i]], 'Participation Rate': (votes[names[i]] / proposals[names[i]]) })
    // }
    // console.log(data)

    // const rows = daos.map((dao) => (
    //     <tr key={dao.daos}>
    //         <td>{dao.daos}</td>
    //         <td>{dao.total_proposals}</td>
    //         <td>{dao.daos}</td>
    //         </tr>
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
                {/* {(daos)} */}
            </Card>
            <Space h="lg" />
        </>
    )
}
