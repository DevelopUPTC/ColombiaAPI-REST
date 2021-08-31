const Town = require('../models/Town');

const controler = {
    getTowns:(req,res)=>{
        Town.find({},(error,result)=>{
            if(error){
                return res.status(500).json({
                    state : "Error",
                    message: "No se pudo conectar con la BD"
                });
            }else if( !result ){
                return res.status(200).json({
                    state : "Error",
                    message: "No Exiasten Datos"
                });
            }
            return res.status(200).json({
                state : "Success",
                result
            });
        });
    },
    getDepartments:(req,res)=>{
        const {code} = req.params;
        Town.find({department:code},(error,result)=>{
            if(error){
                return res.status(500).json({
                    state : "Error",
                    message: "No se pudo conectar con la BD"
                });
            }else if( !result ){
                return res.status(200).json({
                    state : "Error",
                    message: "No Existen Datos"
                });
            }
            return res.status(200).json({
                state : "Success",
                result
            });
        });
    }
}

module.exports = controler;
