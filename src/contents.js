export const content = {
    anchorTags: ["home", "about", "experience", "creations", "explorations"],
    links: {
        email: "mailto:rmedicharla@gmail.com",
        github: "https://github.com/rahulmedicharla",
        linkedin: "https://linkedin.com/in/rahulmedicharla",
    },
    name: "Rahul Medicharla",
    description: [{
        base: "incoming swe @ ",
        title: 'Capital One'
    }, {
        base: "prev cs student @ ",
        title: "osu"
    }],
    role: "i like designing, creating, and exploring things.",
    about: `Hey everyone!, I'm Rahul Medicharla, a recent grad from The Ohio State University & incoming SWE at Capital One. 
    I love learning about new technologies, creating new softwares, and exploring new ideas. 
    I'm also a big supporter of the intersection of healthcare and technology, autonomous driving, and a big foodie :). 
    Currently, I have experience in conducting ML/AI research at universities, supporting cloud infrastructure, and building industry scale applications.
    `,
    leadership: [
    ],
    skills: ["JS, Python, Go, Java", "TS, React, .NET, Flask", "Kuberenetes, AWS, Azure, GCP, Docker", "Pytorch, Tensorflow, Weights & Biases"],
    experience: [
        {
            role: "UG Researcher",
            company: "PCVLAB, OSU",
            date: "Jan '24 - May '25",
            description: `Selected to be apart of the highly selective Undergraduate Research Distinction Program at OSU to conduct ML research under the Photogrammetric Computer Vision Lab & culminate my findings into a published thesis. 
            I built MotivNet, a state-of-the-art emotion classification model following ViT-MAE based feature extarction & Attention-based classification to help medical institutions flag potential stroke patients by identifying anomalies on facial keypoints.`,
            stack: "PyTorch, Weights & Biases, Pandas",
            website: "https://u.osu.edu/pcvlab/",
            tag: 'pcvlab',
            img: '/osu.png',
            link: {
                uri: "https://kb.osu.edu/handle/1811/105724",
                title: "MotivNet: Emotion Classification from Facial Images as a Meta-Sapiens Task"
            }
        },
        {
            role: "SWE Intern (TIP)",
            company: "Capital One",
            date: "June - Aug '24",
            description: `Placed on Enterprise Technologies LOB; Extending Amazon EKS' Control Plane functionality by 
            developing a Kubernetes-native operator to assist with vulnerability risk mitigation in over 100 live Kubernetes clusters by scanning Docker containers 
            in deployed pods for vulnerabilities found in a CVE Database and notifying them to internal stakeholders.`,
            stack: "Go, AWS, Kubernetes, Docker",
            website: "https://www.capitalone.com/",
            tag: 'capitalone',
            img: '/capitalone.jpg'
        },
        {
            role: "SWE Intern",
            company: "WillowTree",
            date: "May - Aug '23",
            description: `Interned at a software consulting company to develop and deploy mobile and web applications to clients. 
            Worked with a cross functional team of developers, designers, and PM's to develop a customer support chat bot. 
            I utilized large language models, vector embeddings, and a SQL database to develop a custom search feature to provide fast semantic search and response and hosted them on Azure with a custom backend web API built with .NET framework.`,
            stack: "React, C#, SQL, .NET, Azure",
            website: "https://willowtreeapps.com/",
            tag: 'willowtree',
            img: '/willowtree.png',
        },
        {
            role: "3D Perception",
            company: "Buckeye Autodrive",
            date: "Jan '23 - Feb '24",
            description: `Ohio State's premiere Autodrive team aimed to develop a fully autonomous vehicle within the four year span of the SAE Autodrive Challenge amongst universities. 
            Worked on a multi classification image recognition ML model using Yolov8 and OpenCV to identify different types of traffic lights from a real-time camera feed on an autonomous vehicle while also minimizing model response latency.
            I also created a 3D dynamics module to get the real time speed, direction, and orientation of moving objects relative to our vehicle and integrated it into the pipeline.`,
            stack: "Python, Docker, OpenCV",
            website: "https://sites.google.com/view/buckeyeautodrive/home",
            tag: 'autodrive',
            img: '/buckeye_autodrive.png'
        },

    ],
    creations: [
        {
            name: "kubefs",
            date: "August 2024 - Present",
            description: `a cli tool meant to automate the creation, testing, and deployment of full stack applications onto kubernetes clusters`,
            stack: "Go, Kubernetes, Helm, Docker",
            github: "https://github.com/rahulmedicharla/kubefs",
            img: "/kubefs.png",
            data: 'kubefs_demo.png',
        },
        {
            name:"freetrack",
            date: "March - May 2024",
            description: `an out-of-box algorithmic cv object tracking software that is natively brightness, scale, and rotation invariant`,
            stack: "Python, OpenCV, Numpy, Pandas",
            github: "https://github.com/rahulmedicharla/Generalized-CV-Tracking-Algorithm",
            img: "/freetrack.png",
            data: 'freetrack_demo.png'
        },
        {
            name: "smart safety",
            date: 'Sep - Nov 2023',
            description: `hackathon - a mobile safety app that utilizes K-means on crime data & realtime crowd-sourcing to route users safely`,
            stack: "TS, Python, React Native, Firebase, Scikit-Learn, Flask",
            github: "https://github.com/rahulmedicharla/smart-safety",
            live: "https://drive.google.com/file/d/1YNlhIwmHPmjs9tFJzJjEdlVHB5tY4T2R/view?usp=sharing",
            img: "/smart_safety.png",
            data: 'smart_safety_demo.png'
        },
        {
            name: "evolate",
            date: 'June - July 2023',
            description: `a novel data structure powered by ML to enhance search alg performance by accounting for hidden behavioral patterns`,
            stack: "Python, Pytorch Neural Network",
            github: "https://github.com/rahulmedicharla/evolate",
            live: "https://colab.research.google.com/drive/1jwoxt-aZlwWB4daxqAiqQgNdPAIdaZV6?usp=sharing",
            img: "/evolate.png",
            data: 'evolate_demo.png'
        },
        {
            name: "mood.ai",
            date: "March - April 2023",
            description: `a tool to capture memories stored as videos as AI generated art - parsed with ML`,
            stack: "Python, React, Flask, OpenCV, ML",
            live: "https://mood-ai-coral.vercel.app/",
            github: "https://github.com/rahulmedicharla/mood.ai",
            img: "/mood_ai.png",
            data: 'mood_ai_demo.png'
        },
        {
            date: 'October 2022',
            name: "audio studio",
            description: `hackathon - a custom speech to code IDE - powered by ML - to convert spoken word into recursivly generated code`,
            stack: "Python, Speech Recognition, OOP",
            github: "https://github.com/rahulmedicharla/HackOhio2022",
            live: "https://youtu.be/uru5dw3NDaw",
            img: "/audio_studio.png",
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
