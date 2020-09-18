const { createAWSConnection, awsCredsifyAll } = require('@acuris/aws-es-connection')
const { Client } = require('@elastic/elasticsearch')
const AWS = require('aws-sdk')

/**
 * A module to generate a new client for your AWS ElasticSearch cluster.
 * 
 * @module aws-es-client
 * @typicalname ES
 */

/**
 * ElasticSearch client options
 * @typedef {Object} Options
 * @property {string} [region=eu-central-1] - ElasticSearch cluster region
 * @property {string} url - ElasticSearch cluster URL
 * @property {string} id - Programmatic user ID (needs access to ElasticSearch cluster)
 * @property {string} token - Programmatic user token (needs access to ElasticSearch cluster)
 */

/**
 * Creates a new client connected to your AWS ElasticSearch cluster. 
 * 
 * Once the client has been instanciated, you can use all the methods available in the regular ElasticSearch Node client (see [here](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html) for details)
 * 
 * @param {Options} opts - [Options]{@link module:aws-es-client~Options} to be passed to instanciate a new client
 * @return {ES} New ElasticSearch client
 *
 * @example
 *
 * const ES = require('aws-es-client')({
 *  url: process.env.ES_CLUSTER_URL,
 *  id: process.env.ES_ID,
 *  token: process.env.ES_SECRET
 * })
 */

module.exports = function createClient (opts) {
  const options = {...{region: 'eu-central-1'}, ...opts}
  AWS.config.update({
    credentials: new AWS.Credentials(options.id, options.token),
    region: options.region
  })
  return awsCredsifyAll(
    new Client({
      node: options.url,
      Connection: createAWSConnection(AWS.config.credentials)
    })
  )
}
