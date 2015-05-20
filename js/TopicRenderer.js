function TopicRenderer(){

  var topicRenderer = {};
  var $topic = $('#topics');
  const $row = $('<li>');
  const $editableRow = $('<li><input type="text" class="topic edit"></li>');

  topicRenderer.topicNewFinished = function topicNewFinished(){
    console.log("TopicRenderer.topicNewFinished called");

    var topicName = $topic.find('.edit').val();
    $(document).trigger("topic.ready", topicName);
    $topic.find('.edit').remove();
  }

  topicRenderer.addTopic = function addTopic(){
    console.log("TopicRenderer.addTopic called");

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

    $(document).on("topic.update", function(event, topics, current){
      topicRenderer.update(topics, current);
    });

    $(document).on("topic.changed", function(event, newTopic){
      topicRenderer.topicChange(newTopic);
    });

    $(document).on("topic.add.new", function(event){
      topicRenderer.addTopic();
    });

    $(document).on('topic.new.finished',  function(event){
      topicRenderer.topicNewFinished();
    });


  }

  return topicRenderer;
}
