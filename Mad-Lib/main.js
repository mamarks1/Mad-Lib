//Mad Lib Assignment
//Event Liteners
document.getElementById('Button').addEventListener('click', generateFunction);
//Event Functions
function generateFunction() {
    // read the input fields, and save them as variables
    let word1 = document.getElementById('ING').value;
    let word2 = document.getElementById('Plural').value;
    let word3 = document.getElementById('adjective').value;
    let word4 = document.getElementById('Verb').value;
    let word5 = document.getElementById('Noun').value;
    // build a message
    let madlibmessage = '"There are too many ' + word1 + ' ' + word2 + ' on this ' + word3 + ' airplane!", I screamed. "Somebody has to ' + word4 + ' on the ' + word5 + ' to solve this problem!"'

    // output the message
    document.getElementById('madlib-message').innerHTML = madlibmessage
}