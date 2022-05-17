
export async function listBreweries(city) {

    const response = await fetch(
        `https://api.openbrewerydb.org/breweries
        ?by_city=${city}
        &per_page=5`.replace(/\s/g, ''));
    
    // console.log(response)

    const result = (await response.json())

    // if (result.message != 'OK') {
    //     console.log('data of beer.js not ok', result.error)
    //     return []
    // }

    console.log('breweries', result)
    
    return result
}

