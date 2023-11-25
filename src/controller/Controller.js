import { prisma } from "../utils/prisma.js";
import jwt from 'jsonwebtoken'

export class Controller{
    constructor(){}

    async findUsers(req, res){
        const users = await prisma.user.findMany();

        return res.json({users});
    }

    async signUp(req,res){
        const { nome, email, senha, ddd, numero} = req.body;

        const findUser = await prisma.user.findFirst({
            where:{
                email
            }
        })

        if(findUser){
            return res.json({"menssagem":"E-mail já existe!"})
        }
        else{
            const user = await prisma.user.create({
                data:{
                    id: Math.floor(Math.random() * 190),
                    nome,
                    email,
                    senha,
                    telefones:[{
                        "ddd":ddd,
                        "numero":numero
                    }],
                }
            })
            return res.status(201).json({
                "data de criação": new Date().toLocaleString(),
                "ultimo login":  new Date().toLocaleString(),
                "token": jwt.sign(
                    {id: user.id},
                    "secret",
                    {expiresIn: "1h"}
                )
            })

        }
    }

    async signin(req, res){
        const {email, senha} = await req.body;
        
        const user = await prisma.user.findFirst({
            where:{
                email: email,
            }
        })

        if(!user){
            return res.json({
                "menssagem": "Usuario e/ou senha invalidos"
            })
        }
        const isValuePassword = await prisma.user.findFirst({
            where:{
                senha: senha,
            }
        })

        if(!isValuePassword){
            return res.status(401).json({
                "menssagem": "Usuario e/ou senha invalidos"
            })
        }

        // inverte data para colocar na coluna date do banco de dados
        const date = new Date().toISOString();

        const updateLastLogin = await prisma.user.update({
            where:{
                email: user.email,
                id: user.id

            },
            data:{
                ultimo_login: date
            }
        })

        if(isValuePassword, user){
            updateLastLogin
        }
        return res.json({
            "id": user.id,
            "data_de_criação": user.data_de_criacao,
            "data_de_atualização":user.data_de_atualizacao,
            "ultimo_login": user.ultimo_login,
            "token": jwt.sign(
                {id: user.id},
                process.env.TOKEN,
                {expiresIn: "1h"}
                )
        })
    }
}
export const controller = new Controller()