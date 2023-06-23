// 默认值适配
function ajax (options) {
  let _default = {
    method: 'GET',
    dataType: 'json'
  }
  for (let attr in options) {
    _default[attr] = options[attr] || _default[attr]
  }
}

function get (url) {
  let options = { method: 'GET', url }
  ajax(options)
}