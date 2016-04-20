var yo = require('yo-yo')

module.exports = function (page) {
  return yo`<div class="app">
    <h1>Hello</h1>
    ${page}
  </div>`
}
