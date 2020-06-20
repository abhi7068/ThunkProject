import axios from "axios";
export const getData=(data)=>{
    return{
        type:"GET_DATA",
        payload:data,
        loading:false
    }
}
export const getIndividual=(data)=>{
    return{
        type:"GET_INDIVIDUAL",
        payload:data,
        loading:false
    }
}
export const getcategory=(data)=>{
    return{
        type:"GET_CATEGORY",
        payload:data,
        loading:false
    }
}
export const filtercategory=(name,index)=>{
    return{
        type:"FILTER_CATEGORY",
        name:name,
        loading:false
    }
}

export const getError=(data)=>{
    return{
        type:"ERROR",
        err:"error"
    }
}

export const fetchdata=()=>{
    return(dispatch)=>{
        return axios
        .get("https://yoyogift-qa-server.herokuapp.com/categories/find/getAllCatagory")
        .then((res)=>{
            dispatch(getcategory(res.data))
        })
        .catch(err=>{
            dispatch(getError())
        })
    }
}
export const fetchproduct=()=>{
    return(dispatch)=>{
        return axios
        .get("https://yoyogift-qa-server.herokuapp.com/products/find/getAllProducts")
        .then((res)=>{
            dispatch(getData(res.data))
        })
        .catch(err=>{
            dispatch(getError())
        })
    }
}

export const fetchoneproduct=(id)=>{
    return(dispatch)=>{
        return axios
        .get(`https://yoyogift-qa-server.herokuapp.com/products/find/getProductById/${id}`)
        .then((res)=>{
            dispatch(getIndividual(res.data))
        })
        .catch(err=>{
            dispatch(getError())
        })
    }
}