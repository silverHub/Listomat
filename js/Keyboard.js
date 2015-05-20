function Keyboard() {

/*
	const ALT = 18;
	const CTRL = 17;

	const TAB = 9;
	const DEL = 46;
*/

	var Keyboard = {};
	const EVENT_BUTTON_MAP = {
		//13 : "enter",
		37 : "left",
		38 : "up",
		39 : "right",
		40 : "down"
	};

	const ALT_BUTTON_MAP = {
		84 : "topic.add.new"
	};


	Object.freeze(EVENT_BUTTON_MAP);

	/*const controlKeys = [LEFT, UP, RIGHT, DOWN, ALT, CTRL,ENTER, TAB,DEL];*/


  function translate(event){
		var customEvent = "NOPE";

		if (event.which === 13) {
				if ($(event.target).hasClass('topic')){
					customEvent = 'topic.new.finished';
				}
		}

		if(event.altKey && ALT_BUTTON_MAP[event.which]){
			customEvent = ALT_BUTTON_MAP[event.which];
		}

		if(EVENT_BUTTON_MAP[event.which]){
			customEvent = 'key.' + EVENT_BUTTON_MAP[event.which];
		}

		console.log(event, customEvent);
		return customEvent;
	}

  Keyboard.init = function init() {
		$(document).on("keydown", function keyEventObserver(event) {
			event.stopImmediatePropagation();
			$(document).trigger(translate(event));
		});
	}

	return Keyboard;
}
