# Backend

## About

## Quickstart

### Using Conda
If you are using Conda (anaconda) you can create a virtual envirornment from the `env.yml` file. (this will take a while)
```bash
conda env create -f env.yml
```

Then activate the new environment 
```bash
conda activate candid
```

Verify that the new environment was installed correctly
```bash
conda env list
# or
conda info --envs
```

### Without Conda


### Running Backend
Install uvicorn
```bash
pip install uvicorn
```

Then run the backend main file with
```bash
uvicorn main:app
```

## Example Queries

Example address to query for Aave: 
0xe37e48fac6868127B8d6424c2fF459ab68e5A4E1

### Lending Activity
1. **Get Lending & Borrowing of address for Compound**
[http://localhost:8000/defi/compound/0x2326D4fb2737666DDA96bd6314e3D4418246cFE8](http://localhost:8000/defi/compound/0x2326D4fb2737666DDA96bd6314e3D4418246cFE8)

2. Same for Aave

### DAO Activity
1. **All DAO Dactivity**
using /daos/<address> to obtain 
- daos participated in
- votes for each dao
- total number of proposals per dao 
[http://localhost:8000/daos/0x831B90C81757FFbE401A0081435E3CD4feC198c4](http://localhost:8000/daos/0x831B90C81757FFbE401A0081435E3CD4feC198c4)

2. **Compound DAO Activity**
using /dao/compound/<address> to obtain:
- COMP balance
- votes
- vote weight (i.e. % of total votes)
- #proposals created
- #proposals votes
- #delegates
[http://localhost:8000/dao/compound/0x683a4f9915d6216f73d6df50151725036bd26c02](http://localhost:8000/dao/compound/0x683a4f9915d6216f73d6df50151725036bd26c02) 



## Licence 
  
## Credits
