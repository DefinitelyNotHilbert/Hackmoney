import { Button, Space, Grid } from '@mantine/core'
import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
} from 'wagmi'


export function Profile() {
    const { data: account } = useAccount()
    const { data: ensAvatar } = useEnsAvatar({ addressOrName: account?.address })
    const { data: ensName } = useEnsName({ address: account?.address })
    const { connect, connectors, error, isConnecting, pendingConnector } =
        useConnect()
    const { disconnect } = useDisconnect()

    if (account) {
        return (
            <Grid gutter='xl'>
                <Grid.Col md={5} lg={3}>
                    <img src={ensAvatar} alt="ENS Avatar" />
                </Grid.Col>
                <Grid.Col md={5} lg={3}>
                    {ensName ? `${ensName} (${account.address})` : account.address}
                </Grid.Col>
                <Grid.Col md={5} lg={3}>
                    Connected to {account.connector.name}
                </Grid.Col>
                <Button onClick={disconnect}>Disconnect</Button>
            </Grid>

        )
    }

    return (
        <Grid gutter='xl'>
            {connectors.map((connector) => (
                <>
                    <Grid.Col md={5} lg={3}>
                        <Button
                            type="submit"
                            color="orange"
                            size="lg"
                            disabled={!connector.ready}
                            key={connector.id}
                            onClick={() => connect(connector)}
                        >
                            {connector.name}
                            {!connector.ready && ' (unsupported)'}
                            {isConnecting &&
                                connector.id === pendingConnector?.id &&
                                ' (connecting)'}
                        </Button>
                    </Grid.Col>
                </>
            ))}

            {error && <div>{error.message}</div>}
        </Grid>
    )
}