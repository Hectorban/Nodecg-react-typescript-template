# Nodecg-react-template
Nodecg react template done with parcel and typescript

This is a [NodeCG](http://github.com/nodecg/nodecg) bundle, powered by Typescript, React, Parcel and a Flux-like pattern system for an easy state-to-[replicant](https://nodecg.com/NodeCG.html#Replicant) management.

It works with NodeCG versions which satisfy this [semver](https://docs.npmjs.com/getting-started/semantic-versioning) range: `^1.1.1`

## Getting started
If you have NodeCG already installed, go to step 2
1. Install NodeCG using the [CLI](https://github.com/nodecg/nodecg-cli)
```bash
npm install --global nodecg-cli
mkdir nodecg
cd nodecg
nodecg setup
```

2. Copy/clone the repo into your `bundles` folder that is located in the root folder of your NodeCG instance.
```bash
git clone https://github.com/Hectorban/Nodecg-react-typescript-template.git
cd Nodecg-react-typescript-template
```
3. Install dependencies and build the bundle with `npm`
```bash
npm i
npm run build
```

4. Start nodecg
```bash
cd..
cd..
npm start
```

5. To start developing open another terminal and run:
```bash
cd bundles
cd Nodecg-react-typescript-template
npm start
```