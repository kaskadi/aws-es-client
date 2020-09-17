![](https://img.shields.io/github/package-json/v/kaskadi/aws-es-client)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/aws-es-client?color=blue)

**GitHub Actions workflows status**

[![](https://img.shields.io/github/workflow/status/kaskadi/aws-es-client/publish?label=publish&logo=npm)](https://github.com/kaskadi/aws-es-client/actions?query=workflow%3Apublish)
[![](https://img.shields.io/github/workflow/status/kaskadi/aws-es-client/build?label=build&logo=mocha)](https://github.com/kaskadi/aws-es-client/actions?query=workflow%3Abuild)
[![](https://img.shields.io/github/workflow/status/kaskadi/aws-es-client/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/aws-es-client/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/aws-es-client?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/aws-es-client)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/aws-es-client?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/aws-es-client)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/aws-es-client?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/aws-es-client)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/aws-es-client?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/aws-es-client/?mode=list&logo=LGTM)

:point_right: **Badges here** :point_left:

****

# Testing

`mocha`, `chai`, `nyc`, `dotenv` & `standard` are available as dev dependencies.

A `build` workflow (see [here](./.github/workflows/build.yml)) is running on `pull request` and will execute your test suite before allowing you to merge your PR. It also has a `coverage` job already prepared that you can comment out as soon as your testing is in place and your `REPORTER_ID` is in the repository secrets. This is the ID on _Code Climate_ used for uploading code coverage reports.

****

# Documentation

This repository comes with a `generate-docs` workflow that generates documentation automatically for you using [`JSDOC`](https://jsdoc.app/). It'll check all your `.js` file for `JSDOC`-like comments in order to build its documentation. See [here](https://github.com/kaskadi/action-generate-docs) for more information.

If you would like to see the workflow configuration, head [here](./.github/workflows/generate-docs.yml).

You can configure the template used to generate the action documentation [here](./docs/template.md).

****

# Publishing

Publishing to NPM is done automatically via a `publish` workflow (see [here](./.github/workflows/publish.yml)). This workflow will run on `push` to `master`. It checks the current published version versus the one in `package.json` and if `package.json` version is different then it publishes to NPM.

**Warning: in order for this workflow to work properly, you'll have to manually publish your package on initial publish.**

****

{{>main}}

:point_down: **Your documentation here** :point_down: