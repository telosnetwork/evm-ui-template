# Telos EVM Quasar Vue Template (evm-ui-template)

Use this template as a starting point for your app and save the time of writing all the boilerplate code. It uses Quasar & Vue and has an implementation of etherJS. You can test it with the Login button and get inspiration using the examples in the side menu like our Wallet Page (query balances, send transfers) & NFT Gallery (query metadata).

## Requirements

This template requires NodeJS 14+ and NPM installed

## Add Vue and Quasar packages globally
```bash
npm install -g @vue/cli
npm install -g @quasar/cli
```

## Clone this repo to your local machine and enter its directory
- Click the "use this template" button in [this repository](https://github.com/telosnetwork/evm-ui-template) and copy the **URL** you are redirected to once the generation is finished.
![Use this template](https://i.imgur.com/6TB0NaE.jpg)
- Install the repository on your machine with ```bash git clone [PREVIOUSLY COPIED URL] ``` (GIT required) or download the code and install it manually
- Enter the directory of the project ```bash cd evm-ui-template```

## Install the dependencies
```bash
npm install
```

### Rename .env.sample to .env 
```bash
mv .env.sample .env
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
npm run lint
```


### Format the files
```bash
npm run format
```



### Build the app for production
```bash
quasar build
```

## Go further

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).

### Get to know EthersJS
See the [documentation](https://docs.ethers.io/v5/)
