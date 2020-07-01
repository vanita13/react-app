import { createStore} from 'redux';
import {Reducer , intial_State } from './reducer';

export const ConfigureStore=()=>
{
      const store = createStore(Reducer,intial_State);
      return store;

}
