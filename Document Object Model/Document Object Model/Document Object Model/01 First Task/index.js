// Write a script that selects all the div nodes that are directly inside other div elements
// -Create a function using querySelectorAll()
// -Create a function using getElementsByTagName()
function selectsDivsWithQuery() {
    var numberOfNestedDivs = document.querySelectorAll('div div');

    alert("The number of nested divs is : " + numberOfNestedDivs.length);
};

function selectNestedDivsWithElementName() {
    var allDivs = document.getElementsByTagName('div');
    var nestedDivs = [];

    for (var i = 0; i < allDivs.length; i++) {
        if (allDivs[i].parentNode instanceof HTMLDivElement) {
            nestedDivs.push(allDivs[i]);
        }
    }

    alert("The number of nested divs is : " + nestedDivs.length);
};
