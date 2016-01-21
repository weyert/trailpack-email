# trailpack-email
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
