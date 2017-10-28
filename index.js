const enduro_quill = function () {}

enduro_quill.prototype.brick_configuration = {
	admin_js_inject: 'inject_quill_to_admin.js',
	default_settings: {
		theme: 'Snow',
		apply_to_all_textareas: false,
	}
}

module.exports = new enduro_quill()
