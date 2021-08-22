var search = document.getElementById("search");
var searchView = document.getElementById("searchView");

var searchResView = document.createElement("div");
var searchText = document.createElement("p");
searchResView.setAttribute("id", "searchResView");

function searchFunction() {
    var href;
    searchView.appendChild(searchResView);
    searchResView.appendChild(searchText);
    var string = search.value;
    if (!string.localeCompare("")) {
        searchResView.style.display = "none";
    } else {
        // searchResView.style.display = "block";

        var details = [];
        var url = [];
        var categoryName = [];
        var companyName = [];

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var ref = firebase.database().ref("Products/" + user.uid);
                ref.on("value", function(snapshot) {
                    snapshot.forEach(function(dataSnapshot) {
                        dataSnapshot.forEach(function(childSnapshot) {
                            details.push(childSnapshot.val().details);
                            url.push(childSnapshot.val().url);
                            categoryName.push(childSnapshot.val().categoryName);
                            companyName.push(childSnapshot.val().companyName);
                            var text = search.value;

                            details = details.map(function(x) {
                                return x.toUpperCase();
                            });

                            for (var i = 0; i < details.length; i++) {
                                if (details[i].indexOf(text.toUpperCase()) > -1) {
                                    searchResView.style.display = "block";
                                    searchText.innerHTML = details[i];
                                    href = "searchResult.html?search~" + details[i] + "?imageURL~" + url[i] + "~categoryName~" + categoryName[i] + "?companyName~" + companyName[i];

                                }
                            }
                        });
                    });
                });
            }
        });

        searchResView.addEventListener("click", function(event) {

            window.open(href, "_self");
        });


    }
}