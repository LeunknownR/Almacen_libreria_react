import React, { Component } from 'react';

export default class Table extends Component {
    render() {
        const products = this.props.products;
        return (
            <table id="table_prod">
                <thead>
                    <tr>
                        <th>CÓDIGO</th>
                        <th>NOMBRE</th>
                        <th>STOCK</th>
                        <th>PRECIO</th>
                        <th>MARCA</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => 
                        <tr key={product.ID}>
                            <td>{product.ID}</td>
                            <td>{product.NAME}</td>
                            <td>{product.STOCK}</td>
                            <td>$ {product.COST}</td>
                            <td>{product.BRAND}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}
