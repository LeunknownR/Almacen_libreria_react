import React, { Component } from 'react'

export default class SearchForm extends Component {
    state = {
        ID: 0
    }
    setID = (e) => {
        this.setState({
            ID: e.target.value
        });
    }
    render() {
        return (
            <div className='form' id='searchForm'>
                <button id="btn_close" onClick={this.props.changeForm}>x</button>
                <br/>
                <label>ID: </label>
                <input type='text' onChange={this.setID}></input>
                <button>BUSCAR</button>
            </div>
        )
    }
}
