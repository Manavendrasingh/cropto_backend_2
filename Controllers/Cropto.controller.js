import cropto_model from "../Models/Cropto.Model.js"

const get_cropto_data = async(req,res)=>{

    const data_from_mongodb = await cropto_model.find();
    res.status(200).send({result : true , message : "data fetched successfully" , data : data_from_mongodb});

}

export {get_cropto_data}
