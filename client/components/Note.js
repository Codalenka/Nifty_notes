import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


  class Note extends Component {
   render() {
     const { note, name, categoryId, type, userId } = this.props

     return(
       <div className="note">
          <h4> These are the notes </h4>
       </div>
     )
   }
 }

 Note.propTypes = {
   name: PropTypes.string.isRequired,
 }

 const mapStateToProps = (state) => {
   return {
     note: state.note,
    //  name: state.note.name,
     // categories: state.categories,
   }
 }

export default connect(mapStateToProps)(Note)
