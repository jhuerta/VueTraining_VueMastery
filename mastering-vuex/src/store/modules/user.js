export const state = {
  user: {
    id: '123456',
    name: 'Juan Huerta'
  }
}

export const actions = {
  userJustForTest() {
    return 'User action: Just for test'
  }
}

export const getters = {
  userGetter() {
    return 'This is a getter in the user'
  },
  commonNameGetter() {
    return 'This is a getter in the **** user ****'
  }
}
