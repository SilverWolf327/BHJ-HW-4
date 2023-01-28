const cardDiv = document.querySelector('.card')


const rotator = async (collection) => {

    const rotatorCase = collection.querySelectorAll('.rotator__case');
    
    let caseActiveNumber = [...rotatorCase]
        .findIndex(item => item.classList.contains('rotator__case_active'));
    
    
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    
    function switcher(m) {
        
        let color = rotatorCase[m].getAttribute('data-color');
        
        rotatorCase[caseActiveNumber].classList.remove('rotator__case_active');
        rotatorCase[m].style.color = color;
        rotatorCase[m].classList.add('rotator__case_active');
        caseActiveNumber = m;
    };

    for (let i = 0; i < rotatorCase.length; i++) {
        
        let delay = rotatorCase[i].getAttribute('data-speed')
        await sleep(delay);
        switcher(i);
        
    }
    
    rotator(collection);
};

rotator(cardDiv)