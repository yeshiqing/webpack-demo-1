import x from './x.js'
import png1 from './assets/1.png'

let div = document.querySelector('#app')

div.innerHTML = `
    <img src="./${png1}">
`

let button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    let promise_lazy = import('./lazy.js') // 返回一个 promise 对象
    console.log(promise_lazy);
    promise_lazy.then((module) => {
        module.default()
    }, () => {
        console.log('模块加载错误');
    })
}
div.appendChild(button)