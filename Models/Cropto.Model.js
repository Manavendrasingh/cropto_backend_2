import mongoose from "mongoose";

const {Schema ,model} = mongoose;

const cropto_schema = new Schema({
    code : {type : String},
    rate: {type :  Number},
    volume: { type : Number},
    cap: { type : Number},
    delta: {
      hour: { type : Number},
      day: { type : Number},
      week: { type : Number},
      month: { type : Number},
      quarter: { type : Number},
      year:  { type : Number}
    }
})
 
const cropto_model = model("Cropto",cropto_schema);

export default cropto_model;