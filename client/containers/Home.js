import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Notesboard from './Notesboard'


class Home extends Component {
  render() {
    const { userName } = this.props

    return(
      <div className="home">
        <li className="title">
          <h2>Welcome, { userName || 'Stranger' }!</h2>
          <h3>Here are your notes: </h3>
          <Notesboard />
        </li>
      </div>

    )
  }
}

Home.propTypes = {
  userName: PropTypes.string,
}

const mapStateToProps = (state) => {
  return {
    userName: state.currentUser.name,
  }
}

export default connect(mapStateToProps)(Home)
