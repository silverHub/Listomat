function TopicRenderer(){

  var topicRenderer = {};
  var $topic = $('#topics');
  const $row = $('<li>');
  const $editableRow = $('<li><input type="text" class="topic edit new"></li>');

  topicRenderer.editNewFinished = function topicNewFinished(){
    console.log("TopicRenderer.editNewFinished called");

    var $input = $topic.find('.edit');
    var topicName = $input.val();
    $input.parent().html(topicName).end().remove();
    return topicName;
  }

  topicRenderer.editNewStarted = function addTopic(){
    console.log("TopicRenderer.editNewStarted called");

    $topic.append($editableRow.clone()).find('.edit').focus();
  }

  topicRenderer.topicChange = function topicChange(newText){
    console.log("TopicRenderer.topicChange called", newText);

    $('li.active',$topic).toggleClass('active');
    var selector = ":contains('"+newText+"')";
    $(selector).toggleClass('active');
  }

  topicRenderer.update = function update(topics, current) {
    console.log("TopicRenderer.update called", arguments);

    var collection = $();
    topics.forEach(function (value,index) {

      var element = $row.clone().html(value);
      if (index === current) {
        element.addClass('active');
      }
      collection = collection.add(element);
    });
    $topic.empty().append(collection);

  }

  topicRenderer.init = function init(){

    $(document).on("omat.topic.update", function(event, topics, current){
      topicRenderer.update(topics, current);
    });

    $(document).on("omat.topic.changed", function(event, newTopic){
      topicRenderer.topicChange(newTopic);
    });

    $(document).on("omat.topic.edit.new.started", function(event){
      topicRenderer.editNewStarted();
    });

    $(document).on('omat.topic.edit.new.finished',  function(event){
      var topicName = topicRenderer.editNewFinished();
      $(document).trigger("omat.topic.add", topicName);
    });


  }

  return topicRenderer;
}
