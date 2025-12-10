// part 1 
// using dom 

addEventListener("load", function () {

    // 1-a Find all images in page (default collections)
    var imagesbytagnae = document.getElementsByTagName("img");
    for (let i = 0; i < imagesbytagnae.length; i++) {
        console.log("Image " + (i + 1) + ": " + imagesbytagnae[i].src);
    }
    var imagesbyquery = document.querySelectorAll("img");
    imagesbyquery.forEach((img, index) => {
        console.log("Image (query) " + (index + 1) + ": " + img.src);
    });



    // 1-b Find all options for City drop down list
    let cityOptions = document.getElementsByName("City")[0].getElementsByTagName("option");
    console.log("City Options:");
    for (let i = 0; i < cityOptions.length; i++) {
        console.log(cityOptions[i].value + " - " + cityOptions[i].text);
    }

    // 1-c Find all rows for second table in page
    let rows = document.getElementsByTagName("table")[1].getElementsByTagName("tr");
    console.log("Rows of second table:", rows);

    // 1-d Find all elements that contain class name fontBlue
    let fontBlueEls = document.getElementsByClassName("fontBlue");
    console.log("Elements with fontBlue class:", fontBlueEls);



    // 2-a Get first anchor inside the second table then change its href & text
    let tbl2 = document.getElementsByTagName("table")[1];
    let anc1 = tbl2.getElementsByTagName("a")[0];

    anc1.href = "https://training.com";
    anc1.innerText = "Training";


    // 2-b Find last image and change its borders to solid pink 2px
    let imgs = document.getElementsByTagName("img");

    if (imgs.length > 0) {
        let lastImg = imgs[imgs.length - 1];
        lastImg.style.border = "2px solid pink";
    }


    // 2-c Function to find all checked checkboxes inside UserData form and alter values
    let userForm = document.getElementById("UserData");
    let checkboxes = userForm.querySelectorAll("input[type='checkbox']:checked");

    console.log("Checked Checkboxes:");
    checkboxes.forEach(cb => {
        console.log(cb.value);
        cb.value = "Checked";   
    });


    // 2-d Find element with id "example" then change its background color to pink
    let ex = document.getElementById("example");
    ex.style.backgroundColor = "pink";







});
