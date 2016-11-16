import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Note from './Note'

chai.use(chaiEnzyme())

const noteProps = {
  name: 'mynote',
  categoryName: 'mycategory',
}
const note = shallow(<Note { ...noteProps } />)

describe('<Note />', () => {
  it('has a wrapping li tag', () => {
    expect(note).to.have.tagName('li')
  })

  it('has a class "note"', () => {
    expect(note).to.have.className('note')
  })

  it('renders the category name and the name of the note', () => {
    const { categoryName, name } = noteProps
    expect(note.find('.name')).to.have.text('mynote')
  })
})
