const _ = require('lodash')
const smokesignals = require('smokesignals')

const App = {
  pkg: {
    name: 'machinepack-trailpack-test',
    version: '1.0.0'
  },
  api: {},
  config: {
    email: {
      smtp: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
          user: 'user@gmail.com',
          pass: 'pass'
        }
      },
      /*
       * Default data use with EmailService.send
       * from, to, css, bcc, subject, text, html, attachments
       */
      defaultData: {
        to: 'user@gmail.com',
        from: 'noreply@gmail.com',
        subject: 'test'
      }
    },
    main: {
      packs: [
        require('../') // trailpack-email
      ]
    }
  }
}

_.defaultsDeep(App, smokesignals.FailsafeConfig)
module.exports = App
