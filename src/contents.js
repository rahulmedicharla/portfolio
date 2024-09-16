export const content = {
    anchorTags: ["home", "about", "experience", "creations", "explorations"],
    links: {
        email: "mailto:rmedicharla@gmail.com",
        github: "https://github.com/rahulmedicharla",
        linkedin: "https://linkedin.com/in/rahulmedicharla",
        twitter: "https://twitter.com/rvmedicharla"
    },
    name: "Rahul Medicharla",
    description: [{
        base: "ex swe intern @ ",
        title: 'Capital One'
    }, {
        base: "cs student @ ",
        title: "osu"
    }],
    role: "i like designing, creating, and exploring things.",
    about: `Hey everyone!, I'm Rahul Medicharla, a cs student at The Ohio State University graduating class of '25. 
    I love learning about new technologies, creating new softwares, and exploring new ideas. 
    I'm also a big supporter of the intersection of healthcare and technology, autonomous driving, and a big foodie :). 
    Currently, I have experience in conducting research at my university, supporting cloud infrastructure, building industry scale applications, and I've been getting into the world of ML and AI.
    `,
    leadership: [
        {
            title: 'Cofounder & President of OSU\'s Cooking Club',
            link: "https://activities.osu.edu/involvement/student_organizations/find_a_student_org/?i=51980e70-1887-4ec0-8849-396dc22a9f52&l=C&c=all&page=10"
        },
        {
            title: 'Tech Lead @ Google Developer Student Clubs, OSU',
            link: "https://gdsc.community.dev/the-ohio-state-university/"
        }
    ],
    skills: ["JS, Python, C#, Java, C", "React, .NET, Ruby, Flask", "Azure, GCP, Docker, SQL", "Open CV, Yolov8, ML"],
    experience: [
        {
            role: "SWE Intern (TIP)",
            company: "Capital One",
            date: "June 2024 - Present",
            description: `Placed on Enterprise Technologies LOB; Extending Amazon EKS' Control Plane functionality by 
            developing a Kubernetes-native operator to assist with vulnerability risk mitigation in over 100 live Kubernetes clusters by scanning Docker containers 
            in deployed pods for vulnerabilities found in a CVE Database and notifying them to internal stakeholders.`,
            stack: "Go, AWS EKS, Kubernetes, Docker",
            website: "https://www.capitalone.com/",
            tag: 'capitalone',
            img: '/capitalone.jpg'
        },
        {
            role: "Undergrad Researcher",
            company: "PCVLAB, OSU",
            date: "January 2024 - Present",
            description: `Developing a project to help medical institutions identify potential stroke patients by flagging the anomalies
            of face & joint kinematics from real-time camera feeds. Stroke patients experience significant physical changes, 
            which using computer vision techniques, can be identified. Using autoencoders and Meta's Sapiens CV model to 
            identify anomalies. Plan on releasing a paper on results and my experience soon.`,
            stack: "Python, OpenCV, Meta's Sapiens, Yolov8",
            website: "https://u.osu.edu/pcvlab/",
            tag: 'pcvlab',
            img: '/osu.png'
        },
        {
            role: "SWE Intern",
            company: "WillowTree",
            date: "May - August 2023",
            description: `Interned at a software consulting company to develop and deploy mobile and web applications to clients. 
            Worked with a cross functional team of developers, designers, and PM's to develop a customer support chat bot. 
            I utilized large language models, vector embeddings, and a SQL database to develop a custom search feature to provide fast semantic search and response and hosted them on Azure with a custom backend web API built with .NET framework.`,
            stack: "React, C#, SQL, .NET, Azure Cloud Services",
            website: "https://willowtree.ai/",
            tag: 'willowtree',
            img: '/willowtree.png',
        },
        {
            role: "3D Team Member",
            company: "Buckeye Autodrive",
            date: "January 2023 - February 2024",
            description: `Ohio State's premiere Autodrive team aimed to develop a fully autonomous vehicle within the four year span of the SAE Autodrive Challenge amongst universities. 
            Worked on a multi classification image recognition ML model using Yolov8 and OpenCV to identify different types of traffic lights from a real-time camera feed on an autonomous vehicle while also minimizing model response latency.
            I also created a 3D dynamics module to get the real time speed, direction, and orientation of moving objects relative to our vehicle and integrated it into the pipeline.`,
            stack: "Python, Docker, OpenCV, Yolov8",
            website: "https://sites.google.com/view/buckeyeautodrive/home",
            tag: 'autodrive',
            img: '/buckeye_autodrive.png'
        },

    ],
    creations: [
        {
            name: "generalized CV tracking",
            date: 'April - May 2024',
            description: `A generalized computer vision tracking algorithm that attempts to be rotation, scale, brightness, and background invariant 
            using non ML based computer vision techniques. The algorithm primarily works by using inherent image characteristics and statistics-based algorithms to be generalized.
            The program takes a source video and target image to search for and returns the center location of the tracked object.`,
            stack: "Python, Scipy, OpenCV",
            github: "https://github.com/rahulmedicharla/Generalized-CV-Tracking-Algorithm",
            img: "/cv_tracking.png",
            data: 'cv_tracking_demo.png'
        },
        {
            name: "evolate",
            date: 'June - July 2023',
            description: `evolate is a new data structure built to solve the problem of efficiency within search algorithms. 
            Depending on a user's behavioral patterns, Linked Lists, Sequences, Hash Maps, or Binary Search Trees may be more efficient.
            evolate is designed on a multi-modal node object and utilizing a custom Neural Network, evolate automatically tracks behavioral patterns such as insertion/deletion frequencies and search predictability to switch data structures thus optimizing efficiency.
            `,
            stack: "Python, Pytorch Neural Network",
            github: "https://github.com/rahulmedicharla/evolate",
            live: "https://colab.research.google.com/drive/1jwoxt-aZlwWB4daxqAiqQgNdPAIdaZV6?usp=sharing",
            img: "/evolate.png",
            data: 'evolate_demo.png'
        },
        {
            name: "mood.ai",
            date: 'March - May 2023',
            description: `mood.ai is an application designed to capture the essence of moments and memories as AI generated art. 
            Most memories are currently stored as pictures and videos. 
            This program decomposes that media to its essential components using Machine Learning such as Object Detection, Emotion Detection, Sentiment Analysis, Audio Detection, etc... 
            The program then uses large language and stable diffusion models to recompose the memory as AI generated art.
            `,
            stack: "Python, React, Docker, GCP, ML",
            github: "https://github.com/rahulmedicharla/mood.ai",
            live: "https://mood-ai-coral.vercel.app/",
            img: "/moodai.png",
            data: 'moodai_demo.png'
        },
        {
            date: 'October 2022',
            name: "Audio Studio (Hackathon)",
            description: `Developed a custom speech to code IDE to make programming more accessible. Won 5th place out of 1000 annual participants. 
            The program would take in natural language commands, transcribe it, and convert it to runnable python code. 
            We created a nested recursive representation of the code with CFG's and outputted text onto the custom IDE that can run functional python code through voice commands.
            `,
            stack: "Python, Speech Recognition, OOP",
            github: "https://github.com/rahulmedicharla/HackOhio2022",
            live: "https://youtu.be/uru5dw3NDaw",
            img: "/default.png",
            data: 'audio_studio_demo.png'
        },
    ],
    explorations: {
        title: "Check out some articles I find interesting!",
        content: [
            {
                section: "healthcare & technology",
                content: [
                    {
                        title: "The impact of health information technology on patient safety",
                        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5787626/",
                        description: "This article discusses the impact of technology on healthcare and how it's changing the way we approach medicine."
                    }
                ]
            },
            {
                section: "art & culture",
                content:  [
                    {
                        title: "AI vs Art: The Future of Creativity",
                        link: "https://tech.cornell.edu/news/ai-vs-artist-the-future-of-creativity/",
                        description: "A great article on the future of AI and art and its conflicting ideas about the creative industry."
                    },
                    {
                        title: "Food is a Universal Language",
                        link: "https://www.faseb.org/diversity-equity-and-inclusion/food-is-a-universal-language",
                        description: "Food is a language every human understands. It's something that is deeply rooted in culture, history, and something that connects us all."
                    },
                ],
            },
            {
                section: "autonomous vehicles",
                content: [
                    {
                        title: "Automated Vehicles, the Driving Brain, and Artificial Intelligence",
                        link: "https://www.mckinsey.com/industries/automotive-and-assembly/our-insights/autonomous-drivings-future-convenient-and-connected",
                        description: "This article discusses the future of autonomous vehicles and the interconnected features it could provide."
                    },
                ],
            },
        ]
    }
}
