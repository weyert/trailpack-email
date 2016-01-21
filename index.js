'use strict'

const Trailpack = require('trailpack')
const nodemailer = require('nodemailer')

module.exports = class Email extends Trailpack {

  /**
   * Check configuration file
   */
  validate() {
    if (!this.app.config.email) {
      return Promise.reject(new Error('There no email.js under ./config, check it\'s load in ./config/index.js or create it !'))
    }

    return Promise.resolve()
  }

  /**
   * Configure nodemailer transporter
   */
  configure() {
    const config = this.app.config.email
    if (!config.customTransporter) {
      config.customTransporter = nodemailer.createTransport(config.smtp)
    }
    return Promise.resolve()
  }

  constructor(app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

