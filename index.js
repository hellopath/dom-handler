
var select = require('dom-select')
var classes = require('dom-classes')
var event = require('dom-event')
var size = require('element-size')
var tree = require('dom-tree')
var style = require('dom-style')
var ready = require('./libs/ready')
var isDom = require('is-dom')

event.ready = ready

module.exports = {
	select: select,
	classes: classes,
	event: event,
	size: size,
	style: style,
	tree: tree,
	isDom: isDom
}