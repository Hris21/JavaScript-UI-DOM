/// <reference path="http://localhost:7412/Scripts/jquery-2.1.4.js" />
/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
    var validator = {};

    validator = {
        validateSelector: function (selector) {
            if (selector === null || selector === undefined || typeof (selector) == ! 'string') {
                throw new Error('The selector parameter does not exist or is not a string.');
            }
            if (!($(selector).length)) {
                throw new Error('The selector parameter does not point to anything in the node tree.');
            }
        }
    }
    return function (selector) {
        if (arguments.length === 0) {
            throw new Error('No params are passed in the function.');
        }
        validator.validateSelector(selector);

        var theProvidedElement = $(selector),
            $buttons = theProvidedElement.find('.button').html('hide');

        $buttons.on('click', contentManipulator);

        function contentManipulator() {
            var clickedButton = $(this);
            var firstContent = clickedButton.nextAll('.content:first');

            if (firstContent.length < 1) {
                return;
            } else if (firstContent.css('display') === 'block' || firstContent.css('display') === '') {
                firstContent.css('display', 'none');
                clickedButton.html('show');
            } else {
                firstContent.css('display', '');
                clickedButton.html('hide');
            }
        }
    };
};

module.exports = solve;