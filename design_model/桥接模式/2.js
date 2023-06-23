// 原来的
function getUserById (event) {
  let id = this.dataset.id
  let xhr = new XMLHttpRequest
  xhr.open('GET', `/user/${id}`, true)
  xhr.responseType = 'json'
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == 200) {
      let user = xhr.response
      document.getElementById('content').innerHTML = user.name
    }
  }
  xhr.send()
}
// 桥函数，统一
function addBridage () {
  let id = this.dataset.id
  getUserById(id, function (user) {
    document.getElementById('content').innerHTML = user.name
  })
}
// 改进后，分离变化 this，dom操作
function getUserById (id, callback) {
  let xhr = new XMLHttpRequest
  xhr.open('GET', `/user/${id}`, true)
  xhr.responseType = 'json'
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == 200) {
      let user = xhr.response
      callback(user)
    }
  }
  xhr.send()
}