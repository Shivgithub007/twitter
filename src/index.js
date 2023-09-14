
const express=require('express');
const connect=require('./config/database');
const TweetRepository=require("./repository/tweet-repository");
const comment=require('./modals/comments')

const app=express();


app.listen(5000,async ()=>{
    console.log('Server is listening on port 5000');
    await connect();
    console.log('Mongo db connected');
    
    // const TweetRepo=new TweetRepository();
    // const data=await TweetRepo.create({content:'Comments deleted',email:'hello'});
    // console.log(data);
    // const com=await comment.create({content:'hello world'});
    // data.comment.push(com);
    // await data.save();
    // console.log(data);
    const TweetRepo=new TweetRepository();
    const data=await TweetRepo.getAll(4,4);
    console.log(data[0].contentWithEmail);


})