var Joi=require('joi')


module.exports=class JoiValidator {
    static signUp() {
        const signUpJoi = {
            email: Joi.string().email().required(),
                    name: Joi.string().required(),
                    phone: Joi.string().regex(/^[0-9]+$/).min(5).required(),
                    password: Joi.string().required()
        };
        return signUpJoi;
    }}




 