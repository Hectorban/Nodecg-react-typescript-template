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
npm run dev:start
```

If you want to force rebuild when start (this will delete build directories):

```bash
npm run dev
```

## Use Bun.sh instead of node

If you replace the `package.json` for using [`bun`](https://bun.sh) in the postinstall it will replace node for bun in the nodecg which improves speed. You can force this behaviour by using:

```bash
npm run postinstall -- --bun
```

Restore to use node back is possible by executing:

```bash
npm run postinstall -- --node
```

**IMPORTANT** NodeCG runs smootly and faster with bun, but `npm install` it is necessary to execute it in nodecg (bundles can use `bun install`) because there is still and old dependency with json-schema directly installing from GitHub which does not have support yet in bun.sh (see [#82 of bun.sh issues](https://github.com/oven-sh/bun/issues/82))

## Add a dashboard
1. Add the configuration in [`package.json`](https://www.nodecg.dev/docs/manifest#nodecggraphics). You can see how is added the current as example.
2. Copy any of the current html and rename it to the given name in the `package.json` to your new panel.
3. Copy any of the `panel` folders and rename it.
4. Replace the path to the React loader (`index.tsx`) in your new html with the name of your folder (if you don't do this, you will load other panel 😅).
5. Add your react components in the `app.tsx` and enjoy programming.

## Add new graphics

1. Add the configuration in [`package.json`](https://www.nodecg.dev/docs/manifest#nodecggraphics). You can see how is added the current one as example.
2. Copy the current `layout-1.html` and rename it inside the same folder with the given name for the graphics html in the `package.json`.
3. Copy the folder, remember to change in the new html the path to the React loader (should rename `layout-1` string with the name of your new folder).
4. Add your react components in the `app.tsx` and enjoy programming.

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
