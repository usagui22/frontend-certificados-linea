import axios from 'axios';
import React, { Component } from 'react';

export default class Home extends Component {
  
  state = {};
  
  componentDidMount(){
    const config = {
        headers:{
          Authorization: 'Bearer' + localStorage.getItem('token')
        }
    };

    axios.get('user',config).then(
      res =>{
        // console.log(res);
        this.setState({
          user:res.data
        });
      },
      err =>{
        console.log(err);
      }
    )
  }

  render() {
    if(this.state.user){
      return(
        <h2>Hi {this.user.nombre_usuario}</h2>
      )
    }
    return (        
      <h3>Estas en Home</h3>        
    )
  }
}
