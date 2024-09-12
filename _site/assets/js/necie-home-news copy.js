var newsData = {

    "data": [
        {
            "img": "../assets/img/drhci/news/drhci-news-telehealth.png",
            "alt": "Telehealth logo graphic",
            "title": "VA Telehealth Services",
            "description": "The U.S. Department of Veterans Affairs spearheads telehealth innovation, empowering Veterans to access top-tier care conveniently from anywhere through VA Telehealth Services.",
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
        },
        {
            "img": "../assets/img/drhci/news/drhci-news-walking.jpg",
            "alt": "A woman standing and laptop showing feet sensor display",
            "title": "Remote Temperature Monitoring Saves Veterans' Limbs and Lives",
            "description": "Uncover the transformative impact of VA's pioneering remote temperature monitoring program, enriching Veteran well-being by significantly enhancing the detection of illnesses that precipitate limb loss.",
            "tag": "",
            "url": "https://news.va.gov/125818/connecting-veterans-to-diabetes-care-telehealth/"
        },
        {
            "img": "../assets/img/drhci/news/drhci-news-feet.jpg",
            "title": "Learn about Remote Temperature Monitoring (RTM) by visiting their Diffusion Marketplace page.",
            "alt": "Feet standing on sensor mat",
            "description": "",
            "tag": "",
            "url": "https://marketplace.va.gov/innovations/reducing-hospital-admissions-and-amputation-prevention-remote-temperature-monitoring"
        },
        {
            "img": "../assets/img/drhci/news/rtm-empowers-veterans.jpg",
            "title": "RTM Empowers Veterans to Lead Their Health Journey",
            "description": "Discover the cutting-edge Remote Temperature Monitoring (RTM) technology featured on pages 29-30 of the 2023 VA OHIL's State of Innovation report and delve into its transformative impact on healthcare delivery.",
            "tag": "",
            "url": "https://www.innovation.va.gov/hil/assets/documents/OHIL_State_of_Innovation_Report_2023.pdf#page=16"
        },
        {
            "img": "../assets/img/drhci/news/drhci-news-toes.jpg",
            "title": "SmartMat Reduces the Impact of Diabetic Foot Ulcer",
            "description": "VA podiatrists are achieving remarkable success with the SmartMat and remote temperature monitoring (RTM) program, having enrolled over 8,000 Veterans across 158 VA locations, marking a significant milestone in enhancing the quality of care and empowering Veterans.",
            "tag": "",
            "url": "https://news.va.gov/121983/smartmat-delivers-preventative-telepodiatry"
        },
        {
            "img": "../assets/img/drhci/news/drhci-news-feetpad.jpg",
            "title": "VA Collaborates to End Veteran Limb Loss",
            "description": "VA's pioneering collaboration with Podimetrics is dedicated to eradicating diabetic limb loss among Veterans.",
            "tag": "",
            "url": "https://news.va.gov/74980/innovation-partnership-ending-diabetic-limb-loss-va/"
        }  
    ]                                         
}


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


// Reinitialize the carousel with the desired number of items
$(document).ready(function(){
  var carousel = $(".owl-carousel.usa-card-group");
  // Initialize carousel with custom settings for this page
  carousel.owlCarousel({
      items: 4, // Display 4 items only on this page
      loop: true,
      margin: 10,
      nav: true,
      // Add any other settings if needed
  });
});
