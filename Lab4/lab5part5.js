  document.addEventListener("DOMContentLoaded", function() {
            const listItems = document.querySelectorAll("#studentsList li");
            listItems.forEach((item, index) => {
                if (index % 2 === 0) {
                    item.style.backgroundColor = "lightblue"
                } else {
                    item.style.backgroundColor = "lightgreen"
                }
            });
        });
        