//
// TEMPLATES
//

  // Global \\

      // Menu
    const menu = document.createElement('div');
    menu.setAttribute("id", "menu-btn");
    menu.textContent = "menu"

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute("id", "menu-container");
  

  // Nav

    const menuItems = [
          { link: "", name: "Zentitude", year: "WIP!", src: "zent_bilinguallogo.png"},
          { link: "", name: "Sky Nine Social Club", year: "WIP!", src: "skynine_logo.png"},
          { link: "askjune", name: "Ask June", year: "2024", src: "askjune_iphone.png"},
          { link: "rapport", name: "Rapport AI Medical", year: "2024", src: "rapport_tagline.png"},
          { link: "themorningafter", name: "The Morning After", year: "2024", src: "tma_logo.gif"},
          { link: "mb_bank", name: "MB Bank", year: "2023", src: "mb_landing.png"},
          { link: "orientation", name: "orient-ation", year: "2022", src: "orientation.gif"},
          { link: "vcs_fieldnotes", name: "Visual Culture Seminar – Notes from the Field", year: "2022", src: "VCS.gif"},
          { link: "studybuds", name: "Study Buds", year: "2021", src: "studybuds.png"},
          { link: "vantage", name: "Vantage", year: "2021", src: "vantage.png"},
          { link: "projectunhappiness", name: "Project Unhappiness", year: "2020", src: "unhap.png"},
          { link: "etudiant", name: "etudiant", year: "2020", src: "etudiant.jpg"},
          { link: "luvsic", name: "Luv(Sic) Part 4", year: "2020", src: "luvsic.jpg"},
          { link: "tactus", name: "Tactus", year: "2019", src: "tactus_logo.gif"},
          { link: "aenigma", name: "Ænigma", year: "2018", src: "aenigma.png"}
        ];

    // Menu Navigation
    function pageNav() {
      const nav = document.getElementById("nav");

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

      menuItems.forEach(item => {
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

    pageNav();


    // Project Navigation
    function projNav() {
      const projNavContainer = document.getElementById("projNav");

      function createProjNavButton(direction, text, project, projClass) {
        if (project.link == null) {
          const emptyDiv = document.createElement('div');
          projNavContainer.appendChild(emptyDiv);
          return;
        }

        const projLink = document.createElement('a');
        projLink.href = "../" + project.link;

        const projText = document.createElement('span');
        projText.textContent = text;

        const arrow = document.createTextNode(direction);
        direction === "← " ? projLink.append(arrow, projText) : projLink.append(projText, arrow);

        const projImage = document.createElement('img');
        projImage.src = "../" + project.link + "/" + project.src;

        projLink.addEventListener("mouseenter", function() {
            projText.textContent = project.name;
            projImage.style.display = "block";

            projImage.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest'
            });
        });
        projLink.addEventListener("mouseleave", function() {
            projText.textContent = text;
            projImage.style.display = "none";
        });

        projLink.appendChild(projImage);
        projLink.className = projClass;
        projNavContainer.appendChild(projLink);
      }

      const index = menuItems.findIndex(item => item.name === projectName);
      const prev = index > 0 ? menuItems[index - 1] : null;
      const next = index < menuItems.length - 1 ? menuItems[index + 1] : null;

      prev && prev.link
        ? createProjNavButton("← ", "Previous Project", prev, "prevProj")
        : projNavContainer.appendChild(document.createElement('div'));
      next && next.link && createProjNavButton(" →", "Next Project", next, "nextProj");

    }

    projNav();


  // Toggle menu display
    const btn = document.getElementById("menu-btn");
    const line = document.getElementById("menu-line");

    btn.addEventListener("click", function() {
      menuContainer.classList.toggle("show");
      if (menuContainer.classList.contains("show")) {
        line.style.display = "block";
      } else {
        line.style.display = "none";
      }
    });


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

      const footerContainer = document.getElementById("footer");

      footerContainer.appendChild(footerText);
      footerContainer.appendChild(email);
      footerContainer.appendChild(footerInfo);
      footerContainer.appendChild(year);
    }

    footerTemplate();