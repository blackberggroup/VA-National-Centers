var newsData = {

    "data": [
        {
            "img": "../assets/img/drhci/news/drhci-news-telehealth.png",
            "alt": "Telehealth logo graphic",
            "title": "TEST TEST VA Telehealth Services",
            "description": "TEST TEST The U.S. Department of Veterans Affairs spearheads telehealth innovation, empowering Veterans to access top-tier care conveniently from anywhere through VA Telehealth Services.",
            "tag": "",
            "url": "https://telehealth.va.gov/"
        },
        {
            "img": "../assets/img/drhci/news/drhci-news-parade.jpg",
            "alt": "Man holding USA flag leading a group of people walking on the street",
            "title": "Veterans Explore Cincinnati VA's Whole Health Challenge",
            "description": "Veterans participate in a 10-week Whole Health Challenge focused on promoting camaraderie and wellness through community engagement, personalized health plans, and shared experiences.",
            "tag": "VA's Internal Network",
            "url": "https://vaww.blog.va.gov/CCM/?p=6655"
        },
        {
            "img": "../assets/img/drhci/news/drhci-news-helpp.png",
            "alt": "HELPP logo graphic",
            "title": "HELPP Delivers Timely Veteran Care",
            "description": "Dr. Nichol Salvo, deputy director of VA's National Podiatry Program, spearheaded the High-risk Eye and Limb Preservation Program (HELPP) during the pandemic, reducing amputation rates by 40% and wait times from 38 to 10 days at Atlanta VA",
            "tag": "",
            "url": "https://news.va.gov/128989/innovation-reduce-amputations-veterans-walking/"
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
