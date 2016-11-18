import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Note from './Note'
import wrapper from '../test/wrapper'

chai.use(chaiEnzyme())

const noteProps = {
  name: 'mynote',
  category: 'mycategory',
  noteId: 1,
  content: "This is the content",
}
const note = wrapper(<Note />)

describe('<Note />', () => {
  it('has a class "note"', () => {
    expect(note).to.have.className('note')
  })

  it('renders the category name and the name of the note', () => {
    const { name, category, noteId, content } = noteProps
    expect(note.find('.name')).to.have.text('mynote')
    expect(note.find('.category')).to.have.text('mycategory')
    expect(note.find('.content')).to.have.text('This is the content')
  })
})
