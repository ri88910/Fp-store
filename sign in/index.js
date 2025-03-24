var text = document.getElementById('text');
function logIn() {
    var filename = "j.html";
    var inputElement = document.getElementById("email");
    let value = inputElement.value;
    var form = document.getElementById('form')
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    console.log(value)
    console.log(pattern)
    let n = value.match(pattern)
    console.log(n)


    if (value.match(pattern)) {
        //window.location.href = filename;
        text.innerHTML = 'True';

    } else {
        console.log('no');
        text.innerHTML = 'Make sure that your email is true';
    }
}
