var newsData = {

    "data": [
        {
            "img": "../assets/img/drhci/news/drhci-news-telehealth.png",
            "alt": "Telehealth logo graphic",
            "title": "NECIE Identifies Innovations at VHA Shark Tank",
            "description": "During the 2022 edition of VHA Shark Tank competition, Leandro DaSilva, Director of the New England Center for Innovation of Excellence, served as a judge to identify employee-led health care solutions that promote positive outcomes and improved experiences for Veterans and VHA community.",
            "tag": "",
            "url": "https://telehealth.va.gov/"
        },
        {
            "img": "../assets/img/drhci/news/drhci-news-parade.jpg",
            "alt": "Man holding USA flag leading a group of people walking on the street",
            "title": "Transforming Transportation for Homeless Veterans ",
            "description": "The VA Rideshare Program, launched in 2018 at VA Boston HCS, offers transportation for homeless Veterans. Partnering with VHA IE and NECIE, it has provided over 250,000 rides since August 2021. Operating nationally, it supports healthcare, housing, food, employment, and disaster relief efforts.",
            "tag": "",
            "url": "https://news.va.gov/74711/va-rideshare-rogram-adapts-help-covid-19/"
        },
        {
            "img": "../assets/img/drhci/news/drhci-news-helpp.png",
            "alt": "HELPP logo graphic",
            "title": "Mobius Mobility",
            "description": "The IBOT Personal Mobility Device offers disabled Veterans freedom and independence with four driving modes for climbing curbs, navigating various terrains, interacting at eye level, and climbing stairs. NECIE, with Mobius Mobility, is delivering iBOTs and training to 25 VA SCI/D Centers and donating 25 iBOTs to Veterans.",
            "tag": "",
            "url": "https://www.youtube.com/watch?v=ATa6DjM3XJE"
        },
        {
            "img": "../assets/img/drhci/news/drhci-news-walking.jpg",
            "alt": "A woman standing and laptop showing feet sensor display",
            "title": "Move the Sample, Not the Patient",
            "description": "NECIE is collaborating with VA Puget Sound Health Care System and Tasso Inc., a Seattle based health startup focused on delivering at-home diagnostic testing. The collaboration will allow for a pilot to evaluate the efficacy of laboratory tests from samples obtained at home.",
            "tag": "",
            "url": "https://news.va.gov/125818/connecting-veterans-to-diabetes-care-telehealth/"
        },
        {
            "img": "../assets/img/drhci/news/drhci-news-feet.jpg",
            "title": "Give Legacy, Inc.",
            "alt": "Feet standing on sensor mat",
            "description": "VHA has partnered with Give Legacy, Inc. to test and cryopreserve sperm for Global War on Terror Veterans, addressing higher infertility rates compared to civilians. Researchers are collecting and analyzing samples, exploring factors like burn pit exposure, PTSD, and traumatic brain injury.",
            "tag": "",
            "url": "https://marketplace.va.gov/innovations/reducing-hospital-admissions-and-amputation-prevention-remote-temperature-monitoring"
        },
        {
            "img": "../assets/img/drhci/news/rtm-empowers-veterans.jpg",
            "title": "NECIE Wins VA Center for Development and Civic Engagement (CDCE) Spirit Corporate Recruitment Award 2022",
            "description": "CDCE's American Spirit and Excellence Awards recognize outstanding programs, community partners, and staff for successful volunteer recruitment, impactful programs, and the dedication and talent of VA professionals within VHA and the Department.",
            "tag": "",
            "url": "https://www.innovation.va.gov/hil/assets/documents/OHIL_State_of_Innovation_Report_2023.pdf#page=16"
        },
        {
            "img": "../assets/img/drhci/news/drhci-news-toes.jpg",
            "title": "NECIE Program Wins 2021 HeRO Awardees Non-Clinical Team from a VISN or Facility for Excellence in CARE and HRO Principles.",
            "description": "VA recognizes National HeRO Award recipients for their contributions to VHA's journey to becoming a high reliability organization (HRO). VHA's enterprise-wide journey to high reliability aims to ensure every patient receives excellent care every time.",
            "tag": "",
            "url": "https://news.va.gov/121983/smartmat-delivers-preventative-telepodiatry"
        },
        {
            "img": "../assets/img/drhci/news/drhci-news-feetpad.jpg",
            "title": "Operation Mobility: Cross-Country Tour to Donate 25 iBOT PMDs to Veterans",
            "description": "SoldierStrong, a nonprofit aiding Veterans with revolutionary medical technologies, and Dean Kamen of DEKA Research launched Operation Mobility, a 2.5-month, cross-country bus tour to donate 25 iBOT® PMDs to veterans.",
            "tag": "",
            "url": "https://www.globenewswire.com/news-release/2021/05/26/2236704/0/en/National-Nonprofit-SoldierStrong-Dean-Kamen-Announce-Launch-of-Operation-Mobility-Tour-to-Deliver-25-iBOTs-to-Veterans-And-Veterans-Affairs-Facilities-Nationwide.html "
        },  
        {
          "img": "../assets/img/drhci/news/drhci-news-feetpad.jpg",
          "title": "Disabled Veteran from New Jersey Given High-Tech Wheelchair that Can Go Up Stairs",
          "description": "“I spent my whole life building medical equipment. I spent years building the iBot to restore dignity, access, balance to somebody that can’t walk. It’s a medical device,” Kamen says.",
          "tag": "",
          "url": "https://newjersey.news12.com/disabled-veteran-from-new-jersey-given-high-tech-wheelchair-that-can-go-up-stairs "
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




// Initialize Owl Carousel
$('.owl-carousel.usa-card-group').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    650: {
      items: 2
    },
    1000: {
      items: 3
    },
    1400: {
      items: 4
    },
    2000: {
      items: 4
    }
  }
});