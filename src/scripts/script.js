
// Name and About

  function aboutMe() {
    const myInfo = document.createElement('div');
    myInfo.className = 'info';
    const myName = document.createElement('h1');
    home = document.createElement('a');
    home.href = "../work";
    home.target = "_self";
    home.textContent = 'Antoinette Chow';
    myName.appendChild(home);
    
    const blurb = document.createElement('div');
    blurb.classList.add('blurb');
    const myDesc = document.createElement('p');
    myDesc.textContent = 'is a brand designer who celebrates the many ways visual language creates meaningful connections.';
    const myCV = document.createElement('p');
    myCV.innerHTML = 'Previously at <a href="https://prophet.com/" target="_blank">Prophet</a>. Currently seeking full-time opportunities in New York.';
    blurb.append(myDesc, myCV);
    
    const about = document.createElement('h6');
    const aboutA = document.createElement('a');
    aboutA.href = '../about';
    aboutA.textContent = '+ About';
    about.appendChild(aboutA);

    // const resumeLink = document.createElement('p');
    // resumeLink.innerHTML = '<a href="https://antoinettechow.notion.site/Antoinette-s-Resume-1a916c58244344f3ac000d9f841368ec?pvs=4" target="_blank"> ⤷ Resume / CV </a>';

    myInfo.append(myName, blurb, about)

    const aboutDiv = document.getElementById('name');
    aboutDiv.appendChild(myInfo);
  }


// Page Transition from About

  function fromAbout() {
    var fromAbout = sessionStorage.getItem('fromAbout');
    const style = document.createElement('style');

    if (fromAbout === 'true') {
      style.textContent = `
        ::view-transition-old(root) {animation-name: rotate-left-up; animation-duration: 0.8s; z-index: 2;}
        ::view-transition-new(root) {animation-name: none; z-index: 1;}
      `;
      document.head.append(style);
      sessionStorage.removeItem('fromAbout');
    } else {
      style.textContent = ``;
      document.head.append(style);
    }
  };

  fromAbout();


// Main Footer
  const mainFooterDiv = document.querySelector(".footer");

  function mainFooter() {
    mainFooterDiv.classList.add('link', 'context');

    const shortDesc = document.createElement('div');
    const whoLink = document.createElement('a');
    whoLink.href = 'about';
    whoLink.id = 'who';
    whoLink.textContent = 'Antoinette Chow'
    shortText1 = document.createTextNode(' is a designer in New York from Hong Kong.')
    shortText2 = document.createTextNode(' Language lover, linguistic and visual.')
    shortDesc.append(whoLink, shortText1, shortText2);

    const time = document.createElement('div');
    time.id = 'time';

    const moreText = document.createElement('div');
    const line1 = document.createElement('p');
    line1.textContent = 'She developed this website (◔ , ◔)ノ';
    const line2 = document.createElement('p');
    line2.textContent = 'She is currently seeking full-time opportunities in New York.';
    moreText.append(line1, line2);

    const social = document.createElement('div');
    social.className = 'social';
    const email = document.createElement('p');
    const emailP = document.createTextNode('email ');
    const emailA = document.createElement('a');
    emailA.href = 'mailto:chowantoinette@gmail.com?subject=hello!!';
    emailA.textContent = 'chowantoinette@gmail.com';
    email.append(emailP, emailA);
    const insta = document.createElement('p');
    const instaP = document.createTextNode('insta ');
    const instaA = document.createElement('a');
    instaA.href = 'https://instagram.com/antoinette.chow';
    instaA.target = '_blank';
    instaA.textContent = '@antoinette.chow';
    insta.append(instaP, instaA);
    social.append(email, insta);

    const lastUpdated = document.createElement('div');
    lastUpdated.id = 'lastMod';

    mainFooterDiv.append(shortDesc, time, moreText, social, lastUpdated);
  }

  mainFooterDiv && mainFooter();  


// Clock

  function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var period = "";

    period = hour >= 12 ? "PM" : "AM";
    
    if (hour == 0) {
      hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
    }

    // Append 0 before time elements if they are less than 10
    function update(t) {
      return t < 10 ? "0" + t : t;
    }
    
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    
    time.textContent = hour + " : " + minute + " : " + second + " " + period;
    
    setTimeout(Time, 1000);
  }

  const time = document.getElementById("time");
  if (time) Time();


// Website last updated

  const lastMod = document.getElementById('lastMod');

  if(lastMod) {
    async function fetchSitemap() {
      const response = await fetch('/sitemap.xml');
      const xmlText = await response.text();
      return new DOMParser().parseFromString(xmlText, 'text/xml');
    }

    function getLastMod(xmlDoc) {
      const lastmodDates = Array.from(xmlDoc.getElementsByTagName('lastmod'))
        .map(el => new Date(el.textContent));
      return new Date(Math.max(...lastmodDates));
    }

    async function displayLastMod() {
      const xmlDoc = await fetchSitemap();
      const mostRecentDate = getLastMod(xmlDoc);
      const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = mostRecentDate.toLocaleDateString('en-US', dateFormat);
      lastMod.textContent = `Last updated: ${formattedDate}`;
    }

    displayLastMod();
  }


// Custom cursor text

  function customCursor() {
    const cursorText = document.getElementById("view");
    const projArea = document.querySelectorAll("#proj-list a");
    const otherArea = document.querySelectorAll("#other-projects a");
    cursorText.style.display = "none";

    function changeText(event, Y, X) {
      event.target.style.cursor = 'none';
      cursorText.style.display = "block";
      cursorText.style.top = `${event.clientY - Y}` + "px";
      cursorText.style.left = `${event.clientX - X}` + "px";
      cursorText.style.zIndex = 1;
    }

    function normal(event) {
      cursorText.style.display = "none";
      cursorText.style.zIndex = -1;
    }

    if (projArea) {
      projArea.forEach((a) => {
        a.addEventListener('mousemove', (event) => changeText(event, 40, 50));
        a.addEventListener('mouseleave', normal)
      });
    } 

    if (otherArea) {
      otherArea.forEach((a) => {
        a.addEventListener('mousemove', (event) => changeText(event, 12, 20));
        a.addEventListener('mouseleave', normal);
      });
    }
  }




// -⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎻⎺⎺⎻--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎻⎺⎺⎻--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎻⎺⎺⎻- //


// LIMINAL SPACE

  function liminalSpace() {

  // Scrolling title

    (function titleScroller(text) {
      document.title = text;
      setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
      }, 400);
    }("● Welcome to Antoinette's Website "));


  // Random color

    function setColor(x) {
      randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.getElementById(x).style.color = "#" + randomColor;
    }

    setColor("welcome");
    setColor("skills");


  // Skill

    const skills = document.querySelectorAll("#skills > p");
    var sk = 0;

    function show() {
      skills[sk].style.display = "inline-block";
      skills[sk].style.opacity = 1;
      sk++;
    }


  // jQuery repel cursor

    $(function(){

      var mouse = {'x': 0, 'y': 0};

      homex = 0;
      homey = 0;
      forcex = 0;
      forcey = 0;
      magnet = 5000;
      
      $(document).bind('mousemove', function(e) {
          mouse = {'x': e.pageX, 'y': e.pageY};
      }); 

      $('#skills p').each(function(index, el){
      $(el).data( "homex", parseInt($(el).position().left));
      $(el).data( "homey", parseInt($(el).position().top));
      });

      $('#skills p').css('position','absolute');
      setInterval(function () {
          $('#skills p').each(function(index, el){
              el = $(el);
              position = el.position();
              x0 = el.offset().left;
              y0 = el.offset().top;
              x1 = mouse.x;
              y1 = mouse.y;
              distancex = x1-x0;
              distancey = y1-y0;

              distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
              
              powerx = x0 - (distancex / distance) * magnet / distance;
              powery = y0 - (distancey / distance) * magnet / distance;
              
              forcex = (forcex + (el.data('homex') - x0) / 10) / 2.1;
              forcey = (forcey + (el.data('homey') - y0) / 10) / 2.1;           

              el.css('left', powerx + forcex);
              el.css('top',  powery + forcey);
          });
      }, 15);
    });

  };


// -⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎻⎺⎺⎻--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎻⎺⎺⎻--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎻⎺⎺⎻- //


// DESIGN PORTFOLIO

  function designWork() {

    const mediaQ = window.matchMedia('(min-width:768px)');

  // Filter Design Categories

    const showcaseProj = [
      {category: 'brand', name: 'themorningafter'},
      {category: 'uxui', name: 'studybuds'},
      {category: 'web', name: 'rapport'},
      {category: 'concepts', name: 'vcs_fieldnotes'},
      {category: 'all', name: 'askjune'}
    ];

    const categories = document.querySelectorAll("#categories .category");
    categories.forEach((cat) => {
        cat.addEventListener("click", function() {
            const catClass = this.classList[1];
            filtering(this, catClass);
        });
    });

    function filtering(el, catClass) {
      const projects = document.querySelectorAll("#proj-list li");

      categories.forEach((cat) => {
          cat.classList.toggle("active", cat.isSameNode(el));
      });

      projects.forEach((project) => {
        if (mediaQ.matches) project.classList.remove("showcase");

        if (catClass === 'all' || project.classList.contains(catClass)) {
            project.classList.remove("hidden");

            const showcase = showcaseProj.find(item => item.name === project.id && item.category === catClass);
            if (showcase && mediaQ.matches) project.classList.add('showcase');

        } else {
            project.classList.add("hidden");
        }
      });

      scrollEvent();
    }


  // Show hovered project

    function toggleVisibility(el, isVisible) {
      if (!mediaQ.matches) return;

      const showingCase = document.querySelector('#proj-list li.showcase');
      if (showingCase) showingCase.classList.remove('showcase');

      const img = el.querySelector("img");
      const sub = el.querySelector(".subtext");

      if (isVisible) {
          img.style.display = "block";
          if (sub) sub.style.display = "block";
      } else {
          img.style.display = "none";
          if (sub) sub.style.display = "none";
      }

      if (el.classList.contains('wip')) {
        const elChildren = el.querySelectorAll(':scope > *');

        elChildren.forEach(child => {
          child.style.color = isVisible ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.25)';
        });
      }

      const siblings = Array.from(el.parentNode.children).filter(
          sibling => sibling !== el && !sibling.classList.contains('wip')
      );
      siblings.forEach(sibling => {
          sibling.style.opacity = isVisible ? 0.25 : "initial";
      });
    }

    function show(el) {
        toggleVisibility(el, true);
    }
    function hide(el) {
        toggleVisibility(el, false);
    }


    // Scroll to hide showcase

    function scrollEvent() {
      const trigger = document.querySelector('#scroll-trigger');
      const showingCase = document.querySelector('#proj-list li.showcase img');

      if (showingCase) {
        const observer = new IntersectionObserver(([e]) => {
          if (!e.isIntersecting) {
            showingCase.classList.add('fadeout');
            showingCase.style.opacity = 0;
          } else {
            showingCase.style.opacity = 1;
            if (showingCase.style.opacity === 1) showingCase.classList.remove('fadeout');
          }
        }, { threshold: 0 });

        observer.observe(trigger);
      }
       
    }

    document.addEventListener("DOMContentLoaded", () => {
      const brand = document.querySelector('#categories .brand');
      filtering(brand, 'brand');

      if (mediaQ.matches) {
        const hoverArea = document.querySelectorAll("#proj-list a, #proj-list li")
        hoverArea.forEach((a) => {
          a.addEventListener('mouseenter', (event) => show(event.target));
          a.addEventListener('mouseleave', (event) => hide(event.target));
        });
      }
    })
  }


