import { getToken, setToken, removeToken } from '@/utils/auth'
import { loginApi, getUserInfoApi } from '@/api/user'
const state = {
  token: getToken(),
  userInfo: {}
}

const mutations = {
  // 设置token
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  // 删除token
  removeToken(state) {
    state.token = null
    removeToken()
  },
  setUser(state, user) {
    state.userInfo = user
  }
}

const actions = {
  async login(context, payload) {
    delete payload.isAgree
    const token = await loginApi(payload)
    context.commit('setToken', token)
  },
  async getUserInfo({ commit }) {
    const res = await getUserInfoApi()
    commit('setUser', res)
  },
  logout(context) {
    context.commit('removeToken')
    context.commit('setUser', {})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
