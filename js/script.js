const SUPER_SECRET_API_KEY_HARD_CODED_IN_PLAINTEXT_DO_NOT_UNDER_ANY_CIRCUMSTANCES_INCLUDE_IN_PRODUCTION_BECAUSE_OF_OBVIOUS_SECURITY_RISKS = "aJGerkgGiWqtI9Er2K1C6J26QB3QoHWI"

registerButtons()

function registerButtons() {
    let button = document.querySelector("#fetch-gif-btn")
    button.addEventListener("click", () => {
        let gifOutput = document.querySelector("#gif-container")
        let search = document.querySelector("#search-input").value
        if(search !== "") {
            gifOutput.innerHTML = "Loading..."
            //Professor said to use hard coded API key just this once
            let endPoint = `https://api.giphy.com/v1/gifs/search?api_key=${SUPER_SECRET_API_KEY_HARD_CODED_IN_PLAINTEXT_DO_NOT_UNDER_ANY_CIRCUMSTANCES_INCLUDE_IN_PRODUCTION_BECAUSE_OF_OBVIOUS_SECURITY_RISKS}&q=${search}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
            fetch(endPoint).then(async data => {
                let gifs = await data.json()

                gifOutput.innerHTML= ""
                for(let gif of gifs.data) {
                    gifOutput.innerHTML += `<iframe src=${gif.embed_url} class = "col-3 mb-3">`
                }

            })
        }else {
            window.alert("Please enter a search parameter")
        }

    })
}