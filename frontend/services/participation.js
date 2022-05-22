export async function getPartRate(address) {
    // fetch data
    try {
        const DaoActivity = await (await fetch(`http://localhost:3000/daos/${address}`)).json();
  
    // check if empty
    if (DaoActivity.daos.length !== 0) {
        const total_proposals = DaoActivity.total_proposals
        const daos = DaoActivity.daos
        const dao_token_map = DaoActivity.dao_token_map
        const votes = DaoActivity.votes
        const participation_rates = []
        // const tokens = []

        // fetch single datapoints
        for (var key in total_proposals) {
            var part_rate = votes[key] / total_proposals[key]
            participation_rates.push(part_rate)
            // tokens.push(dao_token_map[key][1].symbol)
        }
        // calc average
        var sum = 0
        for (var number of participation_rates) {
            sum += number
        }

        const AvgParticipationRate = sum / participation_rates.length
        return AvgParticipationRate
        
    } else {
        console.log('response of DaoActivity is empty')
    }
    }
    catch (e) {
        console.log(e)
    }
}


