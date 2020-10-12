const jwt = require('jsonwebtoken');

const auth = (req, res, next ) => {
    try {
            const token = req.header('x-auth-token');
            if(!token) return res.status(401).json({msg: "No authentication token, authoriztion denied"});
            next();
    } catch(err){
        res.status(500).json({err: err.message});
    }

}

module.exports = auth;
