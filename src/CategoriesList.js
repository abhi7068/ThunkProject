import React, { Component } from 'react'
import {fetchdata} from "./store/action/action";
import {withRouter,Link} from "react-router-dom";
import {connect} from "react-redux";
import {filtercategory} from "./store/action/action";
 class CategoryList extends Component {
    constructor(props) {
        super(props)
    
      
    }
    componentDidMount(){
        this.props.dispatch(fetchdata());
    }
    
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.categories.categories.map((element,i)=>{
                           return(
                            <Link to={`/categories/${element.title}`} onClick={
                                ()=>{
                                    this.props.dispatch(filtercategory(element._id,i))
                                    this.props.history.push(`/categories/${element.title}`)
                                }
                            }>
                                <li key={i}>
                                    {element.title}
                                </li>
                                </Link>
                           )
                        })
                    }
                </ul>
                <>
                <thead>
                    <th>name</th>
                    <th>category</th>
                    <th>price</th>
                    <th>description</th>
                </thead>
                </>
                {
                    this.props.match.url !== "/categories" ?
                    (
                        this.props.categories.filtered.map((element,i)=>{
                            console.log("data is mapping",element);
                            return (
                                <tr key={i}>
                                    <td>{element.product_name}</td>
                                    <td>{element.category.title}</td>
                                    <td>{element.price}</td>
                                    <td>{element.description}</td>
                                </tr>
                            )
                        })
                    ):''
                }
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return  {
        categories:state
    }
}
export default withRouter (connect(mapStateToProps)(CategoryList));