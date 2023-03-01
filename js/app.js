
// variables
const btnShowBillionaire = document.getElementById('btn-show-all-billions')
const billionaireContainer = document.getElementById('bili-person-container')


btnShowBillionaire.addEventListener('click', () =>{


})

const loadBillionaire = (limit) => {
    fetch('https://forbes400.onrender.com/api/forbes400?limit=12')
    .then(res => res.json())
    .then(data => displayBillionaire(data))
}

const displayBillionaire = (billionaires) => {
billionaireContainer.classList.remove('hidden')
    billionaires.forEach((value, index) => {
        const {person, countryOfCitizenship, state, city, source, financialAssets } = value
        console.log(value)

       if (index == 6 || index == 9 || index == 11) {
            billionaireContainer.innerHTML += `
            <div class="col-span-2 bg-cyan-800 p-4">
                <h3 class="text-center text-white py-4">${person.name}</h3>
                <div class="grid grid-cols-3 p-1 flex items-center">

                <div class="aspect-w-16 aspect-h-9 flex items-center">
                    <img class="w-9/12 h-4/6" src='${person.squareImage}' alt="" />
                </div>
                
                <div class="info-container text-sm text-white border-l-2 pl-2 col-span-2" >
                    <p><b>Citizenship:</b> <span>${countryOfCitizenship}</span></p>
                    <p><b>State:</b> <span>${state ? state : "State N/A"}</span></p>
                    <p><b>City:</b> <span>${city}</span></p>
                    <p><b>Total Shares:</b> <span>9454645</span></p>
                    <p><b>Shares Price:</b> $<span>9454645</span></p>
                </div>
                </div>
                <p class="text-sm text-white"><b>Source:</b><span>${source}</span></p>
            </div>
            `
        } else {
            billionaireContainer.innerHTML += `
            <div class="bg-cyan-800 p-4">
    
            <h3 class="text-center text-white py-4">${person.name}</h3>
            <div class="grid grid-cols-3 p-1">
                <div class="aspect-w-16 aspect-h-9 flex items-center">
                    <img class="w-11/12 h-3/6" src='${person.squareImage}' alt="" />
                </div>
              <div class="info-container text-sm text-white border-l-2 pl-2 col-span-2" >
                <p><b>Citizenship:</b> <span>${countryOfCitizenship}</span></p>
                <p><b>State:</b> <span>${state ? state : "State N/A"}</span></p>
                <p><b>City:</b> <span>${city}</span></p>
                <p><b>Total Shares:</b> <span>9454645</span></p>
                <p><b>Shares Price:</b> $<span>9454645</span></p>
              </div>
            </div>
            <p class="text-sm text-white"><b>Source:</b> <span>${source}</span></p>
          </div>
            `
        }
    });
}