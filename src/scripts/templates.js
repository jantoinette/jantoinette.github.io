//
// TEMPLATES
//

  // Global \\

  // Projects
    const projects = [
      {
        link: '',
        category: 'brand',
        name: 'Zentitude',
        year: 'WIP!',
        sub: '',
        tags: 'Brand Identity',
        src: 'zentitude/zent_bilinguallogo.png',
        imgAlt: 'Outline of English and Chinese wordmarks'
      },
      {
        link: '',
        category: 'brand web',
        name: 'Sky Nine Social Club',
        year: 'WIP!',
        sub: '',
        tags: 'Brand Identity, Web Design, Web Development',
        src: 'skynine/skynine_logo.png',
        imgAlt: 'Text logo of Skynine Social Club'
      },
      {
        link: 'askjune',
        category: 'brand uxui',
        name: 'Ask June',
        year: '2024',
        sub: 'A Trusted Personal Guide in Healthcare, Powered by Rapport',
        tags: 'Brand Identity, Brand Strategy, Prototyping, UX/UI',
        src: 'askjune/askjune.gif',
        imgAlt: 'Photo of a woman holding a phone, with the shot taken from behind her shoulder. The phone is positioned in front of her, and her back and part of her arm are visible in the frame'
      },
      {
        link: 'rapport',
        category: 'brand web',
        name: 'Rapport',
        year: '2024',
        sub: 'Redefining Healthcare with Accessible and Efficient Solutions',
        tags: 'Animation, Brand Identity, Brand Strategy, Web Design, Web Development',
        src: 'rapport/rapport_tagline.png',
        imgAlt: 'Logo with tagline'
      },
      {
        link: 'vistra',
        category: 'brand web',
        name: 'Vistra',
        year: '2024',
        sub: 'Creating a Unified Brand through Purpose-Driven Transformation',
        tags: 'Brand Identity, Web design',
        src: 'vistra/vistra_products.png',
        imgAlt: ''
      },
      {
        link: 'themorningafter',
        category: 'brand web',
        name: 'The Morning After',
        year: '2024',
        sub: 'Where Naughty Meets Nice in Every Crunch',
        tags: 'Animation, Brand Identity, Packaging, Social Media Direction, Shopify, Web Design',
        src: 'themorningafter/tma_logo.gif',
        imgAlt: 'Animated visual of Creation of Adam parody image with left hand holding a bagel and right hand having spread on index finger, revealing logo in the center'
      },
      {
        link: 'mb_bank',
        category: 'brand uxui',
        name: 'MB Bank',
        year: '2023',
        sub: 'A Strategic Brand Refresh Through Digital Banking Transformation',
        tags: 'Brand Identity, Brand Strategy, Prototyping, UX/UI',
        src: 'mb_bank/mb_landing.png',
        imgAlt: 'Three iPhones showing screens of apps in different banking tiers'
      },
      {
        link: 'orientation',
        category: 'web concepts',
        name: 'orient-ation',
        year: '2022',
        sub: 'A Web-based Expression on Shifting States, Belonging, and Cultural Displacement',
        tags: 'Web design, Web Development',
        src: 'orientation/orientation.gif',
        imgAlt: 'Cursor interaction with website'
      },
      {
        link: 'vcs_fieldnotes',
        category: 'concepts',
        name: 'Visual Culture Seminar – Notes from the Field',
        year: '2022',
        sub: 'Reinterpreting Google Calendar to Reflect Diverse Learnings',
        tags: 'Presentation Concept',
        src: 'vcs_fieldnotes/VCS.gif',
        imgAlt: 'Cursor interaction with Google Calendar'
      },
      // {
      //   link: 'colors_archive',
      //   category: 'web concepts',
      //   name: 'Archive: Colors',
      //   year: '2022',
      //   sub: '',
      //   tags: 'Web design, Web Development',
      //   src: 'colors_archive.gif',
      //   imgAlt: 'Cursor interaction with website'
      // },
      {
        link: 'studybuds',
        category: 'brand uxui',
        name: 'Study Buds',
        year: '2021',
        sub: 'A UX/UI Redesign to Tackle Abandonment',
        tags: 'UX/UI, Branding',
        src: 'studybuds/studybuds.png',
        imgAlt: 'Compilation of different pages of website shown at an angle'
      },
      {
        link: 'vantage',
        category: 'brand',
        name: 'Vantage',
        year: '2021',
        sub: 'Repositioning a Multi-Asset Broker to Drive Growth',
        tags: 'Brand Identity, Digital design',
        src: 'vantage/vantage.png',
        imgAlt: 'Logo on textured paper in dark teal'
      },
      {
        link: 'projectunhappiness',
        category: 'brand concepts',
        name: 'Project Unhappiness',
        year: '2020',
        sub: 'Visual Narrative that Embraces Human Emotional Spectrum',
        tags: 'Campaign Concept, Brand Identity',
        src: 'projectunhappiness/unhap.png',
        imgAlt: 'Close up of posters stuck on power boxes in street'
      },
      {
        link: 'etudiant',
        category: 'concepts',
        name: 'etudiant',
        year: '2020',
        sub: 'A Typeface for the Ever-Learning Mind',
        tags: 'Typeface design',
        src: 'etudiant/etudiant.jpg',
        imgAlt: 'B/W image of sky with building and hanging signs in frame. Text in center, reads: Etudiant'
      },
      {
        link: 'luvsic',
        category: 'concepts',
        name: 'Luv(Sic) Part 4',
        year: '2020',
        sub: 'Visual Tribute to Music, Life, and the Genius of Nujabes',
        tags: 'Graphic Design, Print',
        src: 'luvsic/luvsic.jpg',
        imgAlt: 'Set of 3 cards with soft gradient graphics laid out flat'
      },
      {
        link: 'tactus',
        category: 'brand',
        name: 'Tactus',
        year: '2019',
        sub: 'A Visual Identity that Brings Rhythm to Everyone',
        tags: 'Branding, Pro-bono',
        src: 'tactus/tactus_logo.gif',
        imgAlt: 'Animated logo'
      },
      {
        link: 'aenigma',
        category: 'brand concepts',
        name: 'Ænigma',
        year: '2018',
        sub: 'Designing Curiosity through a New Identity',
        tags: 'Branding',
        src: 'aenigma/aenigma.png',
        imgAlt: 'Close up of large scale poster hanging indoors on wall'
      }
    ];


  // Project List
    function listProjects() {
      const ul = document.getElementById('proj-list');

      projects.forEach(project => {
        const link = document.createElement('a');
        if (project.link == '') {
          return;
        } else {
          link.href = project.link;
        }

        const listItem = document.createElement('li');
        listItem.className = project.category;

        const title = document.createElement('h4');
        title.className = 'title';
        title.innerText = project.name;

        const year = document.createElement('span');
        year.innerText = project.year;
        project.year === "WIP!" && (year.className = "blink");

        const sub = document.createElement('h4');
        if (project.sub) {
          sub.className = 'subtext';
          sub.innerText = project.sub;
        }

        const tags = document.createElement('p');
        tags.innerText = project.tags;

        const img = document.createElement('img');
        img.className = 'preview';
        img.src = project.src;
        img.alt = project.imgAlt;

        listItem.append(title, year, sub, tags, img);

        link.appendChild(listItem);

        ul.appendChild(link);
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

      const myInfoText = document.createElement('p');
      myInfoText.className = "info";
      myInfoText.innerHTML = " is a creative living and designing between New York and Hong Kong.<br>She was previously at <a href=\"https://prophet.com/\" target=\"_blank\">Prophet</a>, and is currently seeking full time opportunities."

      const resume = document.createElement('p');
      const resumeLink = document.createElement('a');
      resumeLink.href = "https://antoinettechow.notion.site/Antoinette-s-Resume-1a916c58244344f3ac000d9f841368ec?pvs=4";
      resumeLink.target = "_blank";
      const resumeLinkText = document.createTextNode(" ⤷ Resume / CV ");
      resumeLink.appendChild(resumeLinkText);
      resume.appendChild(resumeLink);

      myInfo.appendChild(myInfoText);
      myInfo.appendChild(resume);

      const menuFragment = document.createDocumentFragment();

      const menuListDiv = document.createElement('div');
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

          year === "WIP!" && (pubDate.className = "blink");

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

          div.appendChild(h4);
          div.appendChild(p);

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


      projInfoContainer.appendChild(projName);
      projInfoContainer.appendChild(infoDiv);
      projInfoContainer.appendChild(projDesc);

      return projInfoContainer;
    }


  // Footer
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
      footerInfo.innerHTML = "Antoinette Chow is a designer between New York and Hong Kong. <br>She is currently seeking full-time opportunities in New York.";

      const year = document.createElement('div');
      year.className = 'Cyear';
      year.innerHTML = "<span>©</span> 2025";

      footerContainer.append(footerText, email, footerInfo, year);
    }

    const footerContainer = document.getElementById("footer");
    footerContainer && footerTemplate();

