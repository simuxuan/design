/**
 * @description 代理模式（函数）
 */
// 函数1（basic）
function toggle (id) {
  fetch(`/toggle/${id}`).then(res => res.json()).then(response => {
    console.log('response', response)
  })
}
// 函数2（代理函数，新功能）
let lazyToggle = (function () {
  let ids = []
  let timer
  return function (id) {
    ids.push(id)
    // 统一发送
    if (!timer) {
      timer = setTimeout(function () {
        toggle(ids.join(','))
        ids = null
        clearTimeout(timer)
        timer = null
      })
    }
  }
})()  