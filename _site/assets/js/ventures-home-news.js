var newsData = {

    "data": [
        {
            "img": "../assets/img/ideas/news/ideas-news-1.png",
            "alt": "Person speaking on stage",
            "title": "Digital Stockpile and Response Network",
            "description": "VA Ventures is collaborating with the FDA to develop a novel mechanism for facilitating industry collaboration during critical supply chain disruptions to provide supply chain resilience. Utilizing the archiving of standardized, digital designs, the goal of the Digital Stockpile and Response Network is to rapidly increase capacity to meet surges in demand, bolstering continuity of care by providing clinicians and their patients critical goods during disruptions.",
            "tag": "",
            "url": "https://www.fda.gov/about-fda/domestic-mous/mou-225-23-008"
        },
        {
            "img": "../assets/img/ideas/news/ideas-news-2.png",
            "alt": "Two health professionals scanning a QR code with a phone",
            "title": "Ambulatory Robots",
            "description": "Robots have the potential to revolutionize patient care and hospital operations while easing staff shortages and allowing providers to focus on care delivery. Delivering medications from the pharmacy to the hospital or bringing samples from the hospital and clinics to the laboratory are both potential use cases for robots. VA Ventures, in collaboration with SimVET, is embarking on a new project to centralize the onboarding of robotic systems within VA, giving us the power to shape robot development to suit VA needs and leading robot integration within health care systems.",
            "tag": "",
            "url": "https://www.innovation.va.gov/simlearn/views/portfolios/simvet.html"
        },
        {
            "img": "../assets/img/ideas/news/ideas-news-3.png",
            "alt": "Panel of people sitting in chairs on a stage",
            "title": "BioBone personalized grafts for bone repair",
            "description": "VA Ventures has the capability to 3D-print biologic materials and is working on developing a 3D printed patient-specific, living and vascularized bone graft. This bone graft will improve outcomes compared to allogenic or synthetic grafts, while eliminating the need to harvest a donor autograft from patients.",
            "tag": "",
            "url": "https://www.frontiersin.org/articles/10.3389/fbioe.2022.838415/full"
        },
        {
          "img": "../assets/img/ideas/news/ideas-news-4.png",
          "alt": "Person speaking on stage",
          "title": "OR2050: Test Bed for Safety and Efficacy of Medical Device Innovations",
          "description": "OR2050 is a fully functioning hybrid operating room enabled with 5G, digital twinning and immersive technology, and additional plug and play capabilities for the testing of new equipment. It will be used to:\n1. Develop testing protocols of interoperable monitoring equipment, immersive technology and 5G networks.\n2. Teach and train VA staff.\n3. Accelerate medical device development.\n4. Iterate on operating room physical layouts to improve workflow, increase adoption of new technologies, and shrink the footprint to one that is portable to rural environments.",
          "tag": "",
          "url": "../assets/documents/ideas/DJ-Scanner.pdf"
        }
        
    ]                                         
}

// Render dynamic gallery data
newsData.data.forEach(news => {
    $('.owl-carousel.usa-card-group').append(
      `<div class="usa-card__container item">
        <a class="card-group-tags" href="${news.url}">
          <div class="usa-card__media">
        
          </div>
          <div class="usa-card__body margin-top-105">
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
