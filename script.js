function app() {
    var openHamburger = document.querySelector("#close-hamburger")
    var closeHamburger = document.querySelector("#open-hamburger")
    var currentRoute = window.location.pathname

    var date = document.getElementById("date")
    var time = document.getElementById("time")
    var staffName = document.getElementById("staffName")
    var clientName = document.getElementById("clientsName")
    var typeOfIncident = document.getElementById("typeOfIncident")
    var description = document.getElementById("description")

    // -----YOU MIGHT NEED THIS FOR YOUR BACKEND STUFF, IF NOT.. DELETE IT
    
    // var dataRow = document.getElementById("dataRow")
    // var timeRow = document.getElementById("timeRow")
    // var staffNameRow = document.getElementById("staffNameRow")
    // var clientNameRow = document.getElementById("clientsNameRow")
    // var typeOfIncidentRow = document.getElementById("typeOfIncidentRow")
    // var descriptionRow = document.getElementById("descriptionRow")

    // date = date.value
    // time = time.value
    var submitButton = document.querySelector("#btn")

    // var navlinks = document.querySelectorAll(".navlink")

    // console.log(currentRoute)

    // for( i = 0; i < navlinks.length; i++){
    //     var linkRoute = navlinks[i].getAttribute("id")

    //     console.log(linkRoute)
    // }



    openHamburger.addEventListener("click", ()=>{
        document.querySelector(".mobile-nav").classList.add("show-mobilenav")

        console.log("working")
    })

    closeHamburger.addEventListener("click", ()=>{
        document.querySelector(".mobile-nav").classList.remove("show-mobilenav")

        console.log("working")
    })    

    submitButton.addEventListener("click", (e)=>{
        e.preventDefault()

        if (!date.value || !time.value || !staffName.value || !clientName || !typeOfIncident || !description.value){
            console.log("empty")
        }else{
            window.location.pathname = "/table.htm"
        }
    })
}

app()

//  ||   