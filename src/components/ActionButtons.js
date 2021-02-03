import React, { Component } from 'react'

import Search from './Actions/Buttons/Search';
import Insert from './Actions/Buttons/Insert';
import Update from './Actions/Buttons/Update';
import Delete from './Actions/Buttons/Delete';

export default class ActionButtons extends Component {
    render() {
        return (
            <div className="actionButtons">
                <Search changeForm={this.props.changeForm}/>
                <Insert 
                    changeForm={this.props.changeForm}
                    insertProduct={this.props.insertProduct}/>
                <Update/>
                <Delete changeForm={this.props.changeForm}/>     
            </div>
        );
    }
}
