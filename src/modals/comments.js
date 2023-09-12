
const mongoose=require('mongoose');


const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    
},
{
    timestamps:true,
})

const Comments=mongoose.model('comment',commentSchema);

module.exports=Comments