
function TopicManager(){

  var topicManager = {};
  var topics = ["General", "Film", "JS Projects"];
  var currTopic = 0;


  topicManager.addTopic = function(){


    renderer.update();
  }

  topicManager.getListForTopic = function(){
    //return a list based on current topic
    return List([
      "General stuff 1",
      "General stuff 2",
      "General stuff 3",
    ]);
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
      $(document).trigger('topic.changed', [topics[currTopic]]);
    });

    return topicManager;
  }

  return topicManager;
}
