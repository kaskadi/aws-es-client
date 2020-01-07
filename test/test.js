const createClient = require('../')
const assert = require('assert')

if (!process.env['AWS_ES_URL']) {
  console.log('you need to have your AWS_ES_URL, AWS_ES_ID and AWS_ES_TOKEN set as env variables')
}
describe('aws-es-client', () => {
  it('should work ;-)', async () => {
    const client = createClient({
      url: process.env['AWS_ES_URL'],
      id: process.env['AWS_ES_ID'],
      token: process.env['AWS_ES_TOKEN']
    })
    const info = await client.info()
    assert.strictEqual(info.tagline, 'You Know, for Search')
  })
})

