import React, { Component } from 'react'
import { connect } from 'react-redux'
import appLoading from '../actions/loading'
import Title from '../components/Title'


export class NoteShow extends Component {
  componentWillMount() {
    this.props.appLoading(true)
  }

  componentDidMount() {
      const { routeParams } = this.props
      appLoading(false)
    }

  render() {
          this.props.routeParams.noteId
      if (this.props.note) {
        const { name } = this.props.note

        return (
        <div className="note-show">
            <Title label={ name } />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    note: state.note
  }
}

export default connect(mapStateToProps, {})(NoteShow)
