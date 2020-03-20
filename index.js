const { createAWSConnection, awsCredsifyAll } = require('@acuris/aws-es-connection')
const { Client } = require('@elastic/elasticsearch')
const AWS = require('aws-sdk')

module.exports = function createClient (opt) {
  var options = {...{region: 'eu-central-1'}, ...opt}
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
