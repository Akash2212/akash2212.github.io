var search = document.getElementById("search");
var searchView = document.getElementById("searchView");

var searchResView = document.createElement("div");
var searchText = document.createElement("p");
searchResView.setAttribute("id", "searchResView");

function searchFunction() {
    searchView.appendChild(searchResView);
    searchResView.appendChild(searchText);
    var string = search.value;
    if (!string.localeCompare("")) {
        searchResView.style.display = "none";
    } else {
        searchResView.style.display = "block";
        searchText.innerHTML = search.value;
    }
}

searchResView.addEventListener("click", function(event) {
    window.open("searchResult.html", "_self");
});





var productsListContainer = document.getElementById("productsListContainer");


for (var i = 0; i < 5; i++) {

    var companyName = document.createElement("p");
    companyName.innerHTML = "Hello Akash";
    var productImagesContainer = document.createElement("div");

    companyName.setAttribute("id", "companyName");
    productImagesContainer.setAttribute("id", "productImagesContainer");

    for (var j = 0; j < 15; j++) {
        var div = document.createElement("div");
        var productImages = document.createElement("img");

        productImages.setAttribute("class", "productImages");
        productImages.src = "../Images/logo.png";

        div.appendChild(productImages);
        productImagesContainer.appendChild(div);
    }

    productsListContainer.appendChild(companyName);
    productsListContainer.appendChild(productImagesContainer);


}