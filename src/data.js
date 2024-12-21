const myData={
    myExperience:[{
        Company:"Bradsol",
        JobTitle:"RPA Developer(intern)",
        Duration:"July,2024 - Aug,2024",
        About:["During this internship, I gained expertise in Robotic Process Automation(RPA) by developing automation scripts that optimized workflows. I learned how to use tools like Power Automate desktop, enhanced my problem-solving skills, and understood how automation impacts business efficiency. And also using OpenAI to format the data and generate the content.",
        "This experience laid the foundation for my interest in automation technologies."]
    },
    {
        Company: "Mthree",
        JobTitle: "Java Software Developer(intern)",
        Duration: "Sep,2024 - Current",
        About:["In this internship, I focused on building backend services using Java framworks. I worked on developing RESTful APIs, enhancing database management skills, and collaborating with a team to deploy scalable software solutions. Also learned frontend frameworks like Angular and done handsome practise.",
          "This role improved my understanding of software architecture, debugging, and teamwork, and solidified my interest in software development as a career."  
        ]
    }
    ],
    mySkills:[
        {
            Technical_Skills:[
                {
                    Programming_Languages: ["Java ", "Python ","JavaScript "],
                    About:"Used Java for backend development, Python for data analysis and scripting, and JavaScript for building interactive web applications."
                },
                {
                    Frameworks: ["Spring_Boot ", "React ", "Angular "],
                    About:"Utilized Spring Boot for building RESTful APIs, React for creating user interfaces, and Angular for developing single-page applications."
                },
                {
                    Databases: ["MySQL"],
                    About:"Worked with MySQL for database management and querying."
                },
                {
                    Tools: ["Power_Automate_Desktop ", "OpenAI"],
                    About:"Used Power Automate Desktop for automating workflows and OpenAI for generating content and formatting data."
                },
                {
                    Version_Control_Systems: ["Git "],
                    About:"Utilized Git for version control and collaboration."
                },
                {
                    Other:["Power_BI "],
                    About:"Used Power BI for data visualization and business intelligence."
                }
            ],
            Soft_Skills:[
                {Communication: "Good verbal and written communication skills developed through team collaborations and presentations."},   
                {Problem_Solving: "Tackled complex challenges during hackathons and coding competitions."},
                {Teamwork: "Worked effectively with teams during internships, projects, and academic tasks."},
                {Time_Management: "Balanced academic, professional, and personal responsibilities efficiently."}
            ]
        }
    ],
    myProjects: [
        {
            Title: "Road Failure Detection System",
            Description: [
                "Developed a road failure detection system using YOLOv8 algorithm, leveraging deep learning techniques to identify defects on roads.",
                "Implemented real-time alerting and notification features to inform authorities of detected road defects, enhancing road maintainence efficiency and safety."
            ],
            Project_Link:"https://www.jetir.org/papers/JETIR2405901.pdf"
        },
        {
            Title: "Automation Using PAD and OpenAI",
            Description: [
                "Automated the end-to-end process of order retrieval, validation, and document processing using Power Automate Desktop, integrating multiple third-party sites and APIs.",
                "Developed custom Python scripts for data extraction, mapping, and JSON file generation, leveraging OpenAI for enhanced data processing."
            ],
            Project_Link:""
        },
        {
            Title: "Wheel Alignment Center Web Application", 
            Description: [
                "Developed a full-stack web application for a wheel alignment center, enabling features like appointment scheduling, tire inventory management, and user feedback, with secure authentication and role-based authorization.",
                "Implemented caching using Caffeine to optimize performance and utilized transactional management for reliable appointment booking while handling concurrent requests"
            ],
            Project_Link: "https://github.com/1rithwik/WebApplication_Project"
        }
    ]
}

export default myData;
