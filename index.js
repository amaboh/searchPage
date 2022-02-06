document.getElementById("searchInput").addEventListener("keyup", function(event){
    let userInput = event.target.value.toLowerCase();
    let dataArray = document.getElementsByClassName("name");

    for(let i=0; i < dataArray.length; i++){
        const presidentName = dataArray[i].textContent.toLowerCase();

        if(presidentName.includes(userInput)){
            dataArray[i].style.display = "block";
        } else{
            dataArray[i].style.display = "none";
        }
    }
    })