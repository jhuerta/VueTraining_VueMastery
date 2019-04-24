export const namespaced = true

export const state = {
  notifications: []
}

let nexId = 1
export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: nexId++
    })
  },
  DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    )
  }
}

export const actions = {
  addSuccess({ commit }, message) {
    const notification = {
      type: 'success',
      message: message
    }
    commit('PUSH', notification)
  },
  addError({ commit }, message) {
    const notification = {
      type: 'error',
      message: message
    }
    commit('PUSH', notification)
  },
  add({ commit }, notification) {
    commit('PUSH', notification)
  },
  remove({ commit }, notification) {
    commit('DELETE', notification)
  }
}
