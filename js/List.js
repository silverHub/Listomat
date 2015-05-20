
function List() {

	var List = {};
	var internal = [
		"General stuff 1",
		"General stuff 2",
		"General stuff 3",
	] || [];


	List.add = function add(text){
		console.log('List.add called', text);
		if (text) {
			internal.push(text);
			$(document).trigger('list.update', [internal]);
		}
	}


	$(document).trigger('list.update', [internal]);

	$(document).on("key.enter", function(event){
		$('#searchContainer').hide();
		List.add($('#inputBox').val());
		$('#inputBox').val('');
	});

	return List;
}
