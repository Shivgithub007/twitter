const mongoose=require('mongoose');
const Tweet=require('../modals/tweet');



class TweetRepository{

    async create(data){
        try{
            const tweet=await Tweet.create(data);
            return tweet;
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async update(id,data){
        try{
            const tweet=await Tweet.findByIdAndUpdate(id,data,{new:true});
            return tweet;
        }catch(error){
            console.log(error);
        }
    }

    async read(id){
        try{
            const tweet=await Tweet.findById(id);
            return tweet;
        }catch(error){
            console.log(error);
        }
    }

    async getWithComments(id){
        try{
            const tweet=await Tweet.findById(id).populate({path:'comment'}).lean(); // To get the linked data also from the database
            return tweet;
        }catch(error){
            console.log(error);
        }
    }

    async delete(id){
        try{
            const tweet=await Tweet.findByIdAndRemove(id);
            return tweet;
        }catch(error){
            console.log(error)
        }
    }
    async getAll(offset,limit){
        try{
            const tweet=await Tweet.find().limit(limit).skip(offset);
            return tweet;
        }catch(error){
            console.log(error);
        }
    }
}


module.exports=TweetRepository;