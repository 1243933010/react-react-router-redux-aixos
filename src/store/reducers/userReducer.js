import {createStore } from 'redux';
const msg = 0;
const setMsg = (state=msg,action)=>{
    if(Object.is(action.type,'userMsg')){
        state = action.value
        return state
    }else{
        return state
    }

}
const store = createStore(setMsg)
export default store;