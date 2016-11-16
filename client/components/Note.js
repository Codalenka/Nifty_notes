import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


class Note extends Component {
   render() {
     const { name, categoryName } = this.props

     return(
       <li className="note">
        <div className="label">
          <span className="name">{ name }</span>
          .&nbsp;
          <span className="category">{ categoryName }</span>
        </div>
       </li>
     )
   }
 }


export default Note
