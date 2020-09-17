const { createAWSConnection, awsCredsifyAll } = require('@acuris/aws-es-connection')
const { Client } = require('@elastic/elasticsearch')
const AWS = require('aws-sdk')

/**
 * @module aws-es-client
 * @typicalname ES
 */

/**
 * Options for the new ElasticSearch client instanciation
 * @typedef {Object} Options
 * @property {string} [region='eu-central-1'] - The region in which your ElasticSearch cluster lives
 * @property {string} url - The URL of your ElasticSearch cluster on AWS
 * @property {string} id - The ID of a programmatic user having access to ElasticSearch service on AWS
 * @property {string} token - The token of a programmatic user having access to ElasticSearch service on AWS
 */

/**
 * Creates a new client connected to your AWS ElasticSearch cluster. 
 * 
 * Once the client has been instanciated, you can use all the methods available in the regular ElasticSearch Node client (see [here](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html) for details)
 * @function
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
