var newsData = {

    "data": [
        {
            "img": "assets/img/nci2i/news/nci2i-news-telehealth.png",
            "alt": "Telehealth logo graphic",
            "title": "VA Telehealth Services",
            "description": "The U.S. Department of Veterans Affairs spearheads telehealth innovation, empowering Veterans to access top-tier care conveniently from anywhere through VA Telehealth Services.",
            "url": "https://telehealth.va.gov/"
        },
        {
            "img": "assets/img/nci2i/news/nci2i-news-helpp.png",
            "alt": "HELPP logo graphic",
            "title": "HELPP Delivers Timely Veteran Care",
            "description": "Dr. Nichol Salvo, deputy director of VA's National Podiatry Program, spearheaded the High-risk Eye and Limb Preservation Program (HELPP) during the pandemic, reducing amputation rates by 40% and wait times from 38 to 10 days at Atlanta VA",
            "url": "https://news.va.gov/128989/innovation-reduce-amputations-veterans-walking/"
        },
        {
            "img": "assets/img/nci2i/news/nci2i-news-walking.jpg",
            "alt": "A woman standing and laptop showing feet sensor display",
            "title": "Remote Temperature Monitoring Saves Veterans' Limbs and Lives",
            "description": "Uncover the transformative impact of VA's pioneering remote temperature monitoring program, enriching Veteran well-being by significantly enhancing the detection of illnesses that precipitate limb loss.",
            "url": "https://news.va.gov/125818/connecting-veterans-to-diabetes-care-telehealth/"
        },
        {
            "img": "assets/img/nci2i/news/nci2i-news-feet.jpg",
            "title": "Learn about Remote Temperature Monitoring (RTM) by visiting their Diffusion Marketplace page.",
            "alt": "Feet standing on sensor mat",
            "description": "",
            "url": "https://marketplace.va.gov/innovations/reducing-hospital-admissions-and-amputation-prevention-remote-temperature-monitoring"
        },
        {
            "img": "",
            "title": "RTM Empowers Veterans to Lead Their Health Journey",
            "description": "Discover the cutting-edge Remote Temperature Monitoring (RTM) technology featured on pages 29-30 of the 2023 VA OHIL's State of Innovation report and delve into its transformative impact on healthcare delivery.",
            "url": ""
        },
        {
            "img": "assets/img/nci2i/news/nci2i-news-toes.jpg",
            "title": "SmartMat Reduces the Impact of Diabetic Foot Ulcer",
            "description": "VA podiatrists are achieving remarkable success with the SmartMat and remote temperature monitoring (RTM) program, having enrolled over 8,000 Veterans across 158 VA locations, marking a significant milestone in enhancing the quality of care and empowering Veterans.",
            "url": "https://news.va.gov/121983/smartmat-delivers-preventative-telepodiatry"
        },
        {
            "img": "assets/img/nci2i/news/nci2i-news-feetpad.jpg",
            "title": "VA Collaborates to End Veteran Limb Loss",
            "description": "VA's pioneering collaboration with Podimetrics is dedicated to eradicating diabetic limb loss among Veterans.",
            "url": "https://news.va.gov/74980/innovation-partnership-ending-diabetic-limb-loss-va/"
        }  
    ]                                         
}


// render dynamic gallery data
newsData.data.forEach(news => $('.owl-carousel.usa-card-group').append("<div class='usa-card__container item'>" + "<a class='card-group-tags' href='" + news.url + "'>" + "<div class='usa-card__media' >" + "<div class='usa-card__img'>" + "<img  src='" + news.img + "'alt='" + news.alt + "' />" + "</div>" + "</div>" + "<div class='usa-card__body'>" + "<h2 class='h4'>" + news.title + "</h2>" + "<p>" + news.description + "</p>" + "</div>" + "</a>" + "</div>")); 


// remove empty elements
$(".usa-card__body h4:empty").remove();
$(".usa-card__body p:empty").remove();
