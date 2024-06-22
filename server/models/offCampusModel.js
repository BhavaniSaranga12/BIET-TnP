const mongoose=require('mongoose');

const offCampusSchema= new mongoose.Schema({
    position: {
        type:String,
        required: true
    },
    companyname: {
        type:String,
        required: true,
      
    },
    location: {
        type:String,
        default:"Not mentioned"
    },
    salary: {
        type:String,
        default:"Not mentioned"
    },
    batch:{
        type:Array,
        default:[],
    },
    jobtype: {
        type:String,
        default:"Not mentioned"
    },
    branch: {
        type:String,
        default:'All Branches'
    },
    src: {
        type:String,
        required: true
    },
    postedOn:{
        type:Date,
        default:Date.now(),
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Faculty',
       required:true
    },
    autoDelete:{
        type:Date,
        default:null,
    },

})
offCampusSchema.index({autoDelete:1},{expireAfterSeconds:0});

const offcampus= mongoose.model('offcampus',offCampusSchema);

module.exports=offcampus;