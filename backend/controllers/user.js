const {Op} = require('sequelize')
const bcrypt = require('bcrypt')
const User = require('../models/user')
exports.postSignup = async (req,res)=>{
    try{
        const {name,email,number,password} = req.body;
        console.log(name);
        if(name.length==0||email.length==0||number.length==0||password.length==0){
            return res.status(500).json({sucess:false, message:'all fields required'})
        }
        const user = await User.findOne({where:{[Op.or]:[{email:email},{number:number}]}})
        if(!user){
        bcrypt.hash(password, 10, async (err,hash)=>{
            if(err){
                return res.status(500).json({error:err})
            }
            else{
                const data = await User.create({
                    name:name,
                    email:email,
                    number:number,
                    password:hash
                 })
                res.status(200).json({success:true,message:'signed up successfully'})
                }
            })
        }
        else{
            return res.status(500).json({success:false,message:'User already exist'})
        }
        }
    catch(err){
        console.log(err)
        res.status(500).json({err})
    }
}
