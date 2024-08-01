import expres from 'express'
import { get_cropto_data } from '../Controllers/Cropto.controller.js';
const cropto_route = expres.Router();

cropto_route.get("/",get_cropto_data);

export default cropto_route;