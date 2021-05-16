$(()=>{
    const RenderPage_URL = $.get("https://api.spacexdata.com/v3/launches?limit=100", (res, err)=>{
        
    })
    const LaunchSuccess_URL = $.get("https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true", (res, err)=>{
        return res
    })
    const LaunchANDLandSuccess_URL = $.get("https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true", (res, err)=>{
        return res
    })
    const ALL_URL = $.get("https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014", (res, err)=>{
        return res
    })

    function createCard(obj){
        let stringTemplate = 
        `
            <div class="cards">
                <div class="imageContainer">
                    <img src=${obj.image} alt=""/>
                </div>
                <div class="description">
                    <p class="cardTitle">${obj.mission_name}</p>
                    <p>Mission Ids: <span>${obj.mission_id}</span></p>
                    <p>Launch Year: <span>${obj.launch_year}</span></p>
                    <p>Successful Lauch: <span>${obj.succes_launch}</span></p>
                    <p>Successful Landing: <span>Success</span></p>
                </div>
            </div>
        `
        return stringTemplate
    }

    // $('button').click((e)=>{
    //     let year = e.target.value;
    //     $('#CardsDiv').innerHTML = "";
    //     let data = ALL_URL.filter(item=>{
    //         return item.launch_year === year;
    //     })  
    //     $('#CardsDiv').append(data.map(item=>{
    //         return createCard(item)
    //     }))
    // })

    function display(year){
        console.log(year)
        $('#CardsDiv').innerHTML = "";
        console.log(RenderPage_URL)
        let data = RenderPage_URL.filter(item=>{
            console.log(item)
            return item.launch_year === year;
        })  
        $('#CardsDiv').append(data.map(item=>{
            return createCard(item)
        }))
    }

    display(2016);
})