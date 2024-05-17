var newsData = {

    "data": [
        {
            "img": "../assets/img/ideas/news/ideas-news-1.png",
            "alt": "Person speaking on stage",
            "title": "iEX Talk: Three Key Elements to Cultivate and Enable a Culture of Innovation",
            "description": "Kathryn Beckner, Director of IDEAS Center for Innovation, shares insights into three essential elements for fostering a culture of innovation at the Central Virginia VA Health Care System and supporting employees in doing the hard work of improving Veteran care.",
            "tag": "",
            "url": "https://telehealth.va.gov/"
        },
        {
            "img": "../assets/img/ideas/news/ideas-news-2.png",
            "alt": "Two health professionals scanning a QR code with a phone",
            "title": "Less Gas More Green",
            "description": "Anesthesia Provider, Sam Smith, developed an educational tool reducing gas flows to under 2 liters and discontinuing the use of other environmentally harmful anesthetic agents. This practice reduces the carbon footprint for VA Medical Centers, while creating significant cost savings.",
            "tag": "",
            "url": "https://vaww.blog.va.gov/CCM/?p=6655"
        },
        {
            "img": "../assets/img/ideas/news/ideas-news-3.png",
            "alt": "Panel of people sitting in chairs on a stage",
            "title": "Pioneering Immersive Experiences for Women Veterans",
            "description": "Dr. Lauren Siff’s pioneering approach customizes content in a virtual reality environment where Women Veterans who have experienced military sexual trauma can feel safe throughout their uro-gynecological procedures. Watch her 2023 VA Immersive Summit talk to learn more!",
            "tag": "",
            "url": "https://news.va.gov/128989/innovation-reduce-amputations-veterans-walking/"
        },
        {
          "img": "../assets/img/ideas/news/ideas-news-4.png",
          "alt": "Person speaking on stage",
          "title": "iEX Talk: Three Key Elements to Cultivate and Enable a Culture of Innovation",
          "description": "Kathryn Beckner, Director of IDEAS Center for Innovation, shares insights into three essential elements for fostering a culture of innovation at the Central Virginia VA Health Care System and supporting employees in doing the hard work of improving Veteran care.",
          "tag": "",
          "url": "../assets/documents/ideas/DJ-Scanner.pdf",
      }
    ]                                         
}


// render dynamic gallery data
//newsData.data.forEach(news => $('.owl-carousel.usa-card-group').append("<div class='usa-card__container item'>" + "<a class='card-group-tags' href='" + news.url + "'>" + "<div class='usa-card__media' >" + "<div class='usa-card__img'>" + "<img  src='" + news.img + "'alt='" + news.alt + "' />" + "</div>" + "</div>" + "<div class='usa-card__body'>" + "<h2 class='h3'>" + news.title + "</h2>" + "<p>" + news.description + "</p>" + "<span class='usa-tag' style='background-color: #FFBE2E !important; text-transform:none; color: #1B1B1B'>" + news.tag + "</span>" + "</div>" + "</a>" + "</div>")); 

// Render dynamic gallery data
newsData.data.forEach(news => {
    $('.owl-carousel.usa-card-group').append(
      `<div class="usa-card__container item">
        <a class="card-group-tags" href="${news.url}">
          <div class="usa-card__media">
            <div class="usa-card__img">
              <img src="${news.img}" alt="${news.alt}" />
            </div>
          </div>
          <div class="usa-card__body">
            <h2 class="h3">${news.title}</h2>
            <p>${news.description}</p>
            <span class="usa-tag text-base-darkest bg-accent-warm text-no-uppercase">${news.tag}</span>
          </div>
        </a>
      </div>`
    );
  });




// remove empty elements
$(".usa-card__body h4:empty").remove();
$(".usa-card__body p:empty").remove();
$(".usa-card__body span.usa-tag:empty").remove();
