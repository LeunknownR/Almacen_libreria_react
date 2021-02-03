import React, { Component } from 'react'

export default class Delete extends Component {
    render() {
        return (
            <div className="buttons" id="btn_delete">
                <button onClick={this.props.changeForm.bind(this, 'DELETE')}>ELIMINAR
                    <br/>
                    REGISTRO</button>             
            </div>
        )
    }
}
