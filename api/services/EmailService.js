'use strict'

const Service = require('trails/lib/Service')
const _ = require('lodash')

/**
 * @module EmailService
 * @description Trails Service to send emails
 */
module.exports = class EmailService extends Service {
  send(data, next) {
    const config = this.app.config.email
    const transporter = this.app.packs.email.transporter

    data = _.defaultsDeep(data, config.defaultData)

    if (next == null) {
      return new Promise((resolve, reject) => {
        transporter.sendMail(data, (err, infos) => {
          if (err) {
            return reject(err)
          }
          return resolve(infos)
        })
      })
    }
    else {
      transporter.sendMail(data, next)
    }
  }
}
