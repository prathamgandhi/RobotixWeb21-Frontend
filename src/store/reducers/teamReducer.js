

export const teamReducer = (state={teams:{},loading:true},action)=>{
    switch (action.type) {
        case "UPDATE_TEAM":
            
            return {...state,...action.payload};
    
        default:
            return state;
    }
}