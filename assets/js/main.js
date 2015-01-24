var App = App || {};

App.Main = (function() {
  "use strict";

  var X = '',
      Y = '',
      Z = '',

      IS_TOUCH = !! ("ontouchstart" in window),

      // Store cached references to DOM elements
      // that will be used over and over again
      dom = {};

  /**
   * Initialize function
   * @return {void}
   */
  function initialize() {
    // Set up DOM and cache references
    _setupDOM();

    // Add event listeners
    _addEventListeners();
  }

  /**
   * Set up DOM (create?) elements and cache references for future use
   * @return {void}
   */
  function _setupDOM() {
    dom.$body = document.querySelector('body');
  }

  /**
   * Attach event listeners to DOM elements
   */
  function _addEventListeners() {
  }

  /**
   * Event handler for "click" inside body
   * @param  {object} event event object
   * @return {void}
   */
  function _onBodyClicked( event ) {
    alert( 'body is clicked, yo bro!' );
  }

  ////////////////
  // Public API //
  ////////////////

  return {
    initialize: initialize
  };

})();

document.onreadystatechange = function () {
  // Initialize app when document is "ready"
  if (document.readyState == "complete") {
    App.Main.initialize();

    /**
     * Temp function to run on load
     * It will trigger load animations and self-execute
     */
    (function _runOnLoad() {
      document.querySelector('body').classList.add('is-loaded');

      window.setTimeout(
        document.querySelector('.header__loader').style.display = "none", 400);
    })();
  }
}
