const mongoose=require('mongoose');


const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    comment:[
        {
            type:mongoose.Schema.Types.ObjectId,// It is refring to the comment schema
            ref:'comment',
        }
    ]
},
{
    timestamps:true,
})

tweetSchema.virtual('contentWithEmail').get(function process(){
    return `${this.content} \n CreatedBy:${this.email}`;
})

const Tweet=mongoose.model('Tweet',tweetSchema);

module.exports=Tweet