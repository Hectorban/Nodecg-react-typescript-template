# Nodecg-react-template

This is an updated revision of [Hectorban work](https://github.com/Hectorban/Nodecg-react-typescript-template).

Nodecg react template done with parcel and typescript

This is a [NodeCG](http://github.com/nodecg/nodecg) bundle, powered by Typescript, React and Parcel.

If you use this template probably you are interested in [`use-nodecg`](https://github.com/Hoishin/use-nodecg) package.

It works with NodeCG versions which satisfy this [semver](https://docs.npmjs.com/getting-started/semantic-versioning) range: `1.9.0`

## Getting started

This template includes `include-nodecg` package so it is not necessary to install `nodecg-cli` before.

1. Install dependencies and build the bundle with `npm`

```bash
npm i
```

2. To start developing run:

```bash
npm run dev
```

## Known issues

-   Extension fails when using `export default main;` instead of using `module.exports` so we are mixing `commonjs` modules with `esmodules` and that should not be done.

## TODO

-   [x] Sample how to handle [Dialogs](https://www.nodecg.dev/docs/making-dialogs) and use Messages from Dialog to Dashboard panel.
-   [ ] Sample how to use Replicants
-   [ ] Sample how to use Messages and return errors sent from backend (extension).
-   [ ] React Hooks to use Replicants and messages are available here: https://github.com/Hoishin/use-nodecg
-   [ ] Testing. Check this for graphics: https://github.com/nodecg/nodecg-screenshot-tester
-   [ ] Generator to create Dashboard.
-   [ ] Generator to create a graphics layout.
-   [ ] Distribute only generated html instead of all package.
