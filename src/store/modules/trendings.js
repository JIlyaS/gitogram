import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    trendings: [],
    loading: false,
    error: '',

    readmeHTML: [],
    errorReadme: ''

    // issues: [],
    // errorIssues: ''
  },
  getters: {
    getRepoById: (state) => (id) => state.trendings.find(item => item.id === id)
  },
  mutations: {
    FETCH_TRENDINGS (state, payload) {
      state.loading = payload
    },
    SET_TRENDINGS_DATA (state, payload) {
      state.trendings = payload.map((item) => {
        item.following = {
          status: false,
          loading: false,
          error: ''
        }
        return item
      })
    },
    SET_TRENDINGS_ERROR (state, payload) {
      state.error = payload
    },
    FETCH_README (state, payload) {
      state.loadingReadme = payload
    },
    SET_README_DATA (state, payload) {
      state.trendings = state.trendings.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
      state.readmeHTML = payload
    },
    SET_README_ERROR (state, payload) {
      state.errorReadme = payload
    },
    SET_FOLLOWING (state, payload) {
      state.trendings = state.trendings.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.data
          }
        }
        return repo
      })
    }
    // FETCH_ISSUES (state, payload) {
    //   state.loadingIssues = payload
    // },
    // SET_ISSUES_DATA (state, payload) {
    //   state.issues = payload
    // },
    // SET_ISSUES_ERROR (state, payload) {
    //   state.errorIssues = payload
    // }
  },
  actions: {
    async fetchTrendings ({ commit }) {
      commit('FETCH_TRENDINGS', true)
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS_DATA', data.items)
      } catch (error) {
        commit('SET_TRENDINGS_ERROR', 'Не удалось получить список репозиториев')
        console.error(error)
      } finally {
        commit('FETCH_TRENDINGS', false)
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README_DATA', { id, content: data })
      } catch (error) {
        commit('SET_README_ERROR', 'Не удалось получить контент репозитория')
        console.error(error)
      }
    },
    // async fetchIssues ({ commit, getters }, id) {
    //   const { name: repo, owner } = getters.getRepoById(id)
    //   try {
    //     const { data } = await api.trendings.getIssues({ owner: owner.login, repo })
    //     commit('SET_ISSUES_DATA', data)
    //   } catch (error) {
    //     commit('SET_ISSUES_ERROR', 'Не удалось получить комментарии пользователей')
    //     console.error(error)
    //   }
    // },
    async starRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      commit('SET_FOLLOWING', {
        id,
        data: {
          status: false,
          loading: true,
          error: ''
        }
      })

      try {
        await api.starred.starRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: true
          }
        })
      } catch (err) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false,
            error: 'Error has happened'
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    },

    async unStarRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)

      commit('SET_FOLLOWING', {
        id,
        data: {
          status: false,
          loading: true,
          error: ''
        }
      })

      try {
        await api.starred.unStarRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: true
          }
        })
      } catch (err) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false,
            error: 'Error has happened'
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    }
  }
}
