import { combineReducers } from 'redux' ;
import {teamReducer} from "./teamReducer" ;
import {docsReducer} from "./docsReducer"; 


const rootReducer= combineReducers({
    teamReducer,
    docsReducer
})

export default rootReducer;