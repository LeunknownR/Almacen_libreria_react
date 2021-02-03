import React, { Component } from 'react'

export default class Insert extends Component {
    render() {
        return (
            <div className="buttons" id="btn_insert">
                <button onClick={this.props.changeForm.bind(this, 'INSERT')}>INSERTAR
                    <br/>
                    REGISTRO</button>
            </div>
        )
    }
}
