require('dotenv').config()

const api = require('../src')
const assert = require('assert')

const { API_PROTOCOL, API_HOST, API_PORT } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

describe('api', () => {
    it('should list', done => {
        api.list()
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.length > 0, 'should return data array')

                done()
            })
            .catch(done)
    })

    it('should create', done => {
        api.create('n69', 's69', 'e69', 'u69', 'p69')
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.id, 'should return data id')

                done()
            })
            .catch(done)
    })

    it('should update', done => {
        api.update()
    })
})