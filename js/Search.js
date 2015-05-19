var InputBox = (function() {
	var expose = {};

	expose.init = function init() {
		this.$input = $("#inputBox");
	}

	expose.focus = function focus(){
		this.$input.focus();
	}

	expose.content = function content(){
		return this.$input.val();
	}

	expose.empty = function empty(){
		this.$input.val("");
	}

	return expose;
})();
