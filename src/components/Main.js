import React, { Component } from 'react';

import ActionButtons from "./ActionButtons";
import DeleteForm from './Actions/Forms/DeleteForm';
import InsertForm from './Actions/Forms/InsertForm';
import SearchForm from './Actions/Forms/SearchForm';
import Table from './Actions/Table/Table';

import products from './products.json';

export default class Main extends Component {
    state = {
        products: products,
        action: ''
    }
    insertProduct = (NAME, STOCK, COST, BRAND) => {
        //AGREGANDO EL NUEVO PRODUCTO
        const newProduct = {
            ID: this.state.products.length,
            NAME: NAME, 
            STOCK: STOCK,
            COST: COST,
            BRAND: BRAND
        };
        this.setState({products: [...this.state.products, newProduct]});
        console.log('Se insertó');
        console.log(this.state.products);
    }
    deleteProduct = (ID) => {
        //FILTRANDO EL PRODUCTO CON ID ESCRITO
        const newProducts = this.state.products.filter(product => product.ID !== ID);
        //REEMPLAZANDO EL ARRAY ANTERIOR POR EL NUEVO
        this.setState({products: newProducts});
    }
    changeForm = (action = '') => {
        this.setState({action: action});
    }
    searchProduct = (filter, type) => {
        if (type === 0){
            
        }
        else if (type === 1){

        }
        else throw new Error();
    } 
    showForm(action) {
        switch (action)
        {
            case "SEARCH":
                return <SearchForm changeForm={this.changeForm}/>
            case "INSERT": 
                return <InsertForm changeForm={this.changeForm} insertProduct={this.insertProduct}/>
            case "UPDATE": 
                return <div> 
                    HOLA CTM EN UPDATE :U
                </div>
            case "DELETE": 
                return <DeleteForm changeForm={this.changeForm} deleteProduct={this.deleteProduct}/>
            default: return null;
        }
    }
    render() {
        const form = this.showForm(this.state.action);
        return (
            <div className="window">
                <div className="container">
                    <h1>ALMACÉN</h1>
                    <ActionButtons 
                        insertProduct={this.insertProduct}
                        changeForm={this.changeForm}/>
                    {form}
                    <Table products={this.state.products} />
                </div>
            </div>
        );
    }
}
