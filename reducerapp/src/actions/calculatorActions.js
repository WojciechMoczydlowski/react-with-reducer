import {ADD_SYMBOL} from './types';

export const addSymbol = (symbol) => dispatch => {
    console.log('addSymbol');
    dispatch({
        type: ADD_SYMBOL,
        payload: symbol,
    })
}
