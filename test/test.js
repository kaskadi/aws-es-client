const createClient = require('../')
const assert = require('assert')

if (!process.env['AWS_ES_ID'] && !process.env['AWS_ES_TOKEN'] && !process.env['AWS_ES_URL']) {
  console.log('You need to have your AWS_ES_URL, AWS_ES_ID and AWS_ES_TOKEN set as env variables')
}
describe('aws-es-client', () => {
  it('should retrieve info from the cluster', async () => {
    const client = createClient({
      url: process.env['AWS_ES_URL'],
      id: process.env['AWS_ES_ID'],
      token: process.env['AWS_ES_TOKEN']
    })
    const info = await client.info()
    assert.strictEqual(info.body.tagline, 'You Know, for Search')
  })
})
