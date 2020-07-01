import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import { DISHES } from '../shared/dishes';

export const intial_State={
    dishes:DISHES,
    comments:COMMENTS,
    leaders:LEADERS,
    promotions:PROMOTIONS,
};

export const Reducer=(state = intial_State,action)=>
{
    return state;
};