const { sClient, gClient } = require("./client.service");

module.exports = {
  setClient: (req,res) => {
     const {name,email,country,phone,message}=req.body
     console.log(req.body)
     if(!name || !email || !country || !phone || !message){
        res.status(300).json({msg:"please fill all form"})
     }
    sClient(req.body,(err,result)=>{
        
        if (err) return res.status(305).json({ msg: err });
        console.log(result);
        return res.json({ msg: "submitted successfully", data: result });
       
    }

    )
  },
  getClient: (req,res) => {
    gClient((err, result) => {
      if (err) return res.status(305).json({ msg: err });
      console.log(result);
      return res.json({ msg: "fetched successfully", data: result });
    });
  },
};