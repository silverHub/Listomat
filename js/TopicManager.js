
function TopicManager(){

  var topicManager = {};
  var topics = ["General", "Film", "JS Projects"];
  var currTopic = 0;
  var list = getListForTopic();


  topicManager.addTopic = function(){}

  function getListForTopic(){
    //return a list based on current topic
    return List();
  }

  function setTopic(direction){
    if (direction === 'left') {
      currTopic = (currTopic === 0) ? topics.length-1 : currTopic - 1;
    } else {
      currTopic = (currTopic === topics.length-1) ? 0 : currTopic + 1;
    }
  }

  topicManager.init = function () {
    $(document).trigger('topic.update', [topics, currTopic]);

    $(document).on("key.left key.right", function(event){
      setTopic(event.namespace);
      list = getListForTopic();
      $(document).trigger('topic.changed', [topics[currTopic]]);
    });

    return topicManager;
  }

  return topicManager;
}
