
// Scrolling title

  (function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
      titleScroller(text.substr(1) + text.substr(0, 1));
    }, 300);
  }("Designer's Authority ... Work in progress ... "))


  function showun() {
    document.getElementById("unfolds").style.visibility = "visible";
  }


// Random color

  const getColor = () => {
    return randomColor = Math.floor(Math.random()*16777215).toString(16);
  }

  const setColor = () => {
    getColor();
    document.getElementById("home").style.color = "#" + randomColor;
  }

  setColor();


// Clock
  
  function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var period = "";

    if (hour >= 12) {
      period = "PM";
    } else {
      period = "AM";
    }
    
    if (hour == 0) {
      hour = 12;
    } else {
      if (hour > 12) {
        hour = hour - 12;
      }
    }
    
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    
    document.getElementById("time").innerText = hour + " : " + minute + " : " + second + " " + period;
    
    setTimeout(Time, 1000);
  }
  // Append 0 before time elements if they are less than 10
  function update(t) {
    if (t < 10) {
      return "0" + t;
    } else {
      return t;
    }
  }
  Time();


// Show / Close

    ex = document.getElementById("explore");
    dis = document.getElementById("disorderly");
    unf = document.getElementById("unfolds");

  function show(x) {
    x.style.visibility = "visible";
    x.style.opacity = 1;
  }

  function closeAll() {
    ex.style.opacity = 0;
    dis.style.opacity = 0;
    unf.style.opacity = 0;

    setTimeout(function() {
      ex.style.visibility = "hidden";
      dis.style.visibility = "hidden";
      unf.style.visibility = "hidden";
    }, 1000);

    setTimeout(function() {
      setColor();
    }, 500);
  }


// jQuery repel cursor

  $(function(){

    var mouse = {'x': 0, 'y': 0};

    homex = 0;
    homey = 0;
    forcex = 0;
    forcey = 0;
    magnet = 5000;
    
    $("#explore").bind('mousemove', function(e) {
        mouse = {'x': e.pageX, 'y': e.pageY};
    }); 

    $('#explore p').each(function(index, el){
    $(el).data( "homex", parseInt($(el).position().left));
    $(el).data( "homey", parseInt($(el).position().top));
    });

    $('#explore p').css('position','absolute');
    setInterval(function () {
        $('#explore p').each(function(index, el){
            el = $(el);
            position = el.position();
            x0 = el.offset().left;
            y0 = el.offset().top;
            x1 = mouse.x;
            y1 = mouse.y;
            distancex = x1-x0;
            distancey = y1-y0;

            distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
            
            /*
            magnet = 2600 - distance*20;
            if(distance>130) {
               magnet=0; 
            }
            */
            
            powerx = x0 - (distancex / distance) * magnet / distance;
            powery = y0 - (distancey / distance) * magnet / distance;
            
            forcex = (forcex + (el.data('homex') - x0) / 10) / 2.1;
            forcey = (forcey + (el.data('homey') - y0) / 10) / 2.1;           

            el.css('left', powerx + forcex);
            el.css('top',  powery + forcey);
        });
    }, 15);
  });


// Drawing

  // wait for the content of the window element
  // to load, then performs the operations.
  // This is considered best practice.

  window.addEventListener('DOMContentLoaded', ()=>{      
      resize(); // Resizes the canvas once the window loads
      document.addEventListener('mousedown', penColor);
      document.addEventListener('mouseenter', startPainting);
      document.addEventListener('mouseleave', stopPainting);
      document.addEventListener('mousemove', sketch);
      window.addEventListener('resize', resize);
  });
      
  const canvas = document.querySelector('#canvas');
     
  // Context for the canvas for 2 dimensional operations
  const ctx = canvas.getContext('2d');
      
  // Resizes the canvas to the available size of the window.
  function resize(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }
      
  // Stores the initial position of the cursor
  let coord = {x:0 , y:0}; 
     
  // This is the flag that we are going to use to 
  // trigger drawing
  let paint = false;
      
  // Updates the coordianates of the cursor when 
  // an event e is triggered to the coordinates where 
  // the said event is triggered.
  function getPosition(event){
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
  }
    
  // The following functions toggle the flag to start
  // and stop drawing
  function startPainting(event){
    paint = true;
    getPosition(event);
  }
  function stopPainting(){
    paint = false;
  }

  function penColor(event){
    getColor();
  }
      
  function sketch(event){
    if (!paint) return;
    ctx.beginPath();
      
    ctx.lineWidth = 3;
     
    // Sets the end of the lines drawn
    // to a round shape.
    ctx.lineCap = 'round';
    
    ctx.strokeStyle = "#" + randomColor;
    ctx.lineJoin = "round";
        
    // The cursor to start drawing
    // moves to this coordinate
    ctx.moveTo(coord.x, coord.y);
     
    // The position of the cursor
    // gets updated as we move the
    // mouse around.
    getPosition(event);
     
    // A line is traced from start
    // coordinate to this coordinate
    ctx.lineTo(coord.x , coord.y);
      
    // Draws the line.
    ctx.stroke();
  }


// Random position

  order = document.getElementById("order");
  gather = document.getElementById("gather");
  shaping = document.getElementById("shaping");

  function randomPos(x) {
    x.style.top = (100*Math.random()) + "%";
    x.style.left = (100*Math.random()) + "%";
  }

  function disorder() {
    randomPos(order);
    randomPos(gather);
    randomPos(shaping);
  }

  window.onload = disorder();


// Switch modes

  h = document.getElementById("home");
  w = document.getElementById("process");
  c = document.getElementById("canvas")

  function wip() {
    $("#process").animate({'height': '100vh', 'opacity': '1'}, 1000);
    $("#home").animate({'height':'0'},1000);
    setTimeout(function() {
      h.style.visibility = "hidden";
    }, 400)
  };

  $('#process').on('click', function(e) {
    if (e.target == this){
      $("#process").animate({'height': '0', 'opacity': '0'}, 1000);
      $("#home").animate({'height':'100%'},1000);
      setTimeout(function() {
        h.style.visibility = "visible";
        c.style.opacity = 1;
      }, 600)
    }
  });

