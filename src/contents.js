export const content = {
    anchorTags: ["home", "about", "experience", "creations", "articles"],
    links: {
        email: "mailto:medicharla.2@osu.edu",
        github: "https://github.com/rahulmedicharla",
        linkedin: "https://linkedin.com/in/rahulmedicharla",
        twitter: "https://twitter.com/rvmedicharla"
    },
    name: "Rahul Medicharla",
    description: "student @ osu",
    role: "i like designing, creating, and exploring things.",
    about: `Hey everyone!, I'm Rahul Medicharla, a cs student at The Ohio State University graduating class of '25. 
    I love learning about new technologies, creating new softwares, and exploring new ideas. 
    I'm also a big supporter for autonomous driving and a big foodie :). 
    Currently, I have experience in building industry scale applications and I've been getting into the world of big data and generative AI.
    `,
    leadership: 'Cofounder/Treasurer of OSU\'s Cooking Club',
    skills: ["JS, Python, C#, Java, C", "React, .NET, Ruby, Flask", "Azure, GCP, Docker, SQL", "ML, Open CV, AI"],
    experience: [
        {
            role: "SWE Intern",
            company: "WillowTree",
            date: "May 2023 - current",
            description: `Currently interning at a software consulting company to develop and deploy mobile and web applications to clients. 
            Working with a cross functional team of developers, designers, and PM's to develop a customer support chat bot. 
            I'm utilizing large language models, vector embeddings, and an SQL database to develop a custom search feature to provide fast semantic search and response and hosted these capabilities on Azure with a custom backend web API built upon the .NET framework.`,
            stack: "React, C#, SQL, .NET, Azure",
            website: "https://willowtree.ai/",
            tag: 'willowtree',
            img: '/willowtree.png'
        },
        {
            role: "3D Team Member",
            company: "Buckeye Autodrive",
            date: "Jaunary 2023 - current",
            description: `A member on Ohio State's premiere Autodrive team aimed to develop a fully autonomous vehicle within the four year span of the SAE Autodrive Challenge amongst universities. 
            I tested and visualized a 3D Object Tracking model to track vehicles and pedestrians. 
            I also created a 3D dynamics module to get the real time speed, direction, and orientation of moving objects relative to our vehicle and integrated it into the pipeline.`,
            stack: "Python, Docker, OpenCV, ML",
            website: "https://car.osu.edu/buckeye-autodrive",
            tag: 'autodrive',
            img: '/buckeye_autodrive.png'
        },
        {
            role: "Application Dev Intern",
            company: "TOYMAKERS",
            date: "June 2022 - August 2022",
            description: `Developed Bubble, a React Native application to make event organization with friends simple. 
            Displays the real-time location of your friends and current events onto a map using Google Cloud's realtime database and Google Places API. 
            This unique platform enables meeting new people through a unique friends of friends RSVP mechanism for events.`,
            stack: "React Native, GCP, Redux",
            website: "https://toymakers.fun/",
            tag: 'toymakers',
            img: '/toymakers.png'
        }
    ],
}