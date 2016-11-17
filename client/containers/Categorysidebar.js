import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Category from '../components/Category'
import RaisedButton from 'material-ui/RaisedButton'
import CreateCategory from '../components/CreateCategory'
import { IndexLink } from 'react-router'



export class Categorysidebar extends React.Component {

  renderCategory(category, index) {
    return <Category key={ index } { ...category } />
  }

    render() {
      const { categories }= this.props




    return (
      <div className="notesboard">
          <ul className="categories">
              { categories.map(this.renderCategory) }
              <IndexLink to="/">See all notes</IndexLink>
              <p> Add your category: </p>
            <CreateCategory />
          </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}

export default connect(mapStateToProps, {})(Categorysidebar)
