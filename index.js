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
  initialize() {
    const config = this.app.config.email
    let result = Promise.resolve()
    if (config.customTransporter) {
      result = config.customTransporter(this.app).then(transporter => {
        this.transporter = transporter
      })
    }
    else {
      this.transporter = nodemailer.createTransport(config.smtp)
    }
    return result
  }

  constructor(app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

