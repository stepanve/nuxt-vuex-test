// const Vuex = require('vuex')
// const index = require('../../app/store')
// const { createLocalVue } = require('@vue/test-utils')
// const cloneDeep = require('lodash.clonedeep')

import Vuex from('vuex')
import index from('../../app/store')
import { createLocalVue } from('@vue/test-utils')
import cloneDeep from('lodash.clonedeep')

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/index.js', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(index))
  })

  describe('mutations', () => {
    test('increment', () => {
      expect(store.getters['count'].toBe(0))
      store.commit('increment')
      expect(store.getters['count'].toBe(1))
    })
  })

  describe('actions', () => {
    test('increment', () => {
      expect(store.getters['count'].toBe(0))
      store.dispatch('increment')
      expect(store.getters['count']).toBe(0)
    })
  })
})
