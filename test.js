//now first we need to look for time library
const d = new Date();

let now_time = d.getHours()*3600 + d.getMinutes()*60 + d.getSeconds();

start_time = "75600"; //2AM
end_time = "82900"; //2:30AM
dic = {Date:{
    Year:"2022",
    Month:"01",
    Day:"20"
}};



// const months = ["January","Febuary","March","April","May","June","July","August","Septemeber","October","November","December"];
const realDay = dic["Date"]["Day"];
// const Week_Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday" , "Saturday","Sunday"];
var date = new Date(null);
var year = Number(dic["Date"]["Year"]);
var month = Number(dic["Date"]["Month"]);
var runDate = Number(dic["Date"]["Day"]);

date.setSeconds(Number(start_time)); // specify value for SECONDS here
var start_pat = date.toISOString().substr(11, 8);
date.setSeconds(Number(end_time));
var end_pat = date.toISOString().substr(11,8);
var numdayToRun = Number(dic["Date"]["Month"]) + Number(dic["Date"]["Day"]) -1 + Number(dic["Date"]["Year"]);
const Week_days = [0,4]; //get this from server
const f = new Date();
let currentDate = f.getFullYear() + f.getMonth() + f.getDate();

let currentDay = f.getDay();
console.log(Week_days.includes(currentDay));
//run once logic
if (currentDate == numdayToRun && (now_time > Number(start_time) && now_time < Number(end_time)))   {
    console.log("run")
};

//run every week logic
if ((Week_days.includes(currentDay)) && (now_time > Number(start_time) && now_time < Number(end_time))) {
    console.log("papers")
}

// router.put("/Schedule1" , async (req, res) =>{
//     if (!req.body.Device) {
//       res.status(200).send({message : "Please"});
//       return;
//     }
//     const schedule = await Post.findOne({
//       Device: req.body.Device,
//     }).then((schedule) => {
//       console.log(schedule)
//       if (!schedule){
//         res.status(400).send("Something went wrong");
//       }
//       else {
//         Post.findOneAndUpdate({ "Device": req.body.Device }, { "Schedule.Schedule1.Enable": true  }, { new: true }).then((newPost) => {
//           res.status(200).send({ message: "Pattern Enabled" });
//         })
//         .catch((err) =>
//           res.status(400).send({ message: "Something went wrong" })
//         );
//       }
  
    
//     }
      
//       ).catch((err) =>
//       res.status(400).send({ message: "Something went wrong" })
//     );})










