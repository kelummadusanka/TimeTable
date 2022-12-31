const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const cors = require('cors');

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Access successfully!"));
const LecCrudUrls = require('./routes/AdminRouts/LecCrudroutes');
const ModuleUrls= require('./routes/AdminRouts/Moduleroutes');
const RoomUrls= require('./routes/AdminRouts/Roomroutes');
const TimeCell= require('./routes/AdminRouts/TimeCell');
const Admin= require('./routes/AdminRouts/Admin');
const Student= require('./routes/AdminRouts/Student');
const Diselect= require('./routes/AdminRouts/Diselect');

app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));
app.use(cors());

//all Student urls here


//all admin urls here
app.use('/app/Lecturer', LecCrudUrls);
app.use('/app/Rooms', RoomUrls);
app.use('/app/Module', ModuleUrls);
app.use('/app/TimeCell', TimeCell);
app.use('/app/admin', Admin);
app.use('/app/Student', Student);
app.use('/app/Diselect', Diselect);



//app.use('/app',(req,res)=>{res.json({"name":"kelum"})});
app.listen(4000, () => console.log("server is up and running"));