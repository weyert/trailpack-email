# trailpack-email
[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-download]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

:package: Add a Trails service to sending emails

## Intallation
With yo : 

```
npm install -g yo generator-trails
yo trails:trailpack trailpack-email
```

With npm (you will have to create config file manually) :
 
`npm install --save trailpack-email`

## Configuration
```js
// config/email.js
module.exports = {
  //Custom transporter object to send email, by default created from smtp values but can be override here
  customTransporter: null,
  
    /*
     * SMTP Configuration
     * @see {@link http://nodemailer.com/2-0-0-beta/setup-smtp/}
     */
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
      from: 'noreply@gmail.com'
    }
}
```

## Usage
Now you can send emails like this : 

```
this.app.services.EmailService.send({
      to: 'user@gmail.com',
      subject: 'Test',
      text: 'test',
      html: '<p>test</p>'
    }, (err, info) => {

    })
```

## License
[MIT](https://github.com/jaumard/trailpack-email/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trailpack-email.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-email
[npm-download]: https://img.shields.io/npm/dt/trailpack-email.svg
[ci-image]: https://travis-ci.org/jaumard/trailpack-email.svg?branch=master
[ci-url]: https://travis-ci.org/jaumard/trailpack-email
[daviddm-image]: http://img.shields.io/david/jaumard/trailpack-email.svg?style=flat-square
[daviddm-url]: https://david-dm.org/jaumard/trailpack-email
[codeclimate-image]: https://img.shields.io/codeclimate/github/jaumard/trailpack-email.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/jaumard/trailpack-email
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails
