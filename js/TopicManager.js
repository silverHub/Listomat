
function TopicManager(){

  var topicManager = {};
  var topics = ["General", "Film", "JS Projects"];
  var currTopic = 0;
  var list = getListForTopic();


  function update(){
    $(document).trigger('topic.update', [topics, currTopic]);
  }


  function addTopic(newTopic){
    console.log("TopicManager addTopic called");

    topics.push(newTopic);
    currTopic = topics.length - 1;
    update();
  }

  function getListForTopic(){
    //return a list based on current topic
    return List();
  }

  function setTopic(direction){
    console.log("TopicManager setTopic called");

    if (direction === 'left') {
      currTopic = (currTopic === 0) ? topics.length-1 : currTopic - 1;
    } else {
      currTopic = (currTopic === topics.length-1) ? 0 : currTopic + 1;
    }
  }

  topicManager.init = function () {
    update();
    $(document).on("key.left key.right", function(event){
      setTopic(event.namespace);
      $(document).trigger('topic.changed', [topics[currTopic]]);
      list = getListForTopic();
    });

    $(document).on("topic.ready", function(event, newTopic){
      addTopic(newTopic);
    });


    return topicManager;
  }

  return topicManager;
}
