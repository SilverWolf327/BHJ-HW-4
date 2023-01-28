const revealItems = document.querySelectorAll('.reveal');

for (let i =0; i < revealItems.length; i++) {

    let windowHalfHeight = document.documentElement.clientHeight / 2;

    window.addEventListener('scroll', function() {
   
        let coords = revealItems[i].getBoundingClientRect();
        
        if ((Math.round(this.scrollY) > (Math.round(coords.top + this.scrollY - windowHalfHeight)))) {

            revealItems[i].classList.add('reveal_active');
            
        };
    });
}