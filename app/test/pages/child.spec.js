import { mount, createLocalVue, RouteLinkStub } from '@vue/test-utils'
import ChildPage from '~/pages/child'

const localVue = createLocalVue()

describe('pages/child.vue', () => {
  test('top page link', () => {
    const wrapper = mount(ChildPage, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find(RouterLinkStub).pages().to).toBe('/')
  })
})