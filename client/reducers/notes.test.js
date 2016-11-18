import chai, { expect } from 'chai'
import notes from './notes'
import deepFreeze from 'deep-freeze-node'

describe('initial state', () => {
  const initialsState = notes()
  expect(initialState).to.eql([])
})

describe(ADD_NOTE, () => {
  const initialState = deepFreeze([
    { name: "Note name", categoryId: 2, content: "BlaBla", noteId: 4 }
  ])

  const newNote = deepFreeze({ name: "Note name 2", categoryId: 3, content: "BladieBla", noteId: 5})

  const finalState = deepFreeze([
        { name: "Note name", categoryId: 2, content: "BlaBla", noteId: 4 },
        { name: "Note name 2", categoryId: 3, content: "BladieBla", noteId: 5},
  ])

  const action = deepFreeze({
    type: ADD_NOTE,
    payload: newNote
  })

    expect(notes(initialState, action)).to.eql(finalState)
  })
})
