var x
var count = 1
var initialize = function() {
    x = document.getElementById("recipe_url").value;
    console.log(x);
    document.getElementById("saved_link").innerHTML = x;
    link_counter();
    console.log(count);
    return x
    
};

function log_x() {
    console.log(x);
};

function link_counter() {
    count += 1;
    return count;
};

/*add function to make new paragraphs*/

function insert_para() {
    /*insert para into log_div/*
}

