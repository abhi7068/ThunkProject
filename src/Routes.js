import React, { Component } from 'react'
import {Link,Route,Switch } from "react-router-dom"
import List from "./List";
import Product from "./Product";
import CategoryList from "./CategoriesList"
export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={List}/>
                    {/* <Route exact path="/list" component={List}/> */}
                    <Route exact path="/product/:id" component={Product}/>
                    <Route exact path="/categories" component={CategoryList}/>
                    <Route exact path="/categories/:name" component={CategoryList}/> 

                </Switch>
            </div>
        )
    }
}
