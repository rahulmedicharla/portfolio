const header = {
    // all the properties are optional - can be left empty or deleted
    title: 'Home',
  }
  
const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Rahul Medicharla',
    role: 'Student @ The Ohio State University \'25',
    description:
      'Hey everyone!, I\'m Rahul Medicharla, a student at The Ohio State University graduating class of \'25. I enjoy learning about new technologies and utilizing them to develop applications. I have experience in full stack development using web dev frameworks such as React, .NET core, Ruby, Flask, and back end cloud services such as SQL, Google Cloud Platform and Azure. I\'m also an AI enthusiast and have experience in training ML models and utilizing object and video detection and recognition.',
    social: {
      linkedin: 'https://www.linkedin.com/in/rahul-medicharla-478a6a229',
      github: 'https://github.com/rahulmedicharla',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'mood.ai',
      description:
        'mood.ai is an application designed to capture the essence of moments and memories as AI generated art. Most memories are currently stored as pictures and videos. This program decomposes that media to its essential components using Machine Learning such as Object Detection, Emotion Detection, Sentiment Analysis, Audio Detection, etc... Then program then uses OpenAI\'s ChatGPT and DALLE-2 API\' to recompose the memory as AI generated art.',
      stack: ['Python', 'Machine Learning', 'React', 'Docker', 'Google Cloud Services'],
      sourceCode: 'https://github.com/rahulmedicharla/mood.ai',
      livePreview: 'https://mood-ai-coral.vercel.app/',
    },
    {
      name: 'SmartNotes (Hackathon)',
      description:
        'Smart Notes is an application designed to make education more accessible by transcribing real time audio and summarizing it into a well foramted document. The program listens to the realtime lecture, transcribes it, summarizes the content, and displays it in a well formatted document.',
      stack: ['Python', 'React', 'Speech Recognition', 'Google Cloud Realtime Database'],
      sourceCode: 'https://github.com/jackitaliano/Make23',
    },
    {
      name: 'Audio Studio (Hackathon)',
      description:
        'Developed a custom speech to code IDE to make programming more accessible. The program would take in Natural Language commands, transcribe it and convert the natural language to runnable python code. We created a nested recursive representation of the code with CFG\'s and outputted text onto a custom IDE that runs functional python code through voice commands',
      stack: ['Python', 'Speech Recognition ML', 'React'],
      sourceCode: 'https://github.com/rahulmedicharla/HackOhio2022',
    },
  ]

  
  const experience = [
    // experience can be added an removed
    // if there are no experience, experience section won't show up
    {
      name: 'SWE intern @ Willow Tree Apps',
      date: 'May 2023 - current',
      description:
        'Interning at a software consulting company to develop and deploy mobile and web applications to clients with a cross functional team of developers, designers, and PM\'s. Primarily engaging in back end development using C# .NET core framework, and Azure. Currently developing a safe chatbot to provide clients with 24/7 customer support from idea creation to deployment.',
      stack: ['C#', '.NET Core', 'Azure Cloud Services'],
      livePreview: 'https://willowtreeapps.com',
    },
    {
      name: '3D Perception Team Member @ Buckeye Autodrive',
      date: 'January 2023 - current',
      description:
        'A Team Member on Ohio State\'s premiere Autodrive team to develop a fully autonomous vehicle within a four year compeition amongst universities to develop a Stage IV automated vehicle. I tested and visualized a 3D Object Tracking model to track vehicles and pedestrians. I also created and integrated a 3D dynamics module to get realtime speed of surrounding objects into the pipeline.',
      stack: ['Python', 'OpenCV', 'Docker', 'ML'],
      livePreview: 'https://car.osu.edu/buckeye-autodrive',
    },
    {
      name: 'Application Developer Intern @ TOYMAKERS',
      date: 'June 2022 - August 2022',
      description:
        'Developed Bubble, a React Native application to make event organization with friends simple. Uses real-time location of your friends and current events onto a map using Google Cloud\'s realtime database and Google Places API. This unique platform enables meeting new people through a unique friends of friends RSVP mechanism for events',
      stack: ['JS', 'React Native', 'Google Cloud Platform'],
      sourceCode: 'https://github.com/THE-TOYMAKERS/Bubble',
      livePreview: 'https://willowtreeapps.com',
    }
  ]
  
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Git',
    'Python',
    'Docker',
    'Azure',
    'Google Cloud Platform',
    'Ruby',
    '.NET Core',
    'SQL',
    'Open CV',
    'ML'
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'medicharla.2@buckeyemail.osu.edu',
  }
  
  export { header, about, projects, skills, contact, experience }