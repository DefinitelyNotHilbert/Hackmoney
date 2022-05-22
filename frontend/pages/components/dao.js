import styles from "../../styles/Candid.module.css";
import { Card, Image, Space, Text, Table } from '@mantine/core'

export function DAO(daos) {

    const input = daos.daos
    const names = input.daos
    const proposals = input.total_proposals
    const votes = input.votes
    const data = []

    // console.log('daos', daos)
    // console.log('input', input)
    // console.log('input.daos', input.daos)
    // console.log('input.daos', input.daos?.length)

    try {
        for (let i = 0; i < input.daos?.length; i++) {
            data.push({ 'Name': names[i], 'Total_Proposals': proposals[names[i]], 'Votes': votes[names[i]], 'Participation_Rate': (votes[names[i]] / proposals[names[i]]) })
        }

        console.log('data', data)
        var rows = data.map((dao) => (
            <tr key={dao.Name}>
                <td>{dao.Name}</td>
                <td>{dao.Total_Proposals}</td>
                <td>{dao.Votes}</td>
                <td>{dao.Participation_Rate}</td>
                </tr>
        ))
        }
    catch (e) {
        var rows = []
    }

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
                <Table highlightOnHover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Total Proposals</th>
                            <th>Votes</th>
                            <th>Participation Rate</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
                <Space h="md" />
                {/* <Text>{JSON.stringify(daos.daos)}</Text> */}
            </Card>
            <Space h="lg" />
        </>
    )
}
