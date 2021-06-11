const Joi = require('joi')

module.exports = {
    register (req, res, next){
        const schema = Joi.object({
            class_id: Joi.number(),
            name: Joi.string(),
            email: Joi.string().email(),
            birth_day: Joi.date(),
            sex: Joi.string(),
            address: Joi.string(),
            phone: Joi.string(),
            learning_time: Joi.number(),
            status: Joi.boolean()
        })

        const { error } = schema.validate(req.body)

        if (error) {
            switch (error.details[0].context.key){
                case 'class_id':
                    res.status(400).send({
                        error: "You must provide a valid number" 
                    })
                    break
                case 'email':
                    res.status(400).send({
                        error: "You must provide a valid email address" 
                    })
                    break
                case 'birth_day':
                    res.status(400).send({
                        error: `It must only date`
                    })
                    break
                case 'sex':
                    res.status(400).send({
                        error: `It must only string`
                    })
                    break
                case 'address':
                    res.status(400).send({
                        error: `It must only string`
                    })
                    break
                case 'phone':
                    res.status(400).send({
                        error: `It must only phone`
                    })
                    break
                case 'learning_time':
                    res.status(400).send({
                        error: `It must only learning_time`
                    })
                    break
                case 'status':
                    res.status(400).send({
                        error: `It must only boolean`
                    })
                    break
                default: 
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        } else {
            next()
        }

    }
}