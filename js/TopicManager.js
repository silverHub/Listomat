
function TopicManager(){

  var topicManager = {};
  var renderer = TopicRenderer();

  var topics = ["General", "Film", "JS Projects"];
  var currTopic = 0;


  topicManager.addTopic = function(){}

  topicManager.getListForTopic = function(){
    //return a list based on current topic
    return List([
      "General stuff 1",
      "General stuff 2",
      "General stuff 3",
    ]);
  }


  topicManager.init = function () {

    renderer.update(topics, currTopic);

    $(document).on("key.left", function(event){
      console.log('left');
      currTopic = (currTopic === 0) ? topics.length-1 : currTopic-1;
      renderer.topicChange(topics[currTopic]);
    });

    $(document).on("key.right", function(event){
      console.log('right');
      currTopic = (currTopic === topics.length-1) ? 0 : currTopic+1;
      renderer.topicChange(topics[currTopic]);
    });
  }

  return topicManager;
}
