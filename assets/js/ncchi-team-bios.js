var data = {

    "data": [
        {
            "name": "Dr. Jennifer Lee",
            "id": "Jennifer-Lee",
            "title": "Director",
            "img": "../../assets/img/ncchi/team-lee.png",
            "description": "Dr. Jennifer Lee, MD, PhD, MBA is a leader in advancing innovative solutions for Veteran care and the VA health care system. Dr. Lee is Professor of Medicine (Endocrinology, Gerontology, Metabolism) and by courtesy, of Epi and Pop'n Health, at Stanford School of Medicine. At VA Palo Health Care System (VAPAHCS), Dr. Lee is Associate Chief of Staff for Research and Development and is Interim Deputy Chief of Staff for Innovation, Advanced Analytics, and Clinical Informatics. She serves as Interim Director of both the National Center for Collaborative Healthcare Innovation (NCCHI) and the VA Convergence Center (VC2). An endocrinologist and molecular epidemiologist, Dr. Lee focuses on leveraging data, precision health, and technologies to optimize patient outcomes and health care system access/delivery. She leads LEAP, a VA national data initiative (Leveraging EHR to Advance Precision medicine), and conducts studies in VA Million Veteran Program. Her expertise spans endocrinology, diabetes, metabolism, and aging, and she is recognized for her work in population/precision health, clinical trials, and women's health."
        },
        {
            "name": "David Arreola",
            "id": "David-Arreola",
            "title": "Deputy Director",
            "img": "../../assets/img/ncchi/team-arreola.png",
            "description": "Meet David Arreola: Deputy Director of Operations. David is a seasoned information technology expert with an impressive track record that spans nearly 20 years. Beginning his career as a dedicated IT customer support representative, David" + "&#8217;" + "s passion and determination led him to ascend to the role of IT Supervisor for the VA Palo Alto Customer Support team. Eager to drive innovation in the healthcare sector, David joined the prestigious National Center for Collaborative Healthcare Innovation (NCCHI) team under the previous NCCHI Director, Dr. Thomas F. Osborne, where he now serves as the Deputy Director. David has spearheaded groundbreaking projects, including deploying the first full spectrum 5G network, implementing a pioneering 5G-enabled drone program, implementing a Smart sock fall prevention system, and developing cutting-edge holographic surgical guidance systems. Through his relentless pursuit of excellence, David continues to shape the future of healthcare technology, positively impacting patient care and paving the way for transformative advancements in the field."
        },
        {
            "name": "Terri Blumke",
            "id": "Terri-Blumke",
            "title": "Healthcare Data Scientist",
            "img": "../../assets/img/ncchi/team-blumke.png",
            "description": "Terri Blumke is a Healthcare Data Scientist with the National Center for Collaborative HealthcareInnovations (NCCHI). She has worked in VHA for 22+ years, with a background in Long Term Careand Acute Psych Nursing, Clinical Applications and Data Analytics. She has extensive experience extracting and analyzing data from the Corporate Data Warehouse (CDW), developing local and national tools for improving clinical care. Terri" + "&#8217;" + "s passion for complex data and the potential it has to transform and innovate healthcare has led her to NCCHI were she looks forward to utilizing her skills and knowledge, continuing to make a difference in the lives of Veterans and their caregivers. Terri works remotely from Minnesota, where, in her free time, she enjoys camping, gardening, and woodworking."
        },
        {
            "name": "Brian Higgins",
            "id": "Brian-Higgins",
            "title": "Innovator",
            "img": "../../assets/img/ncchi/team-higgins.png",
            "description": ""
        },
        {
            "name": "Peter Hoover, MS",
            "id": "Peter-Hoover",
            "title": "Healthcare Data Scientist",
            "img": "../../assets/img/ncchi/team-hoover.png",
            "description": "Peter Hoover, MS, is a Healthcare Data Scientist at the VA Palo Alto Health Care System" + "&#8217;" + "s National Center for Collaborative Healthcare Innovation (NCCHI). Within the past decade, he has supported the federal sector in the advancement of military and Veteran healthcare research. Mr. Hoover" + "&#8217;" + "s expertise lies in leveraging advanced analytical techniques to assess patterns of healthcare utilization and cost within both active-duty and Veteran populations, predicting negative patient outcomes, and evaluating treatment efficacy. As part of the 2019 FedHealthIT Innovation Award recipient team, Mr. Hoover has supported the development and implementation of clinical applications, ensuring cohesive and integrated healthcare services for these patients. Peter works remotely in Washington, DC, where, in his free time, tends to his ever-expanding houseplant collection."
        },
        {
            "name": "Malvika Pillai, PhD",
            "id": "Malvika-Pillai",
            "title": "Postdoctoral Research Fellow",
            "img": "../../assets/img/ncchi/team-pillai.png",
            "description": "Malvika Pillai, PhD, is a postdoctoral research fellow in the VA Big Data Scientist Training Enhancement Program (BD-STEP), jointly in the VA Palo Alto Health Care System and Stanford University in Medicine (Biomedical Informatics). She received her BS in Quantitative Biology and PhD in Health Informatics from the University of North Carolina at Chapel Hill. She is committed to developing fair artificial intelligence/machine learning (AI/ML) models that can lead to high-quality, patient-centered care. This commitment extends into her role within NCCHI, where she leverages her expertise in natural language processing to extract meaningful insights from complex clinical narratives. By analyzing clinical notes, she aims to uncover information that can improve quality of care for Veterans and their caregivers, ensuring that technological advancement translates into tangible healthcare improvement. In her free time, Dr. Pillai is a foodie who loves to travel and explore different cultures."
        },
        {
            "name": "Ilya Vrublevskiy, PMP",
            "id": "Ilya-Vrublevskiy",
            "title": "Technical Project Manager",
            "img": "../../assets/img/ncchi/team-vrublevskiy.png",
            "description": "Ilya Vrublevskiy, PMP certified, technical project manager with over 16 years of experience owning all stages of project lifecycle from inception through deployment to deliver projects in a timely manner and within budget. Skilled expert in streamlining projects through project planning, resource management, and creating best practices to ensure successful projects and solutions that innovate the business. Proven track record of leading global projects and optimizing processes across multiple teams by removing roadblocks, handling scope management, and facilitating technical tradeoffs to ensure the technical strategy is executed."
        },
        {
            "name": "Anna Ware",
            "id": "Anna-Ware",
            "title": "Healthcare Data Scientist",
            "img": "../../assets/img/ncchi/team-ware.png",
            "description": "Anna Ware is a Healthcare Data Scientist with the National Center for Collaborative Healthcare Innovations (NCCHI). As a data scientist, she has a passion for leveraging big data to address complex healthcare questions and improve the lives of our Veterans and their caregivers. Anna has worked as a researcher in VHA for over five years. With backgrounds in implementation science, rheumatology, public health, infectious disease control, psychology, and integrative medicine, Anna brings a multidisciplinary approach to her work and excels in leveraging data analytics to uncover valuable insights to enhance healthcare solutions for our Veterans. Anna works remotely from her home in Minnesota with her husband and many pets. In her free time, she enjoys hiking, camping, yoga, and weightlifting."
        }
    ]

}

data.data.forEach(bio => $('.bios-list__item-container').append("<div id='" + bio.id + "' class='grid-col-12 bio-rows grid-row flex-row'>" + "<div class='grid-col-12 tablet:grid-col-2 desktop:grid-col-2 bios-list__img'>" + "<img id='" + bio.id + "' alt='" + bio.name + " " + bio.title + "' src='" + bio.img + "' />" + "</div>" + "<div class='grid-col-12 tablet:grid-col-10 desktop:grid-col-10 bios-list__item padding-x-4 padding-bottom-6'>" + "<h2 class='margin-top-0 margin-bottom-0 h3'>" + bio.name + "</h2>" + "<h3 class='bio__title'>" + bio.title + "</h3>" + "<p>" + bio.description + "</span>" +  "</div></div>"));

$(".bios-list__item-container p:empty" ).remove();
$(".bios-list__item-container h3:empty" ).remove();

