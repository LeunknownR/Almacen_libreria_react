import React, { Component } from 'react'

export default class DeleteForm extends Component {
    state = {
        ID: 0
    }
    setID = (e) => {
        this.setState({
            ID: parseInt(e.target.value)
        });
    }
    render() {
        return (
            <div className='form' id='searchForm'>
                <button id="btn_close" onClick={this.props.changeForm}>x</button>
                <br/>
                <label>ID: </label>
                <input type='text' onChange={this.setID}></input>
                <button onClick={this.props.deleteProduct.bind(this, this.state.ID)}>ELIMINAR</button>
            </div>
        )
    }
}
