function solve() {
    var validator = {};

    validator = {
        validateSelector: function (selector) {
            if (selector == !'string' || selector === undefined || selector === null) {
                throw new Error('The selector parameter is absent or undefined.');
            }
        }
    };

    return function (selector) {
        validator.validateSelector(selector);

        var targetElement;

        if (!(selector instanceof HTMLElement)) {
            targetElement = document.getElementById(selector);
        }

        var classButtonElements = targetElement.querySelectorAll('.button'),
            lengthClassButtonElements = classButtonElements.length;

        function onButtonClick() {
            var clickedButton = this,
                firstContent = this.nextSibling;

            if (!firstContent) {
                return;
            } else if (firstContent.style.display === 'none') {
                firstContent.style.display = '';
                clickedButton.innerHTML = 'hide';
            } else {
                firstContent.style.display = 'none';
                clickedButton.innerHTML = 'show';
            }
        };

        for (var i = 0; i < lengthClassButtonElements; i += 1) {
            classButtonElements[i].innerHTML = 'hide';
            classButtonElements[i].addEventListener('click', onButtonClick, false);
        }
    };
}
module.exports = solve;