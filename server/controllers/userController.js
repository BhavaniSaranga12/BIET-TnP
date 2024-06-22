const offcampus = require("../models/offCampusModel");
const oncampus = require("../models/onCampusModel");





async function offcampusJobs(req,res){
    try {
        const jobs = await offcampus.find();
        res.json(jobs);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

async function oncampusJobs(req,res){
    try {
        const jobs = await oncampus.find();
        res.json(jobs);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}
module.exports={
    offcampusJobs,
    oncampusJobs
}