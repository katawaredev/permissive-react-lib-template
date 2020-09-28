# React component library with permissive setup

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Bootstrap a developer-friendly React library configured with:

- [Permissive config](https://github.com/katawaredev/config) toolset
- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/), [stylelint](https://stylelint.io/) and [markdownlint](https://github.com/DavidAnson/markdownlint)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking, testing and formatting [commit hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) using [`husky`](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- [Conventional commits](https://www.conventionalcommits.org/) with [commitlint](https://commitlint.js.org/)
- Testing with [Jest](https://jestjs.io/) and [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro)
- Integration with [Visual Studio Code](https://code.visualstudio.com/)
- [Storybook](https://storybook.js.org/)
- [Github Actions](https://github.com/features/actions) for deploying to [npmjs](https://www.npmjs.com/) and checks

## Customize for your project

- Remove [Github Workflows](.github/workflow) if not using it
- [/package.json](package.json)
- Fix references in [CONTRIBUTING.md](CONTRIBUTING.md), [LICENSE](LICENSE) and [issue templates](.github)
- _(optional)_ [Create custom logger](src/utils/logger.ts)
