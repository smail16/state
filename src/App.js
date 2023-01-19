
import React, { Component } from 'react'
import './App.css';
import Chrono from './chrono/Chrono';
import Profile from './Profile/Profile';

export default class App extends Component {
  state = {
    counter:0,
    isVisible: false
    
  }
  inc=()=>{this.setState({counter:this.state.counter+1})}
  dec=()=>{if (this.state.counter>0){this.setState({counter:this.state.counter -1})}}
  

  switch =()=>{this.setState({isVisible :!this.state.isVisible},()=>{
    this.setCounter()
  })


}
  setCounter=()=>{if(this.state.isVisible){
  this.intervalle=setInterval(this.inc, 1000);}else{
    clearInterval(this.intervalle)
    this.setState({counter:0})
  }
  }
  componentDidMount(){}
  componentDidUpdate(){}
  render() {
    return (
      <div className='App'>
        <button onClick={this.switch}>{this.state.isVisible ?"hide":"show"}</button>
         {this.state.isVisible?(
        <div>
      
         <Profile/>
         <Chrono counter={this.state.counter}/>

        </div>): <></>
        
         }

      </div>
    )
  }
}

