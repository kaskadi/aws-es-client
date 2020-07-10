const createClient = require('../')
const assert = require('assert')

if (!process.env['ES_ID'] && !process.env['ES_SECRET'] && !process.env['ES_ENDPOINT']) {
  console.log('You need to have your ES_ENDPOINT, ES_ID and ES_SECRET set as env variables')
}
describe('aws-es-client', () => {
  it('should retrieve info from the cluster', async () => {
    const client = createClient({
      url: process.env['ES_ENDPOINT'],
      id: process.env['ES_ID'],
      token: process.env['ES_SECRET']
    })
    const info = await client.info()
    assert.strictEqual(info.body.tagline, 'You Know, for Search')
  })
})
