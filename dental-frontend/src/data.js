const services = [
    {
        id: 1,
        image: "/assets/toothbrush-new.png",
        title: "Preventative Dentistry",
        description: "School Exams, Routine Exams, Digital X-rays, Cleanings, Fluoride, Dental Sealants, Deep Cleanings, and much more... "
    },
    {
        id: 2,
        image: "/assets/restorative-new.png",
        title: "Restorative Dentistry",
        description: "Treatments include: White Fillings, Crowns, Bridges, Dentures & Partials, Root Canals, and much more…"
    },
    {
        id: 3,
        image: "/assets/cosmetic-new.png",
        title: "\xa0\xa0" + "Cosmetic Dentistry",
        description: "Treatments include:  Cosmetic White Fillings, Bonding, Veneers, Cosmetic Crowns and much more…"
    },
    {
        id: 4,
        image: "/assets/implant-new.png",
        title: "\xa0\xa0\xa0" + "Implant Dentistry",
        description: "Replace cracked, broken or missing teeth with dental implants.  Get a FREE consultation!"
    }
]


const servicesHome = [
    {
        id: 1,
        image: "/assets/whitening-new.png",
        title: "Teeth Whitening",
        description: "Teeth whitening or bleaching is a common and popular process used to whiten teeth. Some people get their teeth bleached to make stains disappear, while others just want a whiter smile."
    },
    {
        id: 2,
        image: "/assets/emergency-icon-new.png",
        title: "Emergency",
        description: "Dental emergencies are promptly treated at North Ave Dental Associates.  Whether you have dental pain, a chipped tooth, a lost or broken filling or denture partial repair, we can help."
    },
    {
        id: 3,
        image: "/assets/sedation-dentistry.png",
        title: "Sedation",
        description: "Our North Ave Dental Associates offer oral sedation for dental patients.  patients who request sedation include patients who are anxious about their dental treatment &amp; patients having dental surgery."
    },
    {
        id: 4,
        image: "/assets/invisalign-new.png",
        title: "Invisalign",
        description: "Invisalign is now being offered at North Ave Dental Associates in West chicago.  It is the affordable way to straighten teeth for teenagers and adults. We have convenient payment options to fit your budget."
    }
];

/*DOCTORS DATA*/

const doctorInfo = [
    {
        id: "monim",
        title: "Dr. Monim Albazzaz",
        image: "/assets/monim-pic.jpg",
        description1: "Dr. Monim Albazzaz, your West Chicago dentist, grew up in St Charles and graduated from Saint Charles North High School.  He attended the University of Illinois at Chicago for his undergraduate education and received his dental degree from Midwestern University College of Dental Medicine in Downers Grove.",
        list: ["Chicago Dental Society (CDS)", "Academy of General Dentistry (AGD)", "Illinois State Dental Society (ISDS)", "American Dental Association (ADA)"],
        description2: "He is truly dedicated to providing his patients with the highest quality of care. He is up to date with the newest advances in the dental field and takes great pride in getting to know each patient while addressing all of their dental needs.  He is also certified in Invisalign removable cosmetic braces.",
        description3: "When not providing dental services to patients, he loves to spend time with my family and friends. He enjoys exploring all the activities the city has to offer.  He is also an avid Chicago sports fan!",
        description4: "He looks forward to working with all of you."
    },
    {
        id: "salman",
        title: "Dr. Salman Javed",
        image: "/assets/javed-pic.jpg",
        description1: "Dr. Salman Javed, your West Chicago dentist is a general dentist and partners in care at North Ave Dental Associates.   He grew up in Naperville, IL and completed his undergraduate studies at Benedictine University earning a Bachelors of Science. From there, he  obtained a Masters in Arts in Biomedical Science at Midwestern University in Glendale, Arizona. prior to graduating from Midwestern University’s Dental School.  He is also certified in Invisalign removable cosmetic braces. ",
        list: ["Chicago Dental Society (CDS)", "Academy of General Dentistry (AGD)", "Illinois State Dental Society (ISDS)", "American Dental Association (ADA)"],
        description2: "His philosophy in dentistry is to foster a wonderful relationship with his patients and to understand their needs and concerns. Having a relationship built upon trust and respect, he will advise them on the best possible treatment options for their dental needs.",
        description3: "In order to become the best practitioner that he can be, he sought out knowledge about the ever-changing field of dentistry. He is committed to taking continuing education courses and learning about the latest techniques and advancement in our field.",
        description4: "When he is not in the dental office, he enjoys spending time with his wife and baby girl. He enjoys traveling and admiring the art and architecture of different places. Some of his hobbies include being outdoors, drawing, painting, and watching good movies. Mostly, he likes to enjoy life!",
        description5: "He says:  \“I can’t wait to be your provider and craft a healthy, and beautiful, smile that you want!  I really look forward to helping you with all of your dental needs and concerns.\""
    },
    {
        id: "abasin",
        title: "Dr. Abasin Safi",
        image: "/assets/safi-pic.jpg",
        description1: "Dr. Abasin Safi, your West Chicago dentist wanted to combine his love of science with his skills in artistry. He found a perfect fusion of the two in the field of dentistry. After completing his Bachelor of Science in Chemistry at the University of Illinois at Urbana-Champaign, he went on to obtain his Doctor of Dental Medicine degree at Midwestern University – Illinois in Downers Grove, IL.",
        description2: "With the ever evolving field of dentistry, Dr. Safi understands the importance of continuing education in order to keep up with the latest research and techniques to best treat the needs of his patients. Dr. Safi has advanced training in implant dentistry and oral sedation.",
        list: ["Chicago Dental Society (CDS)", "Academy of General Dentistry (AGD)", "Illinois State Dental Society (ISDS)", "American Dental Association (ADA)", "American Academy of Implant Dentistry (AAID)"],
        description3: "In his free time, Dr. Safi enjoys food adventures with his wife and friends, and always makes time to play a game of tennis."
    }
]

/*REVIEW TAB DATA*/
const reviewInfo = [
    {
        id: 1,
        description: "Dr Javed was excellent! Very professional and impressive. My entire experience was great from the moment I walked in. The office was very clean and the staff was very helpful. I would highly recommend Dr Javed for both adults and children. I will definitely be coming back and will have my entire family go to him.",
        name: "Afshan Siddiqui",
        date: "March 2020",
        image: "/assets/five-stars.png"
    },
    {
        id: 2,
        description: "I’m convinced Dr Safi has the most gentle touch! He was able to pull my tooth and put an implant with literally zero pain last week. The prices were very affordable and the service was exceptional. I looked into nearby offices and this one stood out-no surprises! I left the office And I’ve already referred 3 people.",
        name: "Ahsan Raina",
        date: "January 2020",
        image: "/assets/five-stars.png"
    },
    {
        id: 3,
        description: "I had a dental emergency recently and went to the office and Dr. Albazazz fixed my tooth.  It was a great experience.  The office was very modern and clean.  Dr. Albazazz made me feel comfortable.  He was able to fix my tooth so I could enjoy going to a friends wedding.  I would recommend him to anyone I know.",
        name: "David F.",
        date: "December 2019",
        image: "/assets/five-stars.png"
    },
    {
        id: 4,
        description: "Dr. Safi is an amazing dentist. Very caring with a soft touch. His dental treatment is exceptional with modern techniques and equipment used. Oh and who could forget TVs ON THE CEILINGS! This is a game changer and much appreciated. Office staff is very nice and helpful as well. Highly recommend Dr Safi and north ave dental associates for all your family dental needs!",
        name: "Raul Valdez",
        date: "December 2019",
        image: "/assets/five-stars.png"
    },
    {
        id: 5,
        description: "I came to this office for the 1st time. The staff was very welcoming. Office was very clean. I saw Dr. Javed. I was very impressed. He explained everything I needed to know about my teeth and backed it up with my x-rays. He was very thorough and took his time with my cleaning and exam.  He did not hurt me at all. I will definitely be back.",
        name: "Jesse Nava",
        date: "November 2019",
        image: "/assets/five-stars.png"
    },
    {
        id: 6,
        description: "Came in for a cleaning appointment. Actually spent some time with the dentist and he even cleaned my teeth and did a great job. Was an awesome experience. Free goodies were nice too. Dr Albazzaz was great",
        name: "Anup Reddy",
        date: "June 2019",
        image: "/assets/five-stars.png"
    },
    {
        id: 7,
        description: "Love this dental office- it was fast, clean, and efficient! Dr. Javed was amazing and really made sure I was taken care of. He really took the time to explain the problem with my wisdom teeth and what the best plan was for me! His expertise shined through when he did my extractions and I did not feel a thing and recovered quickly! He also made sure to follow up with me after the extractions to make sure I was doing well! Thank you so much North Avenue Dental! I highly recommend this practice!",
        name: "Zura Liaqat",
        date: "May 2019",
        image: "/assets/five-stars.png"
    },
    {
        id: 8,
        description: "I went in for my exam and cleaning appointment recently, and I'm very impressed with the care I received from everyone. The whole treatment was very thorough and gentle. I trust the doctors here and I will definitely come back for all of my dental needs.",
        name: "Salma Faraz",
        date: "April 2019",
        image: "/assets/five-stars.png"
    },
    {
        id: 9,
        description: "LOVE THIS DENTIST OFFICE! They make you  extremely comfortable and really do have the best interest for you. The way they treat you, talk to you really make you feel like I have no problem going to the dentist. THEY DESERVE MORE STARS! I HIGHLY recommend North Ave Dental Associates!",
        name: "Jillian Schaul",
        date: "April 2018",
        image: "/assets/five-stars.png"
    },

]

/*NEW PATIENT DATA*/

const patientLeft = [
    {
        id: 1,
        header: "Accepting New Patients",
        description1: "North Ave Dental Associates is now accepting new patients. We are In-Network with most Dental PPO insurance plans.",
        list: [],
        image: "/assets/quip-toothbrush.jpg",
        image2: "/assets/new-patient-offer.jpg",
        isApplicable: false
    },
    {
        id: 2,
        header: "What Should you Bring to your First Appointment",
        description1: "In preparation for your first visit at North Ave Dental Associates, please bring the following to your dental appointment:",
        list: ["Picture ID", "Dental Insurance", "Completed new patient forms"],
        image: "/assets/appointment.jpg",
        isApplicable: true
    }
]

const patientRight = [
    {
        id: 1,
        header: "What will happen at my first Appointment?",
        description1: "Your first visit will last approximately 1.5 hours.  The dentists at North Ave Dental Associates will review your dental and medical history and evaluate the overall health of your teeth and gums. We will also review our office policies with you.  The dentists will do a comprehensive dental exam, take digital x-rays, complete a head and neck cancer screening, a periodontal evaluation and a baseline dental charting.  You may also receive a routine cleaning on your first appointment depending on your overall periodontal condition.",
        description2: "The dentists will discuss the current state of your dental health and outline your treatment planning options to complete any dental work you may need or cosmetic dentistry you may want.",
        image: "/assets/happy-patient.jpg"
    }
]


const officeData = [
    {
        id: 1,
        header: "COMFORT",
        description1: "Our West Chicago dental office offers a variety of patient amenities including: gourmet coffee service, TV in the treatment rooms and sedation. The skilled dentists and staff will make your visit as easy and relaxing as possible! We remodeled our office with your comfort in mind.",
        button: "Learn More About Sedation",
        image: "/assets/comfort-pic.jpg"
    },
    {
        id: 2,
        header: "CONVENIENCE",
        description1: "We have family friendly office hours. Our West Chicago dental office has evenings and Saturday dental appointments to fit your schedule. We are conveniently located at North Avenue and Rt 59 in West Chicago.",
        button: "Contact Us",
        image: "/assets/convenience.jpeg"
    },
    {
        id: 3,
        header: "STATE-OF-THE-ART-DENTAL OFFICE",
        description1: "Our West chicago dental office uses the latest digital dental technology available. The office uses sophisticated dental practice management software, digital dental x-rays and intra-oral camera and sterilization equipment.",
        image: "/assets/panoramic.jpg"
    },
    {
        id: 4,
        header: "AFFORDABLE DENTISTRY",
        description1: "Dental services at North Ave Dental Associates are always affordable. North Ave Dental Associates is “In Network” with most PPO dental insurance plans in their West Chicago dental office. ",
        description2: "The staff will help you find an affordable dental payment plan that fits your needs. Our payment options include 0% financing with Care Credit. Call us at (630) 231-4500 to discuss the right payment option for you and your family. ",
        description3: "Get the maximum insurance benefit allowable for your dental treatment. We will work with you and your insurance company to process your claims. Unfortunately, your dental insurance company will only pay for a portion of your dental care. Most cosmetic procedures and whitening will not be covered. We will estimate your portion and ask you to pay only your patient portion at the time of service.",
        description4: "We accept Visa, MasterCard, American Express and Discover cards for payment.",
        image: "/assets/family.jpeg"
    },
]

const serviceNav = [
    {
        id: 1,
        class: "preventative",
        title: "Preventative Dentistry"
    },
    {
        id: 2,
        class: "deep_cleanings",
        title: "Deep Cleanings/Scaling"
    },
    {
        id: 3,
        class: "emergency_dentistry",
        title: "Emergency Dentistry"
    },
    {
        id: 4,
        class: "invisalign",
        title: "Invisalign"

    },
    {
        id: 5,
        class: "dentures",
        title: "Dentures/Partials"
    },
    {
        id: 6,
        class: "extractions",
        title: "Extractions"
    },
    {
        id: 7,
        class: "nightguard",
        title: "Nightguards/TMJ Treatment"
    },
    {
        id: 8,
        class: "sedation",
        title: "Sedation"
    },
    {
        id: 9,
        class: "restorative",
        title: "Restorative Dentistry"
    },
    {
        id: 10,
        class: "implants",
        title: "Dental Implants"
    },
    {
        id: 11,
        class: "fillings",
        title: "Tooth-Colored Fillings & Crowns"
    },
    {
        id: 12,
        class: "teeth-whitening",
        title: "Teeth Whitening"
    }

]

// Takes on a left, right pattern of information for the services tab
const serviceData = [
    //Preventative sub-tab
    {
        id: 1,
        header: "Dental Exams & School Exams",
        description1: "North Ave Dental Associates strive to prevent dental disease before it happens. Our North Ave Dental Associates provide a variety of dental examinations at our West Chicago dental office for adults and children.",
        list: ["Comprehensive Dental Examination (For new patients)", "School Exams (including the state required form)", "Routine Dental Examinations (6 month visits)", "Limited Examinations (For emergency visits)", "Periodontal Examinations (For patients with periodontal disease)"],
        image: "/assets/dental-exam.png"
    },
    {
        id: 2,
        header: "Digital X-Rays",
        description1: "Dr Albazzaz, Dr Javed and Dr Safi bring the most up to date dental technology to their West Chicago practice. They use digital x-rays which require less radiation and provide improved diagnostic quality to every patient appointment The doctors are happy to share their findings with you by showing you your dental x-rays on a large computer screen. They use the Kavo Op3 panorex and 3D digital imaging machine to take x-rays of the teeth, jaws and supporting structures. There are many advantages of this technology including lower x-radiation, a more thorough review of the dental hard and soft tissues, and much more...",
        list: [],
        image: "/assets/panoramic.jpg"
    },
    {
        id: 3,
        header: "Dental Cleanings",
        description1: "Our dentists treat patients with healthy gums and patients who inflammation and other periodontal diseases. Our staff agree with the American Dental Association guidelines for dental cleanings. We want all patients to visit the dentist for their dental cleanings at least twice a year. Here are some of the procedures we offer:",
        list: ["Routine dental cleanings", "Deep scaling and root planing", "Periodontal surgery"],
        image: "/assets/cleanings.jpg"
    },
    {
        id: 4,
        header: "Fluroide Treatment",
        description1: "The staff at North Ave Dental Associates believe that everyone should have routine professional fluoride treatments.",
        description2: "For patients without dental caries, the fluoride will help keep their teeth caries free with good oral hygiene at home. For patients with a high rate of dental caries, fluoride will help strengthen their teeth so they will be less prone to tooth decay with good home care",
        list: [],
        image: "/assets/fluoride.jpg"
    },
    {
        id: 5,
        header: "Oral Hygiene Instruction",
        description1: "Home care is an important part of maintaining healthy teeth and gums. Our staff are happy to review proper brushing & flossing techniques as well as other dental home care solutions that will prevent dental disease.",
        list: ["Brushing", "Flossing", "Periodontal Surgery"],
        image: "/assets/oral-hygiene.jpg"
    },
    //Emergency sub-tab
    {
        id: 6,
        header: "Get Relief For Your Dental Emergency!",
        description1: "We have an emergency dentist available to treat your dental emergency. After a dental examination and a digital dental x-ray (if needed), we will give you a diagnosis and propsed treatment to get you back to your optimum dnetal health.",
        list: ["New Patient Special- $1 Emergency Dental Exam", "Includes dental exam and digital dental x-ray (treatment charge not included)"],
        image: "/assets/emergency-pic2.jpg"
    },
    {
        id: 7,
        header: "Choose North Ave Dental Associates for Your Dental Emergency Treatment",
        list: ["Convenience -We have evening hours so you can schedule an appointment after work.",
            "Added Comfort -We offer sedation to our patients.",
            "Faster Treatment -We see emergencies promptly. Most of our patients obtain relief in the same appointment.",
            "Affordable -We are \"IN NETWORK \" with most PPO insurance plans. We also offer easy payment plans to fit every budget."
        ],
        button: "Contact Us",
        image: "/assets/emergency-pic1.jpg"
    },
    //Invisalign sub-tab
    {
        id: 8,
        header: "Get Invisalign in West Chicago",
        description1: "Invisalign is now being offered at North Ave Dental Associates in West Chicago. Our dentists are certified in Invisalign and are skilled at creating the smile you have always wanted.",
        list: [],
        image: "/assets/invisalign-pic1.jpg"
    },
    {
        id: 9,
        header: "Why choose Invisalign?",
        list: ["Cosmetic Appearance -Invisalign are clear and barely noticeable. You will not have metal in your mouth.",
            "Added Comfort -These clear braces are removable. They can be taken out during meals or whne you are drinking liquids other than water",
            "Faster Treatment -These aligners reduce the time you are wearing braces to 12 to 18months in most cases!",
            "Affordable-Invisalign at North Ave Dental Associates is affordable. We offer easy payment plans to fit every budget."
        ],
        image: "/assets/invisalign-pic2.jpg"
    },

    //Dentures sub-tab
    {
        id: 10,
        header: "Get Snug Fitting Dentures & Partial Dentures in West Chicago",
        description1: "Dentures are removable appliances that can replace missing teeth and help restore your smile. If you’ve lost all of your natural teeth, whether from gum disease, tooth decay or injury, replacing missing teeth will benefit your appearance and your health. That’s because dentures make it easier to eat and speak better than you could without teeth—things that people often take for granted.",
        list: [],
        image: "/assets/dentures-pic1.jpg"
    },
    {
        id: 11,
        header: "Why Choose Us for Your Dentures/Partials?",
        list: [
            "We Offer 4 Types -We offer 4 types of dentures: Full dentures, partial dentures, Implant retained dentures & Immediate dentures.",
            "We Repair -North Ave Dental Associates repair dentures and partials, replace dentures and partials and reline dentures and partials. We handle emergencies too!",
            "We will Enhance Your Appearance -When you loose your teeth, facial muscles can sag, making you look older. We can help fill out the appearance of your face and profile. They can be made to closely resemble your natural teeth Or we can give you a whiter brighter smile. You can choose at our West Chicago dental office.",
            "Convenient & Accessible Care -Our West Chicago dental office has evening hours and Saturday appointments to fit your schedule.",
            "Affordable -Our services are affordable. We accept patients with and without dental insurance. We offer easy payment plans to fit every budget. We are In Network with most dental PPO insurance plans."
        ],
        button: "Contact Us",
        image: "/assets/dentures-pic2.jpg"
    },
    //Extractions sub-tab
    {
        id: 12,
        header: "What is an Extraction?",
        description1: "When patients hear about extractions, they commonly asume that dentists are in fact \"pulling\" teeth and that it is painful! This couldn't be further from the truth. An extraction is a controlled loosening of a tooth and the with numbing medication provided the procedure is painless. We offer sedation to patients who request it as well.",
        list: [],
        image: "/assets/extraction-pic1.jpg"
    },
    {
        id: 13,
        header: "What Should I Expect?",
        description1: "Patients very often remark that having an extraction performed was much simpler and more comfortable than they ever expected. So what can you expect during your extraction:",
        list: [
            "Numbness/Anesthetic -We will take thorough measures to make sure your as numb as possible with the use of dental anesthetics. We won't begin the extraction until you feel comfortable and numb enough to begin.",
            "Pressure -We will carefully push and apply pressure to help loosen the tooth so it can be removed safely. However, you won't feel pain.",
            "Noises -Badly damaged teeth may break into smaller segments...so you may hear some crackling sound.",
            "Sectioning -Sometimes it's easier to extract a large tooth by cutting it in half or smaller segments. You will be advised if using a drill is necessary to help us during an extraction.",
            "Post-Operative Instructions -Instructions on what to do following the extraction will be provided along with a bag of gauze to apply pressure to the extraction site.",
            "Pain meds and/or antibiotics(if needed) - Each extraction is different. We may prescribe some medications to help you with the healing process."
        ],
        image: "/assets/extraction-pic2.jpg"
    },
    //Sedation sub-tab
    {
        id: 14,
        header: "Sedation Dentistry Options at North Ave Dental Associates",
        description1: "Your comfort is our primary concern. Dr. Albazzaz, Dr. Javed and Dr. Safi provide sedation for patients who feel anxious about coming to the dentist. Our North Ave Dental Associates offer sedation for dental patients who request it. ",
        description2: "Our general dentists have completed professional education programs to qualify them to offer sedation. Our dentists are knowledgeable about the pharmacology of the drugs currently available along with their risks and benefits.",
        description3: "The doctors will review your complete medical history prior to prescribing any form of sedation. The most common oral pills used in sedation dentistry are Valium, Halcion, Xanax, or Ativan. These drugs decrease anxiety by binding and toning down the feeling of fear and anxiety.",
        list: [],
        image: "/assets/sedation-pic1.jpg"
    },
    {
        id: 15,
        header: "What Kind of Sedation do We Offer?",
        description1: "Our office offers oral sedation. Ask our dentists if you are a candidate. They will be happy to discuss your options with you.",
        list: [],
        image: "/assets/sedation-pic2.jpg"
    },
    {
        id: 16,
        header: "Important Inquiries For Sedation Patients",
        description1: "Please let us know if you have any of the following conditions: known allergy to the drug, narrow-angle glaucoma, pregnancy, severe respiratory disease (COPD), congestive heart failure (CHF), impaired kidney or liver function, depression/bipolar disorder/psychoses, chronic bronchitis and some other conditions.",
        description2: "Please provide a list of medications with their dosage because there may be some drug interaction issues.",
        description3: "Please bring an escort with you to your dental appointment. You should not drive or travel alone while you are taking sedation dentistry medications. Make sure your escort stays with you, even if you traveled by bus or foot! It’s easy to become disorientated.",
        list: [],
        image: "/assets/sedation-pic3.png"
    },
    //Restorative sub-tab
    {
        id: 17,
        header: "Goal of Restorative Dentistry",
        description1: "The goal of restorative dentistry is to preserve and repair natural teeth where ever possible. Our North Ave Dental Associates will consider your overall health, the health of your mouth, your bite, your bone support and your desired aesthetic. You now have many options for tooth restorations including: white composite fillings, porcelain, veneers, dental bonding, crowns, bridges and much more.....",
        list: [],
        image: "/assets/restorative-pic1.jpg"
    },
    {
        id: 18,
        header: "Why Choose Us for your Restorative Dentistry?",
        description1: "",
        list: [
            "We Offer 4 Type-We offer evidenced based restorations including cosmetic fillings, dentures, partials, and dental implants",
            "We Repair-We will try to save as much tooth structure as possible. When possible, we will repair and replace your existing restoration and tooth surface missing due to decay, age or wear.",
            "We will Enhance Your Appearance -We will work with you to select the tooth color and restoration that resembles your natural tooth or we can give you a whiter brighter smile. You can choose at our West Chicago dental office.",
            "Convenient & Accessible Care -Our West Chicago dental officehas evening hours and Saturday appointments to fit your schedule.",
            "Affordable-Our services are affordable. We accept patients with and without dental insurance. We offer easy payment plans to fit every budget. We are In Network with most dental PPO insurance plans."
        ],
        image: "/assets/restorative-pic2.jpeg"
    },
    //Implants sub-tab
    {
        id: 19,
        header: "Dental Implants in West Chicago",
        description1: "Get dental implants in West Chicago at North Ave Dental Associates. Our dentists have completed extensive professional education programs prior to bringing implants to this West Chicago dental office. ",
        description2: "The surgical placement of implants is a natural addition to the dental services that our dentists already provides in West Chicago IL.",
        list: [],
        image: "/assets/implant-pic1.jpeg"
    },
    {
        id: 20,
        header: "Are Dental Implants Safe?",
        description1: "Our dentists use digital x-ray imaging to guide the placement of your implants. They have been used for more than 30 years and are fast becoming the standard of care for tooth replacement.",
        description2: "Dr Albazzaz, Dr Javed and Dr Safi bring the most up to date dental technology to their West Chicago practice. They use 3D digital x-rays which require less radiation and provide improved diagnostic quality to every patient appointment. The doctors are happy to share their findings with you by showing you your dental x-rays on a large computer screen.",
        list: [],
        image: "/assets/implant-pic2.jpg"
    },
    {
        id: 21,
        header: "What are the Benefits of Implants",
        description1: "",
        list: ["Improved Aesthetics", "Improved function", "Increased self-confidence", "Preserved bone structure", "Easy to clean and maintain"],
        image: "/assets/implant-pic3.jpg"
    },
    {
        id: 22,
        header: "Are Dental Implants Affordable?",
        description1: "We are In Network with most PPO dental insurance plans. North Ave Dental Associates also has 0% financing with CareCredit. ",
        description2: "For patients without dental insurance, we offer dental coupons on our website.",
        description3: "Contact North Ave Dental Associates for your consultation at (630) 231-4500.",
        list: [],
        image: "/assets/implant-pic4.jpg"
    },
    //Cosmetic sub-tab
    {
        id: 23,
        header: "White Composite Restorations",
        header2: "Bonding/Tooth-Colored Fillings",
        header3: "Crowns",
        description1: "From subtle changes to major repairs, our skilled dentists can perform a variety of procedures to improve your smile. There are many techniques and options to treat teeth that are discolored, chipped, misshapen or missing. We can reshape your teeth, close spaces, restore worn or short teeth or alter the length of your teeth. Common procedures include bleaching (teeth whitening), bonding, crowns, veneers and reshaping and contouring. ",
        description2: "These improvements are not always just cosmetic. Many of these treatments can improve oral problems, such as your bite.",
        description3: "Bonding is tooth-colored material used to fill in gaps or change the color of teeth. Requiring a single office visit, bonding can last several years. Bonding is more susceptible to staining or chipping than other forms of restoration. When teeth are chipped or slightly decayed, bonded composite resins may be the material of choice. Bonding also is used as a tooth-colored filling for small cavities. Additionally, it can be used to close spaces between teeth or cover the entire outside surface of a tooth to change its color and shape.",
        description4: "Crowns, also known as caps, cover a tooth to restore it to its normal shape and appearance. Due to their cost, they are used in cases where other procedures will not be effective. Crowns have the longest life expectancy of all cosmetic restorations, but are the most time-consuming.",
        list: [],
        image: "/assets/composite-pic1.jpg"
    },
    {
        id: 24,
        header: "Contouring and Reshaping",
        description1: "Tooth reshaping and contouring, is a procedure to correct crooked teeth, chipped or irregularly shaped teeth or even overlapping teeth in a single session. Tooth reshaping and contouring, is commonly used to alter the length, shape or position of your teeth. Contouring teeth may also help correct small problems with bite. It is common for bonding to be combined with tooth reshaping.",
        description2: "This procedure is ideal for candidates with normal, healthy teeth but who want subtle changes to their smile.",
        list: [],
        image: "/assets/composite-pic2.jfif"
    },
    {
        id: 25,
        header: "Veneers",
        description1: "Veneers are thin pieces of porcelain or plastic placed over the front teeth to change the color or shape of your teeth. Veneers are used on teeth with uneven surfaces or are chipped, discolored, oddly shaped, unevenly spaced or crooked. Little or no anesthesia is needed. Veneers are used to treat some of the same problems as bonding.",
        description2: "This treatment is an alternative to crowns. The procedure requires your dentist to take an impression of your tooth. Before the custom-made veneer is cemented directly onto the tooth, we will lightly buff the tooth to compensate for the added thickness of the veneer. Once the cement is between the veneer and your tooth, a light beam is used to harden it. Porcelain veneers require more than one visit because they are fabricated in a laboratory. Veneers have a longer life expectancy and color stability than bonding.",
        list: [],
        image: "/assets/composite-pic3.jpg"
    },
    {
        id: 26,
        header: "Which Procedure is Right for Me?",
        description1: "The West Chicago dentists at North Ave Dental Associates can answer any questions you may have about techniques used to improve your smile. The condition of your teeth and desired result you want often dictates the best procedure.",
        list: [],
        image: "/assets/composite-pic4.jfif"
    },
    {
        id: 27,
        header: "Oral Hygiene Instruction",
        description1: "Home care is an important part of maintaining the longevity of your restorations. Our staff are happy to review proper brushing & flossing techniques as well as other dental home care solutions that will prevent decay.",
        list: [],
        image: "/assets/composite-pic5.jpg"
    }

]

const hours = [
    { id: 1, day: "Sunday", time: "Closed" },
    { id: 2, day: "Monday", time: "10-4" },
    { id: 3, day: "Tuesday", time: "10-4" },
    { id: 4, day: "Wednesday", time: "10-4" },
    { id: 5, day: "Thursday", time: "Closed" },
    { id: 6, day: "Friday", time: "10-6" },
    { id: 7, day: "Saturday", time: "9-2" },

]
export { services, servicesHome, serviceNav, doctorInfo, reviewInfo, patientLeft, patientRight, officeData, serviceData, hours };