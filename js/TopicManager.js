
function TopicManager(){

  var topicManager = {};
  var topics = ["General", "Film", "JS Projects"];
  var currTopic = 0;
  var list = getListForTopic();


  function addTopic(newTopic){
    console.log("TopicManager addTopic called");

    topics.push(newTopic);
    currTopic = topics.length - 1;
  }

  function getListForTopic(){
    //return a list based on current topic
    return List();
  }

  function setTopic(direction){
    console.log("TopicManager setTopic called");

    if (direction === 'prev.topic') {
      currTopic = (currTopic === 0) ? topics.length-1 : currTopic - 1;
    } else {
      currTopic = (currTopic === topics.length-1) ? 0 : currTopic + 1;
    }
  }

  topicManager.init = function () {
    $(document).trigger('omat.topic.update', [topics, currTopic]);
    $(document).on("omat.topic.prev omat.topic.next", function(event){
      setTopic(event.namespace);
      $(document).trigger('omat.topic.changed', [topics[currTopic]]);
      list = getListForTopic();
    });

    $(document).on("omat.topic.add", function(event, newTopic){
      addTopic(newTopic);
      $(document).trigger('omat.topic.changed', [topics[currTopic]]);
    });


    return topicManager;
  }

  return topicManager;
}
