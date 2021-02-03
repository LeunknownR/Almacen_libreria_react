import React, { Component } from 'react'

export default class InsertForm extends Component {
    state = {
        NAME: 'PRODUCTO',
        STOCK: 1,
        COST: 0.50,
        BRAND: 'MARCA'
    }
    setProduct = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render() { 
        const NAME = this.state.NAME;
        const STOCK = this.state.STOCK;
        const COST = this.state.COST;
        const BRAND = this.state.BRAND;
        return (
            <div className='form' id='insertForm'>
                <button id="btn_close" onClick={this.props.changeForm}>x</button>
                <br/>
                <label>NOMBRE: </label>
                <input 
                    type='text' 
                    onChange={this.setProduct}
                    name='NAME'/>
                <br/>
                <label>STOCK: </label>
                <input 
                    type='text' 
                    onChange={this.setProduct}
                    name='STOCK'/>
                <br/>
                <label>PRECIO: </label>
                <input 
                    type='text' 
                    onChange={this.setProduct}
                    name='COST'/>
                <br/>
                <label>MARCA: </label>
                <input 
                    type='text' 
                    onChange={this.setProduct}
                    name='BRAND'/>
                <br/>
                <button onClick={this.props.insertProduct.bind(this, NAME, STOCK, COST, BRAND)}>INSERTAR</button>
                <h2>{this.state.NAME}</h2>
            </div>
        )
    }
}
