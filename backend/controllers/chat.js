const Chat = require('../models/chat');
const {Op} = require('sequelize');

exports.getChat = async (req,res,next) => {
    try{
        const lastMessageId = req.query.id
        console.log(lastMessageId)
        const chat = await Chat.findAll({where:{id:{[Op.gt]:lastMessageId}}});
        console.log(chat)
        res.status(200).json({success:true,chat:chat})
    }
    catch(err){
        console.log(err)
        res.status(500).json({success:false,message:'something went wrong'})
    }
}

exports.postChat = async (req,res,next)=>{
    try{
        const message = req.body.message
        console.log(message)
        const chat = await req.user.createChat({
            message:message
        })
        res.status(200).json({success:true,message:'sent sucessfully'})

    }
    catch(err){
        console.log(err)
        res.status(500).json({success:false,message:'something went wrong'})
    }

}