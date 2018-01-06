// inject quill css into the admin interface
$('head').append('<link href="https://cdn.quilljs.com/1.3.3/quill.snow.css" rel="stylesheet">')
$('head').append('<link href="https://cdn.quilljs.com/1.3.3/quill.bubble.css" rel="stylesheet">')

// * ———————————————————————————————————————————————————————— * //
// *	quill directive
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.compileProvider
	.directive('quill', function () {
		return {
			link: function (scope, element, attr) {
				$.getScript('https://cdn.quilljs.com/1.3.3/quill.js', function () {

					var editor = new Quill(element[0], brick_admin_settings.enduro_quill)

					editor.on('text-change', function(delta, oldDelta, source) {
						scope.context[scope.terminatedkey] = editor.root.innerHTML
					})

					scope.$watch('current_culture', function () {
						editor.root.innerHTML = scope.context[scope.terminatedkey] || ''
					})

					editor.root.innerHTML = scope.context[scope.terminatedkey]
				})
			}
		}
	})
