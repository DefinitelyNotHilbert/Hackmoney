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

    // const rows = table.map((socialscore.socialscore) => (
    //     <tr key={holding.id}>
    //         <Td> <Image width={20} height={20} fit="containt" src={holding.logo_url} alt="Without placeholder" /> </Td>
    //         <Td>{holding.id}</Td>
    //         <Td>{holding.name}</Td>
    //         <Td>{holding.usd_value}</Td>
    //     </Tr>
    // ));

    return (
        <>
            <Card shadow='sm'>
                <div
                    style={{ display: "flex", alignItems: "center" }}
                    className={styles.main}
                >
                    <Space w="xs" />
                    <h2>Social Overview</h2>
                </div>
                <Space h="md" />
                {/* <Text>{JSON.stringify(socialscore.socialscore)}</Text> */}
                <TableContainer>
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
            </Card>
            <Space h="lg" />
        </>
    )
}
