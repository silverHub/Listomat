
function TopicManager(){


  var $topic = $('#topics');
  var topicManager = {};

  topicManager.getListForTopic = function(actualTopic){
    return List([
      "General stuff 1",
      "General stuff 2",
      "General stuff 3",
    ]);
  }

  topicManager.init = function () {

    $(document).on("key.left", function(event){
        $topic.find('li.active').toggleClass('active').prev("#topics li").toggleClass('active');
    });

    $(document).on("key.right", function(event){
        $topic.find('li.active').toggleClass('active').next('#topics li').toggleClass('active');
    });
  }

  return topicManager;
}
