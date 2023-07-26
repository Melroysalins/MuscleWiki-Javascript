
let containner = document.querySelector('.containner');







let heading = document.querySelector('.heading-div h4');




let searhbar = document.querySelector('.search-bar input');


async function display () {
    let value = localStorage.getItem('searchedvalue');
    
    heading.textContent = `${value}`;

    const url = `https://musclewiki.p.rapidapi.com/exercises?category=${(value)}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5dadcfa3d7msh936ab7fd41d36a0p1a0bb4jsn234faaa8f997',
		'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();

    

    let updatedArray = result.splice(0, 27)

    console.log(updatedArray)
  
    return containner.innerHTML = (updatedArray.map((x)=>{

    if(x.steps.length > 0 && x.videoURL.length > 1)
    
        return `
        
   

    <div class="all-exericse-div">
        <div class="grid-div">
            <div class="exercise-1">
                <video  loop muted playsinline autoplay >
                 <source src="${x.videoURL[0]}"  type="video/mp4">   
                </video>
            </div>

            <div class="exercise-1">
                <video  loop muted playsinline autoplay >
                 <source src="${x.videoURL[1]}"  type="video/mp4">   
                </video>
            </div>

           

            
            
           
           
        </div>
        
    </div>
    <div class="steps-todo-it">
        <ul>
            <li>${x.steps[0]}.</li>

             <li>${x.steps[1]}.</li>
        </ul>
    </div>`

    }).join(''))
   
    
   

   

    
   
    

   
	
} catch (error) {
	console.error(error);
}
}







//if the user is in selectedworkoutpage only and from there only is his searching for the exercises

function handlesearchedelement (event) {
    
    if(event.keyCode == 13){
        event.preventDefault();

        let inputvalue = event.target.value;
        
       inputvalue = inputvalue[0].toUpperCase() + inputvalue.substr(1);

        console.log(inputvalue)

        if(inputvalue === "Kettlebells" || inputvalue === 'Stretches'  || inputvalue === 'Stretches' || inputvalue === 'Plate'|| inputvalue === 'Cables'
        || inputvalue === 'Band'  || inputvalue === 'Dumbbells' || inputvalue === 'Bodyweight' || inputvalue === 'Machine' ){
            
           
        localStorage.setItem('searchedvalue', inputvalue);
        display()
       
        }
        else{
            return;
        }
    }
}






searhbar.addEventListener('keypress',handlesearchedelement)

display()