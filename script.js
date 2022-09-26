
    // Variables
    const canvas = document.getElementById('canvas');
    const c = canvas.getContext('2d');
    const mouse = {
        x: innerWidth / 2,
        y: innerHeight /2
    };
    const colors = [
        '#2185c5',
        '#7ecefd',
        '#fff6e5',
        '#ff7f66'
    ];
    let objects = [];

    // Events
    window.addEventListener('resize', function(){
        resizing();
        init();
    });

    window.addEventListener('mousemove', function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    });

    // Tools
    function randominc(min, max) {
        let randomicNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return randomicNumber;
    };

    class Object {
        constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;

            this.draw = function() {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.fillStyle = this.color;
                c.fill();
                c.closePath();
            };

            this.update = function() {
                this.draw();
            };
        };
    };

    // Functions
    function resizing() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    function init() {
        objects = [];
        for(let i = 0; i < 400; i++) {
            // objects.push();
        };
    };

    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        c.fillText('Canvas Here', mouse.x, mouse.y);
        // objects.forEach(Object => {
        //  Object.update();
        //});
    };

    resizing();
    init();
    animate();

    