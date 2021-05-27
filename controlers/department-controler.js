const Department = require('../models/Department');
const controler = {
    getDepartments: (req, res )=>{
        Department.find({},(error,result)=>{
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
    }
}

module.exports = controler;
