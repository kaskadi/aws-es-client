export function createClient(url,id,token, region='eu-central-1') => {
  var elastic = require('elasticsearch')
  const AWS = require('aws-sdk')
  AWS.config.update({
    credentials: new AWS.Credentials(id, token),
    region: region
  })
  var client = new elastic.Client({
    hosts: [url],
    connectionClass: require('http-aws-es')
  })
  return client
}
