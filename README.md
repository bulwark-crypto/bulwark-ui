[![Coverage Status](https://coveralls.io/repos/github/dustinengle/bulwark-ui/badge.svg?branch=master)](https://coveralls.io/github/dustinengle/bulwark-ui?branch=master)
[![Build Status](https://travis-ci.org/dustinengle/bulwark-ui.svg?branch=master)](https://travis-ci.org/dustinengle/bulwark-ui)

# Bulwark UI
Bulwark Cryptocurrency front-end style and JavaScript framework.

Designers please see the __Design__ section below after making sure the below requirements are met on your system.


## Requirements
This system requires that `git`, `nodejs`, and `yarn` are installed on your system.


## SASS
To build SASS into CSS run `yarn run build:sass` and this will generate the following files:
```
dist/bulwark-dark.css
dist/bulwark-dark.min.css
dist/bulwark-light.css
dist/bulwark-light.min.css
```


## JS
The `react/` components and `lib/` files are meant to be included in your project.

__Example flow:__
1. `yarn add bulwark-ui`
2. `import Container from 'bulwark-ui/web/Container';`
3. Now use the component `<Container>Some stuff here</Container>`

For an example webpack configuration please see the demo `webpack.config.js` file from this project or `node_modules/bulwark-ui/webpack.config.js` from your own project.


## Demo TODO
A component demonstration is provided.

### Run
To run the demo todo application contained in `todo/` run `yarn run start:todo` which will run `webpack-dev-server` in `hot` mode.  This will refresh on updates to the system automatically.

With the demo application run open your browser to [http://localhost:8080](http://localhost:8080).

### Build
To build the demo todo app for sharing please run `yarn run build:todo` after you can archive the `dist/` folder and distribute.

Light is the default style, to run with the dark theme run `STYLE=dark yarn run build:todo`.


## Design
The demo todo application allows for rapid design changes without the need to understand the code and architecture.  To get started please follow these steps:
1. `git clone https://github.com/dustinengle/bulwark-ui.git bulwark-ui`
2. `cd bulwark-ui`
3. `yarn install`
4. `yarn run start:todo` or `STYLE=dark yarn run start:todo` for dark
5. Open the page [http://localhost:8080](http://localhost:8080).
6. Start making changes to `sass/*` files.

Changes will show automatically in the opened browser page.
