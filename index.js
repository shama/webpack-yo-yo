var yo = require('yo-yo')
var app = require('./app/index.js')

var page = yo`<div class="page">PAGE</div>`

var root = app(page)
document.body.appendChild(root)
