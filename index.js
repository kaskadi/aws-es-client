module.exports = function createClient (opt) {
  var options = {...{region: 'eu-central-1'}, ...opt}
  var elastic = require('elasticsearch')
  const AWS = require('aws-sdk')
  AWS.config.update({
    credentials: new AWS.Credentials(options.id, options.token),
    region: options.region
  })
  var client = new elastic.Client({
    hosts: [options.url],
    connectionClass: require('http-aws-es')
  })
  return client
}
