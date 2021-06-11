const passport = require('passport')
const {Absences} = require('../models')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('../config/passport-config')

passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.authentication.jwtSecret
    }, async function (jwtPayload, done) {
        try {
            const absent = await Absences.findOne({
                where:{
                    id: jwtPayload.id
                }
            })
            if (!absent) {
                return done(new Error(), false)
            }
            return done(null, absent)
        } catch (err) {
            return done(new Error(), false)
        }
    })
)

module.exports = null