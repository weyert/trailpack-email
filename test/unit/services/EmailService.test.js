'use strict'
const assert = require('assert')

describe('EmailService', () => {
  it('should exist', (done) => {
    assert(global.app.api.services.EmailService)
    assert(global.app.services.EmailService)
    assert(global.app.services.EmailService.send)
    /*
     global.app.services.EmailService.send({text: 'toto'}, (err, info) => {
     assert(info)
     done()
     })*/
    done()
  })
})

