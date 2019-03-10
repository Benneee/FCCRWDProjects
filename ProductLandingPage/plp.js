    function myFunction() {
            let x = document.getElementById("nav-bar");
            if (x.className === "navbar") {
                x.className += " responsive";
            } else {
                x.className = "navbar";
            }
        }


    window.onscroll = () => {stickyFunc()};
    let navbar = document.getElementById("header");
    let topOfNav = navbar.offsetTop;
    console.log(topOfNav);
    
    function stickyFunc () {
      if (window.pageYOffset >= topOfNav) {
          navbar.classList.add('sticky');
      } else {
          navbar.classList.remove('sticky');
      }
    };