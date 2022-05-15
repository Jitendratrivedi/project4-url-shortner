const mongoose=require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const ReviewSchema =new mongoose.Schema({
bookId:{type:ObjectId,ref:"Book",required:true},
reviewedBy:{type:String,required:true,default:"Guest"},
reviewedAt:{type:Date,required:true},
rating:{type:Number,required:true},
review:{type:String},
isDeleted: {type:Boolean, default: false}


})

module.exports=mongoose.model("Review",ReviewSchema)


// {
//     bookId: {ObjectId, mandatory, refs to book model},
//     reviewedBy: {string, mandatory, default 'Guest', value: reviewer's name},
//     reviewedAt: {Date, mandatory},
//     rating: {number, min 1, max 5, mandatory},
//     review: {string, optional}
//     isDeleted: {boolean, default: false},
//   }