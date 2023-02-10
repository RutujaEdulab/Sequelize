var db = require("../models");
var Student = db.students;
var addstu = async (req, resp) => {
  try {
    const data = await Student.create({
      firstName: "Rutuja",
      lastName: "Patil",
      Address: "kandivali",
    },
   );
    console.log(data instanceof Student);
    console.log(data.firstName);
    //   await data.save();
    console.log(" Student Data was saved to the database!");
    console.log(data.toJSON());
    resp.status(200).json(data.toJSON());
  } catch (err) {
    console.log("catch error message ", err.message);
  }
};

var getstu=async(req,resp)=>{
  const da = await Student.findAll();
  resp.status(200).json({data:da});

}

//to get data from table 
var getstudent=async(req,resp)=>{
  const conn=await Student.findOne({
    where:{
      id:req.params.id

    }
  });
  resp.status(200).json({data:conn});
}
//To insert new record in database 
var poststu=async(req,resp)=>{

  var postdata=req.body;
  if(postdata.length>1){
    var dat=await Student.bulkCreate(postdata)
  }else{
  var dat=await Student.create(postdata);
}
  resp.status(200).json({data:dat});

}

//To delete data from database.
var deletestu=async(req,resp)=>{
  var data=await Student.destroy({
    where:{
      id:req.params.id
    }
  })
  resp.status(200).json({data:data});
}

//To Update data from database.
 var putstu=async(req,resp)=>{
  var updatedata=req.body;
  const data=await Student.update(updatedata,{
    where:{
      id:req.params.id
    }
  });
  resp.status(200).json({data:data});
 }
module.exports = {
  addstu,getstu,getstudent,poststu,deletestu,putstu
};
