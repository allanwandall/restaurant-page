const header = () => {
    const content = document.querySelector("#content");

    const header = document.createElement("div");
    header.classList.add("header");
    content.appendChild(header);

    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");
    header.appendChild(logoContainer);

    const hero = document.createElement("h1");
    hero.classList.add("hero");
    hero.textContent = "ALLAN'S";
    logoContainer.appendChild(hero);

    const subHero = document.createElement("h2");
    subHero.classList.add("sub-hero");
    subHero.textContent = "pizza";
    logoContainer.appendChild(subHero);

    const headerOptions = document.createElement("ul");
    headerOptions.classList.add("header-options");
    header.appendChild(headerOptions);

    const homeLink = document.createElement("li");
    homeLink.textContent = "HOME";
    headerOptions.appendChild(homeLink);

    const menuLink = document.createElement("li");
    menuLink.textContent = "MENU";
    headerOptions.appendChild(menuLink);

    const aboutLink = document.createElement("li");
    aboutLink.textContent = "ABOUT";
    headerOptions.appendChild(aboutLink);

    const giftcardLink = document.createElement("h2");
    giftcardLink.classList.add("giftcard");
    giftcardLink.textContent = "SHARE A SLICE!";
    header.appendChild(giftcardLink);
    
    const orderBtn = document.createElement("button");
    orderBtn.id = "order-btn";
    orderBtn.textContent = "ORDER NOW";
    header.appendChild(orderBtn);
};

export default header;