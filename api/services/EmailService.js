'use strict'

const Service = require('trails-service')
const _ = require('lodash')

/**
 * @module EmailService
 * @description Trails Service to send emails
 */
module.exports = class EmailService extends Service {
  send(data, next) {
    const config = this.app.config.email
    const transporter = config.customTransporter

    data = _.defaultsDeep(data, config.defaultData)

    transporter.sendMail(data, next)
  }
}
