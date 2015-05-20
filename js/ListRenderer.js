
function ListRenderer() {

  const $row = $('<li>').attr("tabindex",0);
	const $list = $("#list");

  function render(internal){
    console.log("ListRenderer render called");
    $list.empty();
    $coll = $();

    internal.forEach(function(value, index){
      $coll = $coll.add($row.clone().html(value));
    });
    $list.append($coll);
  }

  function prev(){
    var f = $list.find("li:focus");
    if (f.length){
      f.prev().focus();
    } else {
      $list.find('li:first').focus();
    }
  }

  function next(){
    var f = $list.find("li:focus");
    if (f.length){
      f.next().focus();
    } else {
      $list.find('li:first').focus();
    }
  }

  $(document).on("list.update", function(event, internal){
    render(internal);
  });

  $(document).on("key.up", function(event){
    prev();
  });

  $(document).on("key.down", function(event){
    next();
  });

  $(document).on("text", function(event){
    // put text somewhere.
    $('#searchContainer').show();
    $('#inputBox').focus();
  });

};
