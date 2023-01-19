import React, { Component } from 'react'
import Bio from './fullname/Bio/Bio'
import Img from './fullname/Bio/Img/Img'
import FullName from './fullname/FullName'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <FullName/>
        <Img/>
        <Bio/>
        
      </div>
    )
  }
}
