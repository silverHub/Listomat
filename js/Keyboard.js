function Keyboard() {

	/*
	const ALT = 18;
	const CTRL = 17;
	const TAB = 9;
	const DEL = 46;
	*/

	var Keyboard = {};

	const ENTER = 13;
	const EVENT_BUTTON_MAP = {
		37 : "omat.topic.prev",
		38 : "omat.list.prev",
		39 : "omat.topic.next",
		40 : "omat.list.next"
	};


 // TOPIC events
 // omat.topic.edit.new.start
 // omat.topic.edit.new.finished
 // omat.topic.add

	const ALT_BUTTON_MAP = {
	/*T*/	84 : "omat.topic.edit.new.started",
	/*L*/ 76 : "omat.list.edit.new.started"
	};


	Object.freeze(EVENT_BUTTON_MAP);
	//Object.freeze(ALT_BUTTON_MAP);


	function handleEnters(event){
		if ($(event.target).hasClass('topic')){
			return 'omat.topic.edit.new.finished';
		}

		if ($(event.target).hasClass('list')){
			return 'omat.list.edit.new.finished';
		}
	}


  function handleNavigation(event) {
		return EVENT_BUTTON_MAP[event.which];
	}

	function translate(event){
		var customEvent = '';

		if (event.which === ENTER) {
			customEvent = handleEnters(event);
		}

		if(event.altKey && ALT_BUTTON_MAP[event.which]){
			customEvent = ALT_BUTTON_MAP[event.which];
		}

		if(EVENT_BUTTON_MAP[event.which]){
			customEvent = EVENT_BUTTON_MAP[event.which];
		}

		console.log(event, customEvent);
		return customEvent;
	}


	Keyboard.init = function init() {


		$(document).on("keydown", function translateToCustomEvents(event) {
			event.stopImmediatePropagation();

			var customEvent = translate(event);
			if (customEvent){
				$(document).trigger(customEvent);
			}
		});



    // var customEvents = [
		// 	"omat.topic.prev",
		// 	"omat.topic.prev",
		// 	"omat.list.prev",
		// 	"omat.topic.next",
		// 	"omat.list.next",
		// 	"omat.topic.edit.start",
		// 	"omat.topic.edit.finished",
		// 	"omat.topic.add"
		// ]
		// $(document).on(customEvents.join(' '), function test(event) {
		// 	console.log("TESTLOG:", arguments);
		// });


	}

	return Keyboard;
}
