addEventListener("load", function () {

    // selectors 
    prevbtn = document.querySelector("#prev")
    nextbtn = document.querySelector("#next")
    slideshadow = document.querySelector("#slideshadow")
    stoppt = document.querySelector("#stop")

    imgobj = document.getElementsByTagName("img")[0]
    counter = 1;
 
    var internalid = null;

    // Next Button
    nextbtn.addEventListener("click", function () {
        counter++;
        if (counter == 7)
            counter = 1
        imgobj.src = `/Lab4/assets/assets/Images/${counter}.png`
    })

    // Prev Button
    prevbtn.addEventListener("click", function () {
        counter--;
        if (counter == 0)
            counter = 6
        imgobj.src = `/Lab4/assets/assets/Images/${counter}.png`
    })

    slideshadow.addEventListener("click", function () {

        if (internalid == null) {
            internalid = setInterval(function () {
                counter++;
                if (counter == 7)
                    counter = 1
                imgobj.src = `/Lab4/assets/assets/Images/${counter}.png`
            }, 1000)
        }

    })

    // Stop
    stoppt.addEventListener("click", function () {
        clearInterval(internalid)
        internalid = null
    })
})
