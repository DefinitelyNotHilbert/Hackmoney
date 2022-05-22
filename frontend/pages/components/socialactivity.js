import styles from "../../styles/Candid.module.css";
import { Card, Image, Space, Text } from '@mantine/core'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

export function SocialActivity(socialscore) {

    const input = socialscore?.socialscore.result
    try {
        var rows = input.map((score) => (
            <tr key={score.criteria}>
                <td>{score.criteria}</td>
                <td>{score.value}</td>
            </tr>
        ))
    } catch (e) {
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
                    <h2>Social Scores</h2>
                </div>
                <Space h="md" />
                {/* <Text>{JSON.stringify(socialscore.socialscore.result)}</Text> */}
                <Table highlightOnHover>
                    <thead>
                        <tr>
                            <th>Criteria</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
                {/* {socialscore.social_score !== null && (                    
                    <TableContainer>
                        <p>{JSON.stringify(socialscore)}</p>
                        <Table variant ='striped' colorScheme='gray' size='lg'>
                            <Thead>
                                <Tr>
                                    <Th>Criteria</Th>
                                    <Th>Score</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Total Social Score</Td>
                                    <Td>{socialscore.socialscore.social_score}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Age</Td>
                                    <Td>{socialscore.socialscore.age_score}</Td>
                                </Tr>
                                <Tr>
                                    <Td>DAO Voter</Td>
                                    <Td>{socialscore.socialscore.part_score}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Multi-Sig Signer</Td>
                                    <Td>{socialscore.socialscore.multisig_score}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Public Goods Doner</Td>
                                    <Td>{socialscore.socialscore.pubgoods_score}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer> 
                )}*/}
            </Card>
            <Space h="lg" />
        </>
    )
}
