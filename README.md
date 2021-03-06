![](https://img.shields.io/github/package-json/v/kaskadi/aws-es-client)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/aws-es-client?color=blue)

**GitHub Actions workflows status**

[![Build workflow status](https://img.shields.io/github/workflow/status/kaskadi/aws-es-client/build?label=build&logo=mocha)](https://github.com/kaskadi/aws-es-client/actions?query=workflow%3Abuild)
[![Publish workflow status](https://img.shields.io/github/workflow/status/kaskadi/aws-es-client/publish?label=publish&logo=npm)](https://github.com/kaskadi/aws-es-client/actions?query=workflow%3Apublish)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/aws-es-client?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/aws-es-client)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/aws-es-client?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/aws-es-client)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/aws-es-client?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/aws-es-client)

****

# Installation

```
npm i aws-es-client
```

# API documentation

## Modules
Module | Description
------ | -----------
[aws-es-client] | Creates a new client connected to your AWS ElasticSearch cluster.

## Typedefs

Name | Description
------ | -----------
[Options] | ElasticSearch client options


## aws-es-client

Creates a new client connected to your AWS ElasticSearch cluster. 

Once the client has been instanciated, you can use all the methods available in the regular ElasticSearch Node client. See [here] for details.

**Returns**: `ES` - New ElasticSearch client  

| Param | Type | Description |
| --- | --- | --- |
| opts | [`Options`] | Options to be passed to instanciate a new client |

**Example**  
```js
const ES = require('aws-es-client')({
 url: process.env.ES_CLUSTER_URL,
 id: process.env.ES_ID,
 token: process.env.ES_SECRET
})
```

## Options

ElasticSearch client options

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| url | `string` |  | ElasticSearch cluster URL |
| id | `string` |  | Programmatic user ID (needs access to ElasticSearch cluster) |
| token | `string` |  | Programmatic user token (needs access to ElasticSearch cluster) |
| \[region\] | `string` | `'eu-central-1'` | ElasticSearch cluster region |

<!-- LINKS -->

[aws-es-client]:#aws-es-client
[Options]:#options
[here]:https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html
[`Options`]:#options