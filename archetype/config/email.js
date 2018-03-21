/**
 * Email Configuration
 * (app.config.email)
 *
 * Configure email, smtp, auth
 *
 * @see {@link https://github.com/jaumard/trailpack-email}
 */
module.exports = {
  //Custom transporter object to send email
  //customTransporter: (app) => Promise.resolve(),

  /*
   * SMTP Configuration
   * @see {@link https://github.com/jaumard/trailpack-email}
   */
  smtp: {
    host: 'smtp.domain.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'user@domain.com',
      pass: 'pass'
    }
  },
  /*
   * Default data use with EmailService.send
   * from, to, css, bcc, subject, text, html, attachments
   */
  defaultData: {
    from: 'noreply@domain.com'
  }
}
