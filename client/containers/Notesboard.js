import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Note from '../components/Note'
import Category from '../components/Category'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CreateNote from '../actions/create-note'


export class Notesboard extends React.Component {
  render() {
    const { notes, signedIn, categories }= this.props
    // var notes = this.props
      // var categories = this.props

    return (
      <div className="notesboard">
        <RaisedButton label="Create Note" primary={ true } onClick={ CreateNote } />
        <h3>This is the Notesboard</h3>
          <list>
            <Note />
              <div className="sidebar">
                <Category />
              </div>
            { notes.map((note) => {
              return <Note
              key={note._id}
              { ...note} />
            })}
          </list>
      </div>
    )
  }
}
//   <list>
//     { notes.map((note) => {
//       return <Listitem key={ note._id }
//       primaryText={ `${ note.name }`}
//       rightIcon={
//         <Link to={ `/note/${note._id}` }>
//           <RaisedButton label="Enlarge" />
//         </Link>
//       }  />
//     })}
//   </list>
// </div>

//
// Notesboard.propTypes = {
//   notes: PropTypes.array.isRequired,
// }

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    // name: state.note.name,
    // categories: state.categories,
  }
}
// export default Notesboard
export default connect(mapStateToProps)(Notesboard)
