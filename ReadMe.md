# Authors

- [DefinitelyNotHilbert](https://github.com/DefinitelyNotHilbert): Backend development
- [Timdoubleg](https://github.com/timdoubleg): Frontend development
- [Fistline](https://github.com/fistline): Frontend development
- [Grandmasterleu](https://github.com/grandmasterLeu): User interface


# Integrations

## Top


| UI | Api Call | File Locations |
| --- | --- | --- |
| Following & Followers | none | none |
| Candid Score | none | none |
| Wallet Age Score | none | none |


## Profile Summary Card Left

| UI | Api Call | File Locations |
| --- | --- | --- |
| Social Score | none yet | none yet |
| DAO Voter | none yet | none yet |
| Multi-sig signer | none (will be hardcoded) | none |
| Public good Doner | none (will be hardcoded) | none |
| Multi-sig signer | /api/walletage?={address} | see api & services folder in frontend|
| Latest Activity | none (will be empty) | none |


## Profile Summary Card Middle

| UI | Api Call | File Locations |
| --- | --- | --- |
| AssetsBorrowed | /defi/compound/{address} | see backend folder |
| AssetsSupplied | /defi/compound/{address} | see backend folder |
| DeFi Activity | none yet | none yet |

## Profile Summary Card Right

| UI | Api Call | File Locations |
| --- | --- | --- |
| Holdings | /api/holdings?={address} | see api & services folder in frontend |
| NFTs | /api/nftlist?={address} | see api & services folder in frontend |
| NetWorth | /api/holdings?={address} | see api & services folder in frontend |


