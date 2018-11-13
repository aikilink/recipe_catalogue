var x
var count = 0
var initialize = function() {
    x = document.getElementById("recipe_url").value;
    console.log(x);
    document.getElementById("saved_link").innerHTML = x;
    link_counter();
    console.log(count);
    insert_para();
    return x
};

// function log_x() {
//     console.log(x);
// };

//link_counter function doesn't do anything aside from incrementing var count, and logging count
function link_counter() {
    count += 1;
    return count;
};

function insert_para() {
    var para = document.createElement("p");
    var node = document.createTextNode(x);
    para.appendChild(node);
    var new_element = document.getElementById("log_div");
    new_element.appendChild(para);
}

