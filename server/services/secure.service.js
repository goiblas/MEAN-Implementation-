const jwt = require('jsonwebtoken');
const config = require('../config.json');

module.exports = {
    secureRouter: secureRouter,
    validateToken: validateToken,
    generateToken: generateToken,
}
function generateToken(user) {
    return jwt.sign({user: user}, config.secret_token, { expiresIn: 60 })
}

function validateToken(token) {
    try {
        return jwt.verify(token, config.secret_token);
    }
    catch(err){
        return false
    }
}

function secureRouter(req, res, next) {
    const sessionId = req.get('sessionId');
    // pendiente validación del token
    const session = validateToken(sessionId);

    if( session) {
        next();
    } else {
        res.status(401).send('Credencial invalid');
    }
}
