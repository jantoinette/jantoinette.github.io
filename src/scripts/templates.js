//
// TEMPLATES
//

  // Projects
    const projects = [
      {
        link: '',
        category: 'brand',
        name: 'Zentitude',
        year: 'Coming Soon!',
        sub: '',
        type: 'Scent Brand',
        src: 'zentitude/zent_bilinguallogo.png',
        imgAlt: 'Outline of English and Chinese wordmarks'
      },
      // {
      //   link: '',
      //   category: 'brand web',
      //   name: 'Sky Nine Social Club',
      //   year: 'Coming Soon!',
      //   sub: '',
      //   type: 'Brand Identity, Web Design, Web Development',
      //   src: 'skynine/skynine_logo.png',
      //   imgAlt: 'Text logo of Skynine Social Club'
      // },
      {
        link: 'askjune',
        category: 'brand',
        name: 'Ask June',
        year: '2024',
        sub: 'A Trusted Personal Guide in Healthcare, Powered by Rapport',
        type: 'Digital product subbrand by Rapport',
        src: 'askjune/askjune.gif',
        imgAlt: 'Photo of a woman holding a phone, with the shot taken from behind her shoulder. The phone is positioned in front of her, and her back and part of her arm are visible in the frame'
      },
      {
        link: 'rapport',
        category: 'brand web',
        name: 'Rapport',
        year: '2024',
        sub: 'Redefining Healthcare with Accessible and Efficient Solutions',
        type: 'Healthcare Startup',
        src: 'rapport/rapport_landing.png',
        imgAlt: 'Logo with tagline'
      },
      {
        link: 'vistra',
        category: 'brand',
        name: 'Vistra',
        year: '2024',
        sub: 'Creating a Unified Brand through Purpose-Driven Transformation',
        type: 'Corporate business merger',
        src: 'vistra/vistra_card.png',
        imgAlt: ''
      },
      {
        link: 'themorningafter',
        category: 'brand web',
        name: 'The Morning After',
        year: '2024',
        sub: 'Where Naughty Meets Nice in Every Crunch',
        type: 'Granola brand',
        src: 'themorningafter/tma.webp',
        imgAlt: 'Animated visual of Creation of Adam parody image with left hand holding a bagel and right hand having spread on index finger, revealing logo in the center'
      },
      {
        link: 'mb_bank',
        category: 'uxui',
        name: 'MB Bank',
        year: '2023',
        sub: 'A Strategic Brand Refresh Through Digital Banking Transformation',
        type: 'Mobile App',
        src: 'mb_bank/mb_mock.png',
        imgAlt: 'Three iPhones showing screens of apps in different banking tiers'
      },
      {
        link: 'orientation',
        category: 'web concepts',
        name: 'orient-ation',
        year: '2022',
        sub: 'A Web-based Expression on Shifting States, Belonging, and Cultural Displacement',
        type: 'Web design and Development',
        src: 'orientation/orientation.gif',
        imgAlt: 'Cursor interaction with website'
      },
      {
        link: 'vcs_fieldnotes',
        category: 'concepts',
        name: 'Visual Culture Seminar – Notes from the Field',
        year: '2022',
        sub: 'Reinterpreting Google Calendar to Reflect Diverse Learnings',
        type: 'Presentation Concept',
        src: 'vcs_fieldnotes/VCS.gif',
        imgAlt: 'Cursor interaction with Google Calendar'
      },
      {
        link: 'colors_archive',
        category: 'web concepts',
        name: 'Archive: Colors',
        year: '2022',
        sub: 'Exploration of digital archiving and evolving system of organization',
        type: 'Web design and Development',
        src: 'colors_archive/colors_archive.gif',
        imgAlt: 'Cursor interaction with website'
      },
      {
        link: 'studybuds',
        category: 'uxui',
        name: 'Study Buds',
        year: '2021',
        sub: 'A UX/UI Redesign to Tackle Abandonment',
        type: 'Online tutorial platform',
        src: 'studybuds/studybuds.png',
        imgAlt: 'Compilation of different pages of website shown at an angle'
      },
      // {
      //   link: 'vantage',
      //   category: 'brand uxui',
      //   name: 'Vantage',
      //   year: '2021',
      //   sub: 'Repositioning a Multi-Asset Broker to Drive Growth',
      //   type: 'Fintech brand refresh',
      //   src: 'vantage/vantage_posters.jpeg',
      //   imgAlt: 'Set of 3 posters in public'
      // },
      {
        link: 'chinesetypearchive',
        category: 'concepts',
        name: 'Chinese Type Archive',
        year: '2020 (Ongoing)',
        sub: 'An open-access database of Chinese typographic resources',
        type: 'Archival Project Web App',
        src: 'chinesetypearchive/chinesetypearchive_01.gif',
        imgAlt: 'Looping gif showing various screens of the Chinese Type Archive web app'
      },
      {
        link: 'projectunhappiness',
        category: 'brand concepts',
        name: 'Project Unhappiness',
        year: '2020',
        sub: 'Visual Narrative that Embraces Human Emotional Spectrum',
        type: 'Campaign Concept',
        src: 'projectunhappiness/unhap.png',
        imgAlt: 'Close up of posters stuck on power boxes in street'
      },
      {
        link: 'etudiant',
        category: 'concepts',
        name: 'etudiant',
        year: '2020',
        sub: 'A Typeface for the Ever-Learning Mind',
        type: 'Typeface design',
        src: 'etudiant/etudiant.jpg',
        imgAlt: 'B/W image of sky with building and hanging signs in frame. Text in center, reads: Etudiant'
      },
      {
        link: 'luvsic',
        category: 'concepts',
        name: 'Luv(Sic) Part 4',
        year: '2020',
        sub: 'Visual Tribute to Music, Life, and the Genius of Nujabes',
        type: 'Graphic Design',
        src: 'luvsic/luvsic.jpg',
        imgAlt: 'Set of 3 cards with soft gradient graphics laid out flat'
      },
      {
        link: 'tactus',
        category: 'brand',
        name: 'Tactus',
        year: '2019',
        sub: 'A Visual Identity that Brings Rhythm to Everyone',
        type: 'Wearable Tech for Deaf Community',
        src: 'tactus/tactus_logo.gif',
        imgAlt: 'Animated logo'
      },
      // {
      //   link: 'aenigma',
      //   category: 'brand concepts',
      //   name: 'Ænigma',
      //   year: '2018',
      //   sub: 'Designing Curiosity through a New Identity',
      //   type: 'Museum Rebrand Concept',
      //   src: 'aenigma/aenigma.png',
      //   imgAlt: 'Close up of large scale poster hanging indoors on wall'
      // }
    ];


  // Project List
    function listProjects() {
      const list = document.getElementById('proj-list');

      projects.forEach(project => {
        const link = document.createElement('a');
        if (project.link == '') {
          return;
        } else {
          link.href = project.link;
        }

        const listItem = document.createElement('div');
        listItem.id = project.link;
        listItem.className = project.category;

        const title = document.createElement('h4');
        title.className = 'title';
        title.innerText = project.name;

        const year = document.createElement('span');
        year.innerText = project.year;
        project.year === "Coming Soon!" && (year.className = "blink");

        const sub = document.createElement('h4');
        if (project.sub) {
          sub.className = 'subtext';
          sub.innerText = project.sub;
        }

        const type = document.createElement('p');
        type.innerText = project.type;

        const img = document.createElement('img');
        img.className = 'preview';
        img.src = project.src;
        img.alt = project.imgAlt;
        img.setAttribute('loading', 'lazy');

        listItem.append(title, year, sub, type, img);

        link.appendChild(listItem);

        list.appendChild(link);
      });
    }


  // Menu
    const menu = document.createElement('div');
    menu.setAttribute("id", "menu-btn");
    menu.textContent = "menu"

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute("id", "menu-container");
  

  // Nav

    // Menu Navigation
    const nav = document.getElementById("nav");

    function pageNav() {

      const myName = document.createElement('div');
      const backHome = document.createElement('a');
      backHome.href = "../";
      backHome.textContent = "Antoinette Chow";
      myName.appendChild(backHome);

      const myInfo = document.createElement('div');
      myInfo.className = "info";

      const blurb = document.createElement('div');
      blurb.className = "blurb";
      const blurbText = document.createElement('p');
      blurbText.textContent = " is a brand designer who celebrates the many ways visual language creates meaningful connections."
      const blurbJob = document.createElement('p');
      blurbJob.textContent = "She is currently seeking full time opportunities in New York. (•-•)ゝ"
      blurb.append(blurbText, blurbJob);

      const resume = document.createElement('p');
      resume.className = 'resume';
      const resumeLink = document.createElement('a');
      resumeLink.href = "https://antoinettechow.notion.site/Antoinette-s-Resume-1a916c58244344f3ac000d9f841368ec?pvs=4";
      resumeLink.target = "_blank";
      const resumeLinkText = document.createTextNode(" ⤷ Resume / CV ");
      resumeLink.appendChild(resumeLinkText);
      resume.appendChild(resumeLink);

      myInfo.append(blurb, resume);

      const menuFragment = document.createDocumentFragment();

      const menuListDiv = document.createElement('nav');
      const menuList = document.createElement('ul');

        function menuItem(link, name, year) {
          const li = document.createElement('li');

          name === projectName && (li.className = "current");

          const pageLink = document.createElement('a');
          pageLink.href = "../" + link;

          link.length === 0 && (pageLink.className = "disabled");

          const pageName = document.createTextNode(name);
          const pubDate = document.createElement ('span');
          pubDate.textContent = " " + year;

          year === "Coming Soon!" && (pubDate.className = "blink");

          pageLink.appendChild(pageName);
          pageLink.appendChild(pubDate);
          li.appendChild(pageLink);

          return li;
        }

      projects.forEach(item => {
        const menuItemList = menuItem(item.link, item.name, item.year);
        menuFragment.appendChild(menuItemList);
      });

      menuList.appendChild(menuFragment);
      menuListDiv.appendChild(menuList);

      menuContainer.appendChild(myInfo);
      menuContainer.appendChild(menuListDiv);

      nav.appendChild(myName);
      nav.appendChild(menu);
      nav.appendChild(menuContainer);
    }

    nav && pageNav();


    // Project Navigation
    const projNavContainer = document.getElementById("projNav");

    function projNav() {

      function createProjNavButton(direction, text, project, dirClass) {
        const projLink = document.createElement('a');
        projLink.href = "../" + project.link;

        const projText = document.createElement('span');
        projText.textContent = text;

        const arrow = document.createTextNode(direction);
        direction === "← " ? projLink.append(arrow, projText) : projLink.append(projText, arrow);

        const projDesc = document.createElement('h4');
        projDesc.className = "subtext";
        projDesc.textContent = project.sub;

        const projImage = document.createElement('img');
        projImage.src = "../" + project.src;

        projLink.addEventListener("mouseenter", function() {
            projText.textContent = project.name;
            projDesc.style.display = "block";
            projImage.style.display = "block";

            projImage.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest'
            });
        });
        projLink.addEventListener("mouseleave", function() {
            projText.textContent = text;
            projDesc.style.display = "none";
            projImage.style.display = "none";
        });

        projLink.append(projDesc, projImage);
        projLink.className = dirClass;
        projNavContainer.appendChild(projLink);
      }

      const index = projects.findIndex(item => item.name === projectName);
      const prev = index > 0 ? projects[index - 1] : null;
      const next = index < projects.length - 1 ? projects[index + 1] : null;

      prev && prev.link
        ? createProjNavButton("← ", "Previous Project", prev, "prevProj")
        : projNavContainer.appendChild(document.createElement('div'));
      next && next.link && createProjNavButton(" →", "Next Project", next, "nextProj");

    }

    projNavContainer && projNav();


  // Toggle menu display
    const btn = document.getElementById("menu-btn");
    const line = document.getElementById("menu-line");

    if (btn) {
      btn.addEventListener("click", function() {
        menuContainer.classList.toggle("show");
        if (menuContainer.classList.contains("show")) {
          line.style.display = "block";
        } else {
          line.style.display = "none";
        }
      });
    }


  // Project Info
    function projTemplate(name, projectLink, projectLinkText, descText) {
      const projInfoContainer = document.getElementById("proj-info");

      const projName = document.createElement('h2');
      projName.textContent = name;

      const infoDiv = document.createElement('div');
      infoDiv.className = "content-info details";

        const infoLink = document.createElement('p');
        const projLink = document.createElement('a');
        projLink.href = projectLink;
        projLink.target = "_blank";
        const projLinkText = document.createTextNode(projectLinkText);
        projLink.appendChild(projLinkText);
        infoLink.appendChild(projLink);
        infoDiv.appendChild(infoLink);

        const infoFragment = document.createDocumentFragment();

        const titles = [
          "Year",
          "Project",
          "Role",
          "Tool(s)"
        ];

        const projInfoScript = document.getElementById("project-info");
        const projInfoData = JSON.parse(projInfoScript.textContent).textContent;

        function info(title, text) {
          const div = document.createElement('div');

          const h4 = document.createElement('h4');
          h4.textContent = title;

          const p = document.createElement ('p');
          p.textContent = text;

          div.append(h4, p);

          return div;
        }

      projInfoData.forEach((infoText, index) => {
        const infoRow = info(titles[index], infoText);
        infoFragment.appendChild(infoRow);
      });

      infoDiv.appendChild(infoFragment);

      const projDesc = document.createElement('p');
      projDesc.className = "content-info desc";
      projDesc.textContent = descText;


      projInfoContainer.append(projName, infoDiv, projDesc);

      return projInfoContainer;
    }


  // Project div slide-in animation
    function slideIn() {
      const container = document.querySelector('.project');
      const elements = container.querySelectorAll(':scope > div');

      elements.forEach(element => {
        element.classList.add('slideanim');
      });
    }


  // Project Page Footer
    function footerTemplate() {
      const footerText = document.createElement('div');
      footerText.className = "footer-text";
      const footerTextNode = document.createTextNode("Thank you for being here ദ്ദി・ᴗ・)✧");
      footerText.appendChild(footerTextNode);

      const email = document.createElement('div');
      const emailAdd = document.createElement('a');
      emailAdd.href = "mailto:chowantoinette@gmail.com";
      const emailSpan = document.createElement('span');
      emailSpan.className = "email";
      emailAdd.appendChild(emailSpan);
      email.appendChild(emailAdd);

      const footerInfo = document.createElement('div');
      footerInfo.className = 'footer-info';
      footerInfo.innerHTML = "Antoinette Chow developed this website (◔ , ◔)ノ <br> She is currently seeking full-time design opportunities in New York.";

      const year = document.createElement('div');
      year.className = 'Cyear';
      year.innerHTML = "<span>©</span> 2025";

      footerContainer.append(footerText, email, footerInfo, year);
    }

    const footerContainer = document.getElementById("footer");
    footerContainer && footerTemplate();


