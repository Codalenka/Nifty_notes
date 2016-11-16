import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './Note.sass'


class Note extends Component {
   render() {
     const { name, category, content  } = this.props

     return(
       <div className="note">
        <div className="label">
          <div className="name"> Name: { name }</div>
          <div className="category"> Category: { category }</div>
          <div className="content">Content: { content }</div>
        </div>
       </div>
     )
   }
 }


export default Note
