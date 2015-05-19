
(function(){

// modules
 	var keyboardManager = Keyboard();
  var topicManager = TopicManager();

  topicManager.init();
  topicManager.getListForTopic().render();
  keyboardManager.init();

})();
