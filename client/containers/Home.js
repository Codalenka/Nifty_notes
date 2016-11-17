import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Notesboard from './Notesboard'
import Categorysidebar from './Categorysidebar'
import './Noteboard.sass'


class Home extends Component {
  render() {
    const { userName } = this.props

    return(
      <div className="home">
      <h3>Welcome, { userName || 'Stranger' }!</h3>
        <Categorysidebar />
         <Notesboard />
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
