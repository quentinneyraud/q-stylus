# Library starter

> npm library starter with documentation, example, linting and build ready

## Usage

```
# clone repo
git clone git@github.com:quentinneyraud/library-starter.git __your_library_name__
cd __your_library_name__

# install dependencies
yarn
```

#### Update with your library name

- Open `tasks/init.js`
- Update these constants (`LIBRARY_TITLE`, `LIBRARY_DESCRIPTION`, `LIBRARY_NAME`, `LIBRARY_DOC_URL`, `LIBRARY_REPO_URL`) with yours
- Run `npm init`

It will update these files : `package.json`, `rollup.config.js`, `docs/index.html`, `docs/README.md`, `example/index.html`, `example/index.js`

## Write your library

```bash
npm run dev
```

Write your library in `src` folder and test it with livereload on `localhost:1234`

## Write documentation

```bash
npm run docs
```

Write documentation in `docs` folder and see it with livereload on `localhost:3000`

## Build

```bash
npm run build
```

## Publish on npm

1. [Publish your own NPM package](https://hackernoon.com/publish-your-own-npm-package-946b19df577e)

```bash
npm version [patch | minor | major]
npm publish
```

## Publish documentation

1. Set up [GitHub Pages](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages) to use `/docs` folder

2. `git push`

Or use other [Deploy](https://docsify.js.org/#/deploy)

## Other links

- [Docsify](https://docsify.js.org/#/)  
- [Rollup](https://rollupjs.org/guide/en/)  
- [Parcel](https://parceljs.org/)
