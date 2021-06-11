const {Absences} = require('../models')
const {Students} = require('../models')
const jwt = require('jsonwebtoken')
const passportConfig = require('../config/passport-config')

// helper function
function jwtSignAbsence (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, passportConfig.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try {
            const student = await Students.create(req.body)

            res.send(student.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'This account is already in use.'
            })
        }
    },

    async login (req, res) {
        try {
            const { entrance } = req.body
            const absence = await Absences.findOne({
                where: {
                    entrance: entrance
                }
            })

            if(!absence) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const absenceJson = absence.toJSON()
            res.send({
                absence: absenceJson,
                token: jwtSignAbsence(absenceJson)
            })
        } catch (error) {
            res.status(500).send({
                error: 'An error has occured trying to login.'
            })
        }
    }
}