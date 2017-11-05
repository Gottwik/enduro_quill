const enduro_quill = function () {}

// we inject quill custom control by injecting admin_js_inject
enduro_quill.prototype.brick_configuration = {
	admin_js_inject: 'inject_quill_to_admin.js',
	default_settings: {}
}

// cms_context_processor changes each cms context just before page render
// we use this to add custom control path to all quill controls
enduro.api.brick_processors.add_processor('cms_context_processor', function (cms_context) {
	return new Promise(function (resolve, reject) {
		enduro.api.context_modifiers.add_sibling_to_type(cms_context, 'quill', 'control_path', '/brick/enduro_quill/quill_control')
		resolve(cms_context)
	})
})

module.exports = new enduro_quill()
