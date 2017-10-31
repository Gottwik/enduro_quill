// inject quill css into the admin interface
$('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.quilljs.com/1.0.0/quill.core.css">')

// inject quill js into the admin interface
$('head').append('<script src="https://cdn.quilljs.com/1.0.0/quill.min.js"></script>')

// * ———————————————————————————————————————————————————————— * //
// *	quill directive
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.compileProvider
	.directive('quilld', function () {
		return {
			link: function (scope, element, attr) {
				$.getScript('https://cdn.quilljs.com/1.0.0/quill.core.js', function () {

					var editor = new Quill(element[0], {
						modules: { toolbar: '#toolbar' },
						theme: 'snow'
					});

					editor.on('text-change', function(delta, oldDelta, source) {
						console.log(delta);
					});

					// var current_content = window.pell.init({
					// 	element: element[0],
					// 	onChange: function (html) {
					// 		scope.context[scope.terminatedkey] = html
					// 	}
					// })

					// scope.$watch('current_culture', function () {
					// 	current_content.content.innerHTML = scope.context[scope.terminatedkey] || ''
					// })

					// current_content.content.innerHTML = scope.context[scope.terminatedkey]
				})
			}
		}
	})
