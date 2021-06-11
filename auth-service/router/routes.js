const { projects } = require('../data')
const { authUser } = require('../basicAuth')
const { canViewProject, canDeleteProject, scopedProjects } = require('../permissions/project')
const AuthenticationController = require('../controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')

// const isAuthenticated = require('../policies/isAuthenticated')

function setProject(req, res, next) {
const projectId = parseInt(req.params.projectId)
req.project = projects.find(project => project.id === projectId)

if (req.project == null) {
    res.status(404)
    return res.send('Project not found')
}

    next()
}

function authGetProject(req, res, next) {
if (!canViewProject(req.user, req.project)) {
    res.status(401)
    return res.send('Not Allowed')
}

    next()
}

function authDeleteProject(req, res, next) {
if (!canDeleteProject(req.user, req.project)) {
    res.status(401)
    return res.send('Not Allowed')
}

    next()
}

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    )

    app.post('/login',
        AuthenticationController.login
    )
}