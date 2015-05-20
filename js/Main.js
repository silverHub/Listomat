
(function(){

  // modules
  TopicRenderer().init();
 	Keyboard().init();
  var topicManager = TopicManager().init();
  topicManager.getListForTopic().render();
})();
