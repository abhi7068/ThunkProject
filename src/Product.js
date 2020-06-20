import React, { Component } from 'react'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchoneproduct} from "./store/action/action"
 class List extends Component {
    componentDidMount(){
        this.props.dispatch(fetchoneproduct(this.props.match.params.id))
    }
    render() {
        return (
            <div>
                 <thead>
                    <th>name</th>
                    <th>category</th>
                    <th>price</th>
                    <th>description</th>
                </thead>
                <tbody>
                    <tr>
        <td>{this.props.list.detail.product_name}</td>
        {
            this.props.list.detail.categories &&  this.props.list.detail.categories.title ?
            (
            <td>{this.props.list.detail.category.title}</td>
            ):
            (
                <td></td>
            )
        }
        <td>{this.props.list.detail.price}</td>
        <td>{this.props.list.detail.description}</td>
                    </tr>
                </tbody>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        list:state
    }
}
export default connect(mapStateToProps)(List)