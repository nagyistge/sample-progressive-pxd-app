// TODO: Lets wait for components to be ready
document.addEventListener('WebComponentsReady', function() {
	if ('addEventListener' in document) {
		document.addEventListener('DOMContentLoaded', function() {
			FastClick.attach(document.body);
		}, false);
	}

	// TODO: Create database instance that connect to the container
	var db = new pxMobile.DB('someDatabase', {
		baseUrl: '/pmapi/cdb/pm'
	});

	// TODO: Lets get issues from the database
	function fetchIssues() {
		db.allDocs({
			limit: 25,
			include_docs: true
		}).then(function(resp) {
			console.log('Got response', resp);
			document.getElementById('testElement').issues = resp.data.rows;
		});
	}
	fetchIssues();

	// TODO: Example list items
	function createDemoList(el, count) {
		var a, li, list;
		list = document.getElementById(el);
		for (var i = 0; i < count; i++) {
			li = document.createElement('li');
			a = document.createElement('a');
			a.attr('onclick', 'myViews.next()')
			a.html('Item ' + i);
			li.appendChild(a);
			list.appendChild(li);
		}
	}

	createDemoList('list1', 150);
	createDemoList('list2', 250);

	console.warn('WebComponentsReady ready');
});
console.warn('main.js loaded');
