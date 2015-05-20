function Keyboard() {

/*
	const ALT = 18;
	const CTRL = 17;

	const TAB = 9;
	const DEL = 46;
*/

	var Keyboard = {};
	const EVENT_BUTTON_MAP = {
		13 : "enter",
		37 : "left",
		38 : "up",
		39 : "right",
		40 : "down"
	};
	Object.freeze(EVENT_BUTTON_MAP);

	/*const controlKeys = [LEFT, UP, RIGHT, DOWN, ALT, CTRL,ENTER, TAB,DEL];*/

  Keyboard.init = function init() {
		var customEvent;
		$(document).on("keydown", function keyEventObserver(event) {

		 if(EVENT_BUTTON_MAP[event.which]){
				customEvent = 'key.' + EVENT_BUTTON_MAP[event.which];
			} else {
				customEvent = 'text';
			}
			//console.log(event.which,customEvent,Object.keys(EVENT_BUTTON_MAP));
			$(document).trigger(customEvent);
		});
	}

	return Keyboard;
}
