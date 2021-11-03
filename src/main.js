import App from './App.svelte'

let test = 'test commit';
console.log(test);

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
})

export default app
