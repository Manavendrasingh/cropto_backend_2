import cropto_model from "../Models/Cropto.Model.js";
import FetchData from "../FetchData.js";

const Data = async () => {
    try{
        const fetched_data = await FetchData();
        for (let data of fetched_data) {
              let code = data.code;
            //   let find_Data  =  await  cropto_model.findOne({code:code});
            
            //  if(find_Data)
            //     {    
            //        const result = await cropto_model.findOneAndUpdate({code : code},data,{new:true});
            //     }
            //    else{
                    const cropto = new cropto_model(data);
                    const result = await cropto.save();
               // }
           
        }
     }catch(error){
        console.log(error.message);
     }



}



export default Data;
