import React, { Component } from 'react';

class Control extends Component{
  render(){
    return(
      <ul>
        <li className="li-style"><a href="/create" className={this.props.className} onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('create');
        }.bind(this)}>create</a></li>
        <li className="li-style"><a href="/update" className={this.props.className} onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('update');
        }.bind(this)}>update</a></li>
        <li className="li-style"><input onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('delete');
        }.bind(this)} type="button" value="delete"></input></li>
      </ul>
    );
  }
}

export default Control;