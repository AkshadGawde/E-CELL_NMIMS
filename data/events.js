const events = [
    {
        id: 1,
        link: 'Black-Tie',
        name: 'Black-Tie',
        tag: 'Elegance and Entrepreneurial Excellence',
        description: `Experience an evening of elegance and entrepreneurial excellence, crafted by NMIMS Navi Mumbai's E-Cell team. Dress in your finest black attire for a night of enriching conversations, complemented by a sumptuous dinner and motivational keynotes from industry leaders. This event promises a blend of sophistication, interactivity, and outstanding performances. Celebrate refinement meeting entrepreneurial brilliance and create lasting memories in a captivating atmosphere.`,
        date: '14th March 2024',
        time: '7:30pm - 9:30pm',
        organisers: [
            {
                key: '1',
                name: 'Lorem Ipsum',
                email: 'Lorem Ipsum@gmail.com',
                phoneNumber: 'Lorem Ipsum',
            },
            {
                key: '2',
                name: 'Lorem Ipsum',
                email: 'Lorem Ipsum@gmail.com ',
                phoneNumber: 'lorem Ipsum',
            },
        ],
        poster: '',
        registration:
            'https://dare2compete.com/p/commit-the-flag-dhruva-indian-institute-of-information-technology-iiit-kottayam-224044?lb=wTDkKUs',
        leadLink: '1ikUbjDjqULqP3sSQeZPoYP3Wj4lwLW90PHB1ihbIFfk',
    },
    {
        id: 2,
        link: 'Dragons Den',
        name: 'Dragons Den',
        tag: 'Entrepreneurial Challenge',
        description: `Join Dragons Den in a team of 2 to 4 and pitch your innovative idea!
        - Problem Statement: Briefly describe the problem your idea addresses.
        - Solution Overview: Explain your proposed solution and its unique value proposition.
        - Market Opportunity: Outline the target market and its potential size.
        - Implementation Plan: Highlight key steps for bringing your idea to life.
        - Financial Projections (Optional): Illustrate your projected revenue and cost model.`,
        date: '14th March 2024',
        time: '8:00 am',
        organisers: [
            {
                key: '1',
                name: 'Lorem Ipsum',
                email: 'Lorem Ipsum@gmail.com',
                phoneNumber: 'Lorem Ipsum',
            },
            {
                key: '2',
                name: 'Lorem Ipsum',
                email: 'Lorem Ipsum@gmail.com ',
                phoneNumber: 'lorem Ipsum',
            },
        ],
        poster: '',
        registration: 'https://forms.gle/dEafjBAL2QgXdf2h6',
        leadLink: '1vMIoyz6Q6FOtx9pPPP92yKkfrrZ-boipmSPAaI0qB6Y',
    },
    {
        id: 1,
        link: 'Digital Marketing Competition',
        name: 'Digital Marketing Competition',
        tag: 'Strategic Marketing Challenge',
        description: `Join the Digital Marketing Competition in a team of 2 to 4 and showcase your strategic marketing skills!
- Participants will analyze real-world business challenges related to digital marketing.
- Identify target audience and develop buyer personas.
- Craft compelling marketing messages across various digital channels.
- Utilize appropriate social media strategies and content marketing tactics.
- Implement effective performance tracking and analytics.`,
        date: '15th March 2024',
        time: '6:00pm - 8:00pm',
        organisers: [
            {
                key: '1',
                name: 'Lorem Ipsum',
                email: 'Lorem Ipsum@gmail.com',
                phoneNumber: 'Lorem Ipsum',
            },
            {
                key: '2',
                name: 'Lorem Ipsum',
                email: 'Lorem Ipsum@gmail.com ',
                phoneNumber: 'lorem Ipsum',
            },
        ],
        poster: '',
        registration:
            'https://docs.google.com/forms/d/e/1FAIpQLSdmhqEWNW6Muy7dUTRUnfHUf4pap5elZZQzZ3A6SPtUiMr91A/viewform?usp=sf_link',
        leadLink: '1k2yejkk2p7URprQ71YsEw3jJr6F-bFe4JpdQ-Yz8Pr4',
    },
    {
        id: 1,
        link: '100 to Million',
        name: '100 to Million',
        tag: 'Team Challenge',
        description: `Join the 100 to Million challenge with a team of 4 to 5 members and embark on a two-day journey towards success!
- Each team must consist of 4-5 members.
- Participants must adhere to the given theme and guidelines.
- Carry your laptops for the Presentation round.
- Judges' decisions will be final.`,
        date: '15th March 2023',
        time: '3:30pm - 5:00pm',
        organisers: [
            {
                key: '1',
                name: 'Lorem Ipsum',
                email: 'Lorem Ipsum@gmail.com',
                phoneNumber: 'Lorem Ipsum',
            },
            {
                key: '2',
                name: 'Lorem Ipsum',
                email: 'Lorem Ipsum@gmail.com',
                phoneNumber: 'Lorem Ipsum',
            },
        ],
        poster: '',
        registration:
            'https://dare2compete.com/p/consolelogreplicate-dhruva-iiit-kottayams-annual-technical-fest-indian-institute-of-information-technology-iiit-kottay-221911',
        leadLink: '1RPPyF8Zo2tEH04WG0dLCmfYkceCndur4Y9HhqIvek6w',
    },
    {
        id: 1,
        link: 'Panel Discussion',
        name: 'Panel Discussion !',
        tag: 'Entrepreneurial Insights',
        description: `Join the Panel Discussion and gain valuable insights from accomplished entrepreneurs and industry leaders!
        - Engaging panel discussions covering vital topics like 'Scaling Your Startup' and 'Innovation in the Digital Age.'
        - Attendees will gain invaluable insights, inspiration, and practical strategies for navigating the entrepreneurial landscape.`,
        date: '15th March 2023',
        time: '9:00am - 11:00am',
        organisers: [
            {
                key: '1',
                name: 'Lorem Ipsum',
                email: 'Lorem Ipsum@gmail.com',
                phoneNumber: 'Lorem Ipsum',
            },
        ],
        poster: '',
        registration:
            'https://dare2compete.com/p/take-de-bait-dhruva-iiit-kottayams-annual-technical-fest-indian-institute-of-information-technology-iiit-kottayam-220531',
        leadLink: '1SZkSgZO9BVO9-rMkURy4T-f37GsdB-SPJRN_iw_ZKMM',
    },
    {
        id: 1,
        link: 'Squid Game',
        name: 'Squid Game',
        tag: 'Thrilling Real-life Challenge',
        description: `Experience the thrill of 'Squid Game' in real life with our adaptation of iconic challenges from the popular series!
- Intense challenges inspired by 'Squid Game' featuring strategic gameplay and elimination rounds for suspense.
- Provides an immersive and unforgettable experience for participants.`,
        date: '15th March 2023',
        time: '10:00am - 12:00am',
        organisers: [
            {
                key: '1',
                name: 'Lorem Ipsum',
                email: 'Lorem Ipsum@gmail.com',
                phoneNumber: 'Lorem Ipsum',
            },
            {
                key: '2',
                name: 'Lorem Ipsum',
                email: 'Lorem Ipsum@gmail.com',
                phoneNumber: 'Lorem Ipsum',
            },
        ],
        poster: '',
        registration:
            'https://dare2compete.com/p/brand-aid-dhruva-iiit-kottayams-annual-technical-fest-indian-institute-of-information-technology-iiit-kottayam-223776?lb=iUGWfEQ',
        leadLink: '19YaOkzhCQiyUHg1pvAXeNPLVNGhNTSP4vIchESMBBAE',
    },
    {
        id: 1,
        link: 'IdeaHub',
        name: 'IdeaHub',
        tag: 'Dynamic Tech Challenge',
        description: `Join IdeaHub, the ultimate 2-day tech challenge transcending traditional hackathons!
- Focused on fostering innovation and ideation across various domains.
- Online presence on UnStop from 11th to 14th March, followed by on-campus ideathon rounds.
- Opportunities for participants to tackle real-world problems and develop cutting-edge solutions.
- Engaging activities, workshops, and mentorship sessions.
- Networking opportunities with industry experts and peers.
- Exciting prizes and recognition for outstanding ideas and presentations.`,
        date: '11th - 16th March 2024',
        time: '7:30pm ',
        organisers: [
            {
                key: '1',
                name: 'Lorem Ipsum',
                email: 'Lorem Ipsum@gmail.com',
                phoneNumber: 'Lorem Ipsum',
            },
        ],
        poster: '',
        registration: '',
        leadLink: '14BEml9QbsCcVn25YWX8kNKz7KK74MvcU2116zx1jt08',
    },
]

const happenings = [
    {
        id: 1,
        link: 'InnovateX',
        name: 'InnovateX',
        tag: 'Tag1',
        description:
            'Aimed to explore entrepreneurship in India and provide practical guidance. Featuring Faiz Malkani, co-founder of Rippl, to inspire and equip students.',
        date: '12th Jan 2024',
        time: '10:00am - 12:00pm',
        organisers: [
            {
                key: '1',
                name: 'Lorem Ipsum ',
                email: 'Lorem Ipsum@gmail.com',
                phoneNumber: 'lorem Ipsum',
            },
        ],
        poster: '',
        registration: 'https://example.com/registration1',
        leadLink: 'exampleLeadLink1',
    },
    {
        id: 2,
        link: 'Shark-Tank',
        name: 'Shark Tank Event',
        tag: 'Entrepreneurship Challenge',
        description: `Join us for an exciting and dynamic Shark Tank event organized by the E-Cell of STME, designed to foster innovation and entrepreneurial spirit among students. This hybrid event, conducted both offline and online, offers participants the flexibility and convenience to showcase their ideas effectively.
    
    Event Structure:
    - Three Rounds of Competition:
      - Round 1: Quiz - Test your knowledge on entrepreneurship and business fundamentals.
      - Round 2: Pitching - The top teams will select a product to pitch, while the remaining teams choose from the available options. This round is judged on presentation skills, team participation, and the viability of the proposed solution.
      - Round 3: Advertising - Create an advertising reel for your product, which will be posted for public voting.
    
    - Judging and Prizes:
      - The pitching round will be judged by esteemed faculty member, Dr. Toral Shah.
      - Advertising reels will be evaluated based on public votes, adding an exciting interactive element to the competition.
    
    Event Timeline:
    - Day 1 (Offline): Engage in the initial quiz and pitching rounds on campus, allowing for direct interaction and real-time feedback.
    - Day 2 (Online): Participate in the advertising round from the comfort of your home, culminating in the announcement of winners based on public votes and judges’ evaluations.
    
    This two-day event promises to be an enriching experience, providing a platform for students to collaborate, innovate, and hone their entrepreneurial skills. Whether you're pitching groundbreaking ideas or crafting compelling advertisements, this event is an excellent opportunity to learn and grow alongside your peers.
    
    Don't miss out on this chance to be part of a transformative journey, guided by industry experts and fueled by the collective energy of aspiring entrepreneurs. Join us at the Shark Tank event and take the first step towards turning your business dreams into reality.`,
        date: '12th Jan 2024',
        time: '10:00am - 12:00pm',
        organisers: [
            {
                key: '1',
                name: 'Lorem Ipsum',
                email: 'LoremIpsum@gmail.com',
                phoneNumber: '123-456-7890',
            },
        ],
        poster: '',
        registration: 'https://example.com/registration1',
        leadLink: 'exampleLeadLink1',
    },
]

export { events, happenings }
