# Backend

## About

## Quickstart

### Using Conda
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


### Running Backend
Install uvicorn
```bash
pip install uvicorn
```

Then run the backend main file with
```bash
uvicorn main:app
```

## License

## Credits