import moment from '~/plugins/moment'

export const state = () => ({
  isLoggedIn: false,
  user: state => (state.user ? Object.assign({ likes: [] }, state.user) : null)
})

export const getters = {
  isLoggedIn: state => state.isLoggedIn,
  user: state => state.user
}

export const mutations = {
  setUser(state, { user }) {
    state.user = user
    state.user.isLoggedIn = true
  }
}

export const actions = {
  async login({ commit }, { id }) {
    const user = await this.$axios.$get(`/users/${id}.json`)
    if (!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  },
  async registerDecorator({ commit }, { id }) {
    const payload = {}
    payload[id] = { id }
    await this.$axios.$patch(`/users.json`, payload)
    const user = await this.$axios.$get(`/users/${id}.json`)
    if (!user.id) throw new Error('Invalid user')
    commit('setUser, { user }')
  },
  async addLikeLogToUser({ commit }, { user, post }) {
    user.likes.push({
      createdAt: moment().format(),
      userId: user.id,
      postId: post.id
    })
    const newUser = await this.$axios.$put(`/users/${user.id}`.json, user)
    commit('setUser', { user: newUser })
  }
}
