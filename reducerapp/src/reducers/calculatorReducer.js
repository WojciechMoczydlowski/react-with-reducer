import {ADD_SYMBOL} from '../actions/types';

const initialState = {
    equation: '',
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_SYMBOL:
        let newEquation = state.equation += action.payload;
        console.log('reducer');
        console.log(newEquation);
        return{
            ...state,
            equation:newEquation,
        }
        default:
            return state;
    }
}