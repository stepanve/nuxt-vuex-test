import { mount } from '@test/utils'
import AppButton from '~/components/AppButton.vue'

describe('components/AppButton.vue', () => {
  test('match snapshot(unclicked)', () => {
    const wrapper = mount(AppButton)
    expect(wrapper.element).toMatchSnapShot()
  })
  test('match snapshot(clicked)', () => {
    const wrapper = mount(AppButton)
    wrapper.find('button').trigger('click')
    expect(wrapper.element).toMatchSnapShot()
  })
})