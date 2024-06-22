const offcampus = require("../models/offCampusModel");
const oncampus = require("../models/onCampusModel");





async function offcampusHire(req,res){
    const {title,companyname,jobtype,location,salary,src,branch,batch}=req.body;
    const postedBy=req.user.id;
    const autoDelete=new Date(Date.now()+15*24*60*60*1000);
    try {
     const newJob= new offcampus({
        position:title,
        companyname: companyname,
    location: location,
    salary,
    jobtype,
    branch,
    src,
    batch,
    postedBy,
    autoDelete
     })
     newJob.save();
     res.status(201).json({ message: 'Job posted successfully', status: true});
    } catch (error) {
     console.error('Error :', error.message);
     res.status(500).json({ message: 'Server error',status:false});
    }
}

async function oncampusHire(req,res){
    const {title,companyname,jobtype,location,salary,src,branch,batch,description}=req.body;
    const postedBy=req.user.id;
    const autoDelete=new Date(Date.now()+15*24*60*60*1000);
    try {
     const newJob= new oncampus({
        position:title,
        companyname: companyname,
    location: location,
    salary,
    jobtype,
    branch,
    src,
    batch,
    postedBy,
    autoDelete,
    description
     })
     newJob.save();
     res.status(201).json({ message: 'Job posted successfully', status: true});
    } catch (error) {
     console.error('Error :', error.message);
     res.status(500).json({ message: 'Server error',status:false});
    }
}
module.exports={
    offcampusHire,
    oncampusHire
}