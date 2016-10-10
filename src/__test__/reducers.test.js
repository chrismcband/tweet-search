import Modal from '../reducer_modal'

describe('modal reducer', () => {

  it('should handle SHOW_USER and return user', () => {
    const user = "user"
    expect(Modal(user, 'SHOW_USER')).toEqual(user)
  })

  it('should handle HIDE_USER', () => {
    expect(Modal(null, 'SHOW_USER')).toEqual(null)
  })

})
