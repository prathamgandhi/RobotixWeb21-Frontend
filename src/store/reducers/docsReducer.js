export const docsReducer=(state={loading:true,docs:[]},action)=>{
    switch (action.type){
        case "UPDATE_DOCS":
            return {...state,...action.payload};

        default:
            return state;
    }
}