import { createStore, persist } from 'easy-peasy';
import careTakersModel from './models/careTakersModel';
import petOwnersModel from './models/petOwnersModel'
import petsModel from './models/petsModel';
import routesModel from './models/routesModel';
import userModel from './models/userModel';
import bidModel from "./models/bidModel"
import adminModel from "./models/adminModel"


const storeModel = {
  careTakers: careTakersModel,
  petOwners: petOwnersModel,
  pets: petsModel,
  user: userModel, 
  routes: routesModel,
  bids: bidModel,
  admin: adminModel
};

const store = createStore(persist(storeModel, {mergeStrategy: 'mergeShallow'}));
// const store = createStore(storeModel);

export default store;