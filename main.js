var x
var initialize = function() {
    x = document.getElementById("recipe_url").value;
    console.log(x);
    document.getElementById("saved_link").innerHTML = x;
    return x
};

function show_x() {
    console.log(x);
};




