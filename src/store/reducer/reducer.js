const initialState={
    details:[],
    detail:[],
    categories:[],
    filtered:[],
    errors:"",
    isLoading:true
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "GET_DATA":
            return {
                ...state,
                details:action.payload,
                isLoading:false
            }
            case "GET_INDIVIDUAL":
                return {
                    ...state,
                    detail:action.payload,
                   
                }
                case "GET_CATEGORY":
                    return {
                        ...state,
                        categories:action.payload,
                       
                    }
                    case "FILTER_CATEGORY":
                        const id=parseInt(action.key);
                        return {
                            ...state,
                            filtered:state.details.filter((element)=>{
                                if(element.category){
                                    if(element.category._id==action.name)
                                    return true
                                }
                            })
                           
                        }
                    case "ERROR":
                        return {
                            ...state,
                            errors:action.err,
                           
                        }

        default: return state;
    }
}
export default reducer;