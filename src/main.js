import App from './App.svelte'

var test = 'test commit';
console.log(test);

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
})

export default app
