import React, { Component } from 'react';

class Subject extends Component{
  render(){
    return(
      <header>
        <h1><a href="/" className={this.props.className} onClick={function(e){
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>{this.props.title}</a></h1>
        <p className="subTitle">{this.props.sub}</p>
      </header>
    );
  }
}

export default Subject;