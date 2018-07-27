/*this is the code relevent to keyframes and CSS animations//*/
Array.from(document.getElementsByClassName('letter')).forEach(letter => {
    letter.addEventListener("mouseover", (e) => {
        letter.classList.add("hovered")
    })
    letter.addEventListener("animationend", (e) => {
        letter.classList.remove("hovered")
    })
})


//___________RANDOM SHAPES 
// This is the P5 JS code--> from here to ------------>
const numShapes = 3
const maxSize = 200

let colors = []
//this runs as soon as the file is loaded, it initializes the HTML canvas
function setup() {
    colors = [
        color(255, 143, 0, 80),
        color(255, 128, 171, 80),
        color(255, 193, 7, 80),
        color(76, 175, 80, 80),
        color(0, 188, 212, 80),
        color(171, 71, 188, 80),
        color(239, 83, 80, 80)
    ]
    createCanvas(window.innerWidth, document.body.offsetHeight)
    noStroke()
}

function randomNumber(size) {
    return Math.floor(Math.random() * size)
}

function randomChoice(choices) {
    let index = randomNumber(choices.length)
    return choices[index]
}
//this function runs when the user clicks anywhere on the canvas
//it runs a couple random number generators to get the size, color and shape
function mouseClicked() {
    let sideLength = randomNumber(maxSize)
    fill(randomChoice(colors))
    let shapeType = randomNumber(numShapes)
    if (shapeType % numShapes == 0) {
        ellipse(mouseX, mouseY, sideLength, sideLength)
    } else if (shapeType % numShapes == 1) {
        rect(mouseX, mouseY, sideLength, sideLength)
    } else {
        triangle(mouseX, mouseY, mouseX + sideLength, mouseY,
            mouseX + (.5 * sideLength), mouseY - sideLength)
    }
}

//to Here  ------------>

//this is the particle js json files
/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 67,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 12
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.49705773886831206,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4.3852169464272635,
                    "opacity_min": 0.43852169464272633,
                    "sync": false
                }
            },
            "size": {
                "value": 0,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 256.54592973848366,
                "color": "#ffffff",
                "opacity": 0.32068241217310456,
                "width": 1.4430708547789706
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 0,
                    "rotateY": 0
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 0,
                    "line_linked": {
                        "opacity": 0.4442177654201152
                    }
                },
                "bubble": {
                    "distance": 414.159378273686,
                    "size": 40,
                    "duration": 0.08120772123013452,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 381.6762897816322,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

);
