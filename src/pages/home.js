const home = () => {

    console.log("inside home.js");

    const content = document.querySelector("#content");

    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");
    content.appendChild(homeContent);

    const mainPictureContainer = document.createElement("div");
    mainPictureContainer.classList.add("main-picture-container");
    homeContent.appendChild(mainPictureContainer);

    const mainBanner = document.createElement("div");
    mainBanner.classList.add("main-banner");
    mainPictureContainer.appendChild(mainBanner);

    const mainPizzaCredit = document.createElement("a");
    mainPizzaCredit.href = "https://unsplash.com/images/food/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    mainPizzaCredit.textContent = "Photo by LikeMeat on Unsplash";
    mainPizzaCredit.classList.add("credit");
    mainPictureContainer.appendChild(mainPizzaCredit);

    const oClockContainer = document.createElement("div");
    oClockContainer.classList.add("o-clock-container");
    mainBanner.appendChild(oClockContainer);

    const oClock1 = document.createElement("h1");
    const oClock2 = document.createElement("h1");
    oClock1.textContent = "IT'S PIZZA";
    oClock2.textContent = "O'CLOCK";
    oClockContainer.appendChild(oClock1);
    oClockContainer.appendChild(oClock2);

    const bannerButtonContainer = document.createElement("div");
    bannerButtonContainer.classList.add("banner-button-container");
    mainBanner.appendChild(bannerButtonContainer);

    const bannerButtonTitle = document.createElement("h3");
    bannerButtonTitle.textContent = "Get it delivered";
    bannerButtonContainer.appendChild(bannerButtonTitle);

    const bannerButton = document.createElement("button");
    bannerButton.textContent = "ORDER NOW";
    bannerButton.id ="banner-button";
    bannerButtonContainer.appendChild(bannerButton);

    const recommendContainer = document.createElement("div");
    recommendContainer.classList.add("recommend-container");
    homeContent.appendChild(recommendContainer);

    const recommendation1 = document.createElement("div");
    const recommendation2 = document.createElement("div");
    recommendation1.classList.add("recommend-1");
    recommendation2.classList.add("recommend-2");
    recommendContainer.appendChild(recommendation1);
    recommendContainer.appendChild(recommendation2);

    const recText1 = document.createElement("p");
    const recText2 = document.createElement("p");
    recText1.textContent = "Tonight I ordered a pizza breadsticks and cheesy sticks. Was hesitant to because the last time I got food it was not very good. But that had been a while ago and I was craving Allan's! My pizza is amazing. Cooked to perfection! When the delivery man showed up with it I asked about the 2 liter I had ordered and he said that they didn't have any and told me he would make sure they gave me a credit for next time. No problem. I ordered online and I know how sometimes online can say you have something and you really don't. About 10 mins after the delivery man left I got a knock on the door. It was the delivery driver with a bag of 8 or so can drinks. He smiled and said 'Merry Christmas'. That was incredibly sweet! Thank you Allan's!";
    recText2.textContent = "Some of the best pizza in the region. Be sure to get the sweet red peppers on top! All sizes from one person personal pizzas to giant 30-inch pies that only fit in the trunk of my car! They also have huge strombolis, hot ham and cheese, and chicken bacon ranch sandwiches. Prices are great, and the staff is friendly and courteous. Everything is made fresh to order so they can take a little longer to make everything, but it's all WELL worth it.";
    recommendation1.appendChild(recText1);
    recommendation2.appendChild(recText2);

    const recAuthor1 = document.createElement("h4");
    const recAuthor2 = document.createElement("h4");
    recAuthor1.textContent = "- Brenen";
    recAuthor2.textContent = "- Jill";
    recommendation1.appendChild(recText1);
    recommendation2.appendChild(recText2);

    const recImg1 = document.createElement("div");
    recImg1.classList.add("rec-img");
    recImg1.classList.add("rec-img-1");
    recommendation1.appendChild(recImg1);

    const recCredit1 = document.createElement("a");
    recCredit1.href = "https://unsplash.com/photos/HPZs4EXRFSU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    recCredit1.textContent = "Photo by Brenan Greene on Unsplash";
    recCredit1.classList.add("credit");
    recImg1.appendChild(recCredit1);

    


};

export default home;