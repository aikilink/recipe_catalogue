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
    if (x) {
        var para = document.createElement("p");
        var node = document.createTextNode(x);
        para.appendChild(node);
        var new_element = document.getElementById("log_div");
        new_element.appendChild(para);
    }
    else {
        alert("Please enter something into the text-box. Ty")
    }
}

function reset_fields() {
    var r = confirm("Are you sure you want to clear all data?");
    if (r == true) {
        document.getElementById("saved_link").innerHTML = "*Reference Point*";
        count = 0;
    }
    else {
        console.log("Reset was cancelled");
    }
}
