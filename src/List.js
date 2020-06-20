import React, { Component } from 'react'
import {connect} from "react-redux";
import {fetchproduct} from "./store/action/action";
import {Link} from "react-router-dom";
 class List extends Component {
    componentDidMount(){
        this.props.dispatch(fetchproduct())
    }
    render() {
        return (
            <div>
                <Link to="/categories">categories</Link>
                <thead>
                    <th>name</th>
                    <th>category</th>
                    <th>price</th>
                    <th>description</th>
                </thead>
                <tbody>
                    {this.props.list.details.map((element,i)=>{
                        return(
                            <div>
                                <tr>
                                    <Link to={`/product/${element._id}`}>
                                        <td>{element.product_name}</td>
                                    </Link>
                                <td>{element.category.title} </td>
                                <td>{element.price} </td>
                                <td>{element.description} </td>
                                </tr>
                            </div>
                        )
                    })}
                </tbody>
             
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{list:state}
}
export default connect(mapStateToProps)(List);