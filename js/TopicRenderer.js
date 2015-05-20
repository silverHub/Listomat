function TopicRenderer(){

  var topicRenderer = {};
  var $topic = $('#topics');
  const $row = $('<li>');

  topicRenderer.topicChange = function topicChange(newText){
    console.log("Renderer.topicChange called");

    $('li.active',$topic).toggleClass('active');
    var selector = ":contains('"+newText+"')";
    $(selector).toggleClass('active');
  }

  topicRenderer.update = function update(topics, current) {

    console.log("Renderer.update called");

    var collection = $();
    topics.forEach(function (value,index) {

      var element = $row.clone().html(value);
      if (index === current) {
        element.addClass('active');
      }
      collection = collection.add(element);
    });
    $topic.append(collection);

  }

  return topicRenderer;
}
