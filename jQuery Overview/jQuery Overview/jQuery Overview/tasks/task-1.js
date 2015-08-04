/// <reference path="http://localhost:7412/Scripts/jquery-2.1.4.js" />

/* 

Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:   
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, [] 
*/

function solve() {
    var validator = {};

    validator = {
        validateCountParameter: function (count) {
            if (count === 'undefined' || isNaN(Number(count)) || count < 1) {
                throw new Error('The count parameter is missing or not convertible to Number');
            }
        },

        validateSelectorParameter: function (selector) {
            if (typeof selector !== 'string') {
                throw new Error('The selector parameter is not a string.');
            }
        }
    };

    return function (selector, count) {
        validator.validateCountParameter(count);
        validator.validateSelectorParameter(selector);

        if (selector === '') {
            return this;
        }

        var targetElement = $(selector),
            uList = $('<ul />').addClass('items-list'),
            li,
            index = 0;

        for (index = 0; index < count; index += 1) {
            li = $('<li />').addClass('list-item').text('List item #' + index);

            li.appendTo(uList);
        }

        uList.appendTo(targetElement);
    };
};

module.exports = solve;