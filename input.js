function sayHello() {
    var name = prompt("Hello, what is your name?");
    alert("Hello " + name + "!!!!");
    myFetchFunction();
}

function myFetchFunction() {
    alert("something should happen here...");
    var idk = document.getElementById('unsure');

    fetch('https://courses.cs.washington.edu/courses/cse154/webservices/pizzeria/pizzas.php?mode=text')
        .then(resp => resp.text())
        .then(pizza => console.log(pizza))
        .then(writePizza())
        .catch()
}

function writePizza(data) {
    document.write(data);

}
