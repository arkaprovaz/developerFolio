/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Arkaprova Deb",
  title: "Hello World, I'm Arkaprova",
  subTitle: emoji(
    "A Data Scientist 🚀 having professional experience in the field of Machine Learning and Internet of Things"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1s7TYvQ08TyntdtZ1GN1mnJdDUwuVnjzy/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/arkaprovaz",
  linkedin: "https://www.linkedin.com/in/arkaprovaz/",
  gmail: "arkaprova.deb97@gmail.com",
  facebook: "https://www.facebook.com/arkaprovaz",
  instagram: "https://www.instagram.com/arkaprovaz",
  twitter: "https://www.twitter.com/arkaprovaz",
  youtube: "https://youtube.com/arkaprovadeb",
  spotify:
    "https://open.spotify.com/user/22kyutzxt3xrecqf675ad4qja?si=fnasvdwrthionwkkbdcwvw",
  devmesh: "https://devmesh.intel.com/users/arkaprova-deb",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop and deploy end-to-end Statistical & Machine Learning model to find valuable insights from data."
    ),
    emoji(
      "⚡ Play around with a large number of structured and unstructured data on a daily basis"
    ),
    emoji(
      "⚡ Create and deploy REST APIs for various use cases using 3rd party services such as Microsoft Azure"
    ),
    emoji(
      "⚡ Tinkering around various Embedded Systems & Single Board Computers such as Raspberry Pi, Intel UP², NodeMCU"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Data Science",
      fontAwesomeClassname: "fas fa-chart-bar",
    },
    {
      skillName: "Embedded systems",
      fontAwesomeClassname: "fas fa-microchip",
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-laptop-code",
    },
    {
      skillName: "IoT",
      fontAwesomeClassname: "fas fa-wifi",
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fas fa-cloud",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift",
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux",
    },
    {
      skillName: "Computer Vision",
      fontAwesomeClassname: "fas fa-camera-retro",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
    },
    {
      skillName: "Raspberry Pi",
      fontAwesomeClassname: "fab fa-raspberry-pi",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Rapid Prototyping", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%",
    },
    {
      Stack: "Internet of Things",
      progressPercentage: "80%",
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "70%",
    },
    {
      Stack: "Data Analytics",
      progressPercentage: "80%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Data Scientist",
      company: "P360",
      companylogo: require("./assets/images/p360.png"),
      date: "April 2020 – Present",
      desc:
        "As an Associate Data Scientist, my job is to create and deploy end-to-end Machine Learning models for finding key insights from Data specific to Pharmaceutical Industry& Pharma Sales Ops.",
      descBullets: [
        "Responsible for algorithms design and modeling that typically includes Regression, Classification, Propensity Scoring, Recommendation models, Statistical Modelling.",
        "Optimizing CPU intensive scripts for deployment.",
        "Manipulation of Big Data in SQL Databases.",
      ],
    },
    {
      role: "Junior Data Scientist",
      company: "P360",
      companylogo: require("./assets/images/p360.png"),
      date: "July 2019 – April 2020",
      desc:
        "As a Junior Data Scientist I have created Machine Learning Models, Predictive Analytics, Data Visualization.",
      descBullets: [
        "Work on Python, R, SQL, and for the libraries and frameworks, it's Sci-kit Learn, TensorFlow, Microsoft Cognitive Services.",
        "Rapid Prototyping using Microsoft Azure Machine Learning, Microsoft Cognitive Service",
      ],
    },
    {
      role: "Intel Software Innovator",
      company: "Intel",
      companylogo: require("./assets/images/intel.png"),
      date: "April 2019 – Present",
      desc:
        "The Intel® Software Innovator program supports innovative, independent developers who display an ability to create and demonstrate forward-looking projects by providing them with speaking and demonstration opportunities at industry events and developer gatherings.",
      descBullets: [
        "Internet of Things",
        "Artificial Intelligence",
        "Robotics",
        "OneAPI",
      ],
    },
    {
      role: "Co-organizer",
      company: "Google Developer Group Siliguri",
      companylogo: require("./assets/images/gdg.png"),
      date: "April 2019 – Present",
      desc:
        "Organizers of Google Developer Groups are passionate leaders in their community who are dedicated to helping others learn and connect. GDG Organizers plan and host meetup events on a wide range of technical topics typically on a monthly basis in a location near them. These community organizers come with various backgrounds, from all types of companies and industries.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "arkaprovaz", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/blackspektro.png"),
      link: "http://blackspektro.com/",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Smart India Hackathon 2020 Winner",
      subtitle:
        "Winner of Smart India Hackathon 2020 organised by Ministry of Human Resource Development, India, under problem statement number LN379/PK367",
      image: require("./assets/images/sih2020.jpg"),
      footerLink: [
        {
          name: "View result",
          url: "https://evaluations.sih.gov.in/live/21",
        },
      ],
    },
    {
      title: "Intel® OneAPI Innovator",
      subtitle: "Recognised as an official Intel® OneAPI innovator",
      image: require("./assets/images/oneapi.png"),
      footerLink: [
        {
          name: "See on Linkedin",
          url:
            "https://www.linkedin.com/posts/arkaprovaz_oneapi-intelsoftwareinnovator-intelai-activity-6691423333470269440-Zzvk",
        },
      ],
    },
    {
      title: "Intel® Distribution of OpenVINO™ toolkit",
      subtitle:
        "Completed Certification on Introduction to Intel® Distribution of OpenVINO™ toolkit for Computer Vision Applications",
      image: require("./assets/images/openvino.png"),
      footerLink: [
        {
          name: "See credential on Coursera",
          url: "https://www.coursera.org/api/certificate.v1/pdf/5XBLMD7B8KVY",
        },
      ],
    },
    {
      title: "2019 Top Innovator Award",
      subtitle: "Recognised as 2019 Top Innovator by Intel",
      image: require("./assets/images/isi.png"),
      footerLink: [
        {
          name: "View on Linkedin",
          url:
            "https://www.linkedin.com/feed/update/urn:li:activity:6639522287223705600/",
        },
      ],
    },
    {
      title: "Intel Early Innovation for PC Skills",
      subtitle: "Developed Alexa Skill for Intel powered PC running Windows",
      image: require("./assets/images/isi.png"),
      footerLink: [
        {
          name: "View on Intel Devmesh",
          url:
            "https://devmesh.intel.com/projects/social-media-handling-with-alexa-voice-commands",
        },
      ],
    },
    {
      title: "Internet of Things",
      subtitle:
        "Completed Certifcation from IIT Guwahati for Internet of Things",
      image: require("./assets/images/techniche.png"),
      footerLink: [],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Some of my Publications",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://www.chitkara.edu.in/cse-can/india-gallery.php",
      title:
        "Identification of Pathological Disease in Plants using Deep Neural Networks - Powered by Intel® Distribution of OpenVINO™ Toolkit",
      description:
        "Feb 14, 2020 | Institute of Electrical and Electronics Engineers, IEEE",
    },
    {
      url: "https://www.chitkara.edu.in/cse-can/india-gallery.php",
      title: "Drug Discovery and Drug Identification using AI",
      description:
        "Feb 14, 2020 | Institute of Electrical and Electronics Engineers, IEEE",
    },
    {
      url: "https://link.springer.com/chapter/10.1007/978-3-030-42363-6_23",
      title:
        "Smart Electric Mobility: Exploring Possibilities Towards a Better India",
      description: "Mar 3, 2020 | Springer",
    },
    {
      url: "https://link.springer.com/chapter/10.1007/978-3-030-42363-6_79",
      title:
        "Smart Waste Management: A Revolutionary Step Towards a Better India",
      description: "Mar 3, 2020 | Springer",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Computer Vision using OpenCV",
      subtitle: "Developer Weekend 2019, Reva University, BLR",
      slides_url: "/",
      event_url: "https://www.developerweekend.org/",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8944992236",
  email_address: "arkaprova.deb97@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "arkaprovaz", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
