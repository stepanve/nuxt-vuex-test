import AppToggleButton from '~/components/AppToggleButton.vue'
import { mount } from '@vue/test-utils'

describe('AppToggleButton.vue', () => {
  let wrapper

  beforeEach(()=> {
    wrapper = null

    wrapper = mount(AppToggleButton)
  })

  test('default off', () => {
    expect(wrapper.find('p').text()).toBe('off')
  })

  test('click on', () => {
    wrapper.find('button').trigger('click')

    expect(wrapper.find('p').text()).toBe('on')
  })
})