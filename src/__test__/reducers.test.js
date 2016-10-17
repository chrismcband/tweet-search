import { selectedUser } from '../reducer_selectedUser'

describe('modal reducer', () => {

  it('should return the initial state for other actions', () => {
    expect(selectedUser(null, 'SET_ACTIVE_SEARCH')).toEqual(null)
  })

  it('should handle SHOW_MODAL and return user', () => {
    const user = "user"
    expect(selectedUser(user, 'SHOW_USER_MODAL')).toEqual(user)
  })

  it('should handle HIDE_USER', () => {
    expect(selectedUser(null, 'HIDE_USER_MODAL')).toEqual(null)
  })

})
