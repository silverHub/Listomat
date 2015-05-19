
function List(array) {

	var List = {};
	var internal = [];
	if (array && $.isArray(array)){
		internal = array;
	}

	const $row = $('<li>').attr("tabindex",0);
	const $list = $("#list");
	var focused;

	List.prev = function prev(){
		var f = $list.find("li:focus");
		if (f.length){
			f.prev().focus();
		} else {
			$list.find('li:first').focus();
		}
	}

	List.next = function next(){
		var f = $list.find("li:focus");
		if (f.length){
			f.next().focus();
		} else {
			$list.find('li:first').focus();
		}
	}

	List.add = function add(text){
		if (text) {
			internal.push(text);
		}
	}

	List.render = function(){
		$list.empty();
		internal.forEach(function(value, index){
			$row.clone().html(value).appendTo($list);
		});
	}

	$(document).on("key.enter", function(event){
		$('#searchContainer').hide();
		List.add($('#inputBox').val());
		$('#inputBox').val('');
		List.render();
	});

	$(document).on("key.up", function(event){
		List.prev();
	});

	$(document).on("key.down", function(event){
		List.next();
	});

	$(document).on("text", function(event){
		// put text somewhere.
		$('#searchContainer').show();
		$('#inputBox').focus();
	});

	return List;
}
