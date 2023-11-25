import jwt from 'jsonwebtoken';

class Auth{

    async AuthMiddlaware(req, res, next){

    const { authorization } = req.headers;

    if (!authorization) {
        return res.json({
            mensagem: "Não autorizado!",
        });
    }

    const token = authorization.split(" ")[1];

    const { id } = jwt.verify(token, "secret")

    if(!id){
        return res.status(401).json({
            mensagem: "sessão inválida!",
        }); 
    }

        next();
    }

}

export const auth = new Auth()