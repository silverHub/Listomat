
function List() {

	var List = {};
	var internal = [
		"General stuff 1",
		"General stuff 2",
		"General stuff 3",
	] || [];


	List.add = function add(text){
		console.log('List.add called', text);
		internal.push(text);
	}

	$(document).trigger('omat.list.render', [internal]);


	$(document).on("omat.list.add", function(event, newElement){
		List.add(newElement);
	});

	return List;
}
