import App from './App.svelte'

let test = "3";
console.log(test);

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
})

export default app
