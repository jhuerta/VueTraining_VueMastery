export default {
  functional: true,
  name: 'MyFunctionalComponent',
  render(createElement, context) {
    return createElement('button', 'Click me')
  }
}
