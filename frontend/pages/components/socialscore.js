import styles from "../../styles/Candid.module.css";
import { Card, Image, Space, Text, Table } from '@mantine/core'


export function SocialScore(socialscore) {

    return (
        <>
            <Card shadow='sm'>
                <div
                    style={{ display: "flex", alignItems: "center" }}
                    className={styles.main}
                >
                    <Space w="xs" />
                    <h2>Social Score</h2>
                </div>
                <Space h="md" />
                <p>{JSON.stringify(socialscore)}</p>
            </Card>
            <Space h="lg" />
        </>
    )
}
