
function ListRenderer() {

  const $row = $('<li>').attr("tabindex",0);
  const $editableRow = $('<li><input type="text" class="list edit new"></li>').attr("tabindex",0);
	const $list = $("#list");


  function editNewStarted(){
    console.log("ListRenderer editNewStarted called");

    $list.prepend($editableRow.clone()).find('.edit').focus();
  }

  function editNewFinished(){
    var $input = $list.find('.edit');
    var elementContent = $input.val();
    $input.parent().html(elementContent).end().remove();
    return elementContent;
  }

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

  $(document).on("omat.list.render", function(event, internal){
    render(internal);
  });

  $(document).on("omat.list.prev", function(event){
    prev();
  });

  $(document).on("omat.list.next", function(event){
    next();
  });

  $(document).on("omat.list.edit.new.started", function(event){
    editNewStarted();
  });
  $(document).on("omat.list.edit.new.finished", function(event){
    var element = editNewFinished();
    $(document).trigger('omat.list.add', [element]);
  });

};
