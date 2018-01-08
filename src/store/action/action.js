import ActionTypes from '../constant';

export function changeUserName(){
    return dispatch => dispatch({type: ActionTypes.USERNAME, payload: 'Ali'})
    
}
