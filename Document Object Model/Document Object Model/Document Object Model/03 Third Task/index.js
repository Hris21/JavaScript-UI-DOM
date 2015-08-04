// Crеate a function that gets the value of <input type="color"> and sets the background of the body to this value
function ChangeBackgroundViaButton() {
    var colorInput = document.getElementsByTagName('input')[0],
        changeColorButton = document.getElementsByTagName('button')[0];

    color = colorInput.value

    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    };

    changeBackgroundColor(color);
}

