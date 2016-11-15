import chai, { expect } from 'chai'
import notes from './notes'

describe('notes', () => {
  describe('initial state', () => {
    const initialState = notes()
    it('is an empty array', () => {
      expect(initialState).to.eql([])
    })
  })
})
