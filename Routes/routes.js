var signup = require('../Controllers/signup_controller')
var login = require('../Controllers/login_controller')
var booking = require('../Controllers/booking_controoler')
var details = require('../Controllers/bookingDetails')
var logout = require('../Controllers/logout_controller')
var update =require('../Controllers/update_phone_cntrlr')
var joiValidator = require('../lib/joiValidator')

var Joi = require('joi')


module.exports = [
    {
        method: 'POST',
        path: '/signup',
        handler: function (req, res) {
            var payloadData = req.payload
          const data=  signup(payloadData)
          res(data)
        },
        config: {
            tags: ['api'],
            validate: {
                payload: {
                    email: Joi.string().email().required(),
                    name: Joi.string().required(),
                    phone: Joi.string().regex(/^[0-9]+$/).min(5).required(),
                    password: Joi.string().required(),

                }
            },
            plugins: {
                'hapi-swagger': {
                    payloadType : 'body',
                    responseMessages: 'Sign Up'
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: function (req, res) {
            var payloadData = req.payload
           var z= login(payloadData)
               res(z)
        },
        config: {
            tags: ['api'],
            validate: {
                payload: {
                    email: Joi.string().email().required(),
                    password: Joi.string().min(6).max(200).required()
                }
            },
            plugins: {
                'hapi-swagger': {
                    payloadType : 'body',
                    responseMessages: 'Login'
                }
            }
        }

    },
    {
        method: 'POST',
        path: '/booking',
        handler: function (req, res) {
            var token = req.headers.token
         user={
             email:req.email,
             from:req.from,
             to:req.to
         }
            
           var data= booking(user,token)
           res(data)
        },
        config: {
            tags: ['api'],

            validate: {
                headers: Joi.object().required().keys({
                    authorization: Joi.string().required()
                }),
                payload: {
                    email: Joi.string().required(),
                    from: Joi.string().required(),
                    to: Joi.string().required(),
                }},
                plugins: {
                    'hapi-swagger': {
                        payloadType : 'body',
                        responseMessages: 'Sign Up'
                    }
                }
            
        }

        ,
    },
    {
        method: 'GET',
        path: '/details',
        handler: function (req, res) {
            var payloadData = req.headers.token
          var data=  details(payloadData)
                        res(data)
        },
        
        config: {
            tags: ['api'],
            auth:'',
                  validate:{
                   headers: Joi.object().required().keys({
                        authorization: Joi.string().required()
                    })
                  },
                plugins: {
                    'hapi-swagger': {
                        payloadType : 'body',
                        responseMessages: 'Sign Up'
                    }
                }
            
        }

    },
    {
        method: 'POST',
        path: '/logout',
        handler: function (req, res) {
            var payloadData = req.payload
            logout(payloadData, function (err, data) {
                if (err) {
                    res(err);
                } else {
                    res(data)
                }
            })
        },
        config: {
            validate: {
                payload: {
                    token: Joi.string().required(),

                }
            },
            // plugins: {
            //     'hapi-swagger': {
            //         payloadType : 'body',
            //         responseMessages: 'Sign Up'
            //     }
            // }
        }

    },
    {
        method: 'PUT',
        path: '/update',
        handler: function (req, res) {
            var payloadData = req.payload
          const data =  update(payloadData)
          res(data)
        },
        config: {
            validate: {
                payload: {
                  token: Joi.string().required(),
                   password: Joi.string().required(),
                    newPassword: Joi.string().required()

                }
            },
            // plugins: {
            //     'hapi-swagger': {
            //         payloadType : 'body',
            //         responseMessages: 'Sign Up'
            //     }
            // }
        }

    },
    {
        method: 'POST',
        path: '/fetch',
        handler: function (req, res) {
            var payloadData = req.payload
          const data=  fetch(payloadData)
        },
        config: {
            validate: {
                payload: {
                    token: Joi.string().required()

                }}
            // },
            // plugins: {
            //     'hapi-swagger': {
            //         payloadType : 'body',
            //         responseMessages: 'Sign Up'
            //     }
            // }
        }

    }
]



