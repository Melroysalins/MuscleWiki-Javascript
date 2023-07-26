let SelectBodyPart= JSON.parse(localStorage.getItem('selectedPart')) || [];








let Containner = document.querySelector('.containner')



let SelectedWorkoutDisplay = () => {
    return (Containner.innerHTML = SelectBodyPart.map((x) => {
      return `
        <div class="heading-div">
          <h4>${x.id}</h4>  
        </div>
    
        <div class="all-exericse-div">
          <div class="grid-div">
            <div class="exercise-1">
              <video loop muted playsinline autoplay>
                <source src="${x.video1}" type="video/mp4">
              </video>
            </div>
    
            <div class="exercise-1">
              <video loop muted playsinline autoplay>
                <source src="${x.video2}" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
    
        <div class="steps-todo-it">
          <ul>
            <li>${x.step1}</li>
            <li>${x.step2}</li>
          </ul>
        </div>
    
        <div class="grid-2-containner">
          <div class="grid-div">
            <div class="exercise-1">
              <video loop muted playsinline autoplay>
                <source src="${x.video3}" type="video/mp4">
              </video>
            </div>
    
            <div class="exercise-1">
              <video loop muted playsinline autoplay>
                <source src="${x.video4}" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
    
        <div class="steps-todo-it">
          <ul>
            <li>${x.step3}</li>
            <li>${x.step4}</li>
          </ul>
        </div>
      `;
    }).join(''));
  };



SelectedWorkoutDisplay()






