import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <div className="buttons" id="btn_search">
                <fieldset>
                    <legend><h3>BÚSQUEDA</h3></legend>
                    <p>Por:</p>
                    <div id="rbtn">
                        <div id="rbtn_cod">
                            <input 
                                type="radio" 
                                name="radio_search"/>
                            <label>CÓDIGO</label>
                        </div>
                        <div id="rbtn_name">
                            <input 
                                type="radio" 
                                name="radio_search"/>
                            <label>NOMBRE</label>
                        </div>
                    </div>
                    <button onClick={this.props.changeForm.bind(this, 'SEARCH')}>BUSCAR
                        <br/>
                        REGISTRO</button>
                </fieldset>
            </div>
        );
    }
}
