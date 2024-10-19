interface Article {
    title: string;
    description: string;
}

interface Data {
    keyFeatures: Article[];
    userStories: Article[];
    howWorks: Article[];
}

export const data: Data = {
    keyFeatures: [
        {
            title: 'Simplicity',
            description: 'An intuitive interface that makes task management a breeze.'
        },
        {
            title: 'Efficiency',
            description: 'Automates repetitive tasks, saving you time and effort.'
        },
        {
            title: 'Customization',
            description: 'Easily tailor the product to fit your specific needs and workflow.'
        }
    ],
    userStories: [
        {
            title: 'Maximized Productivity',
            description: 'John, a software engineer, improved his workflow by automating daily tasks.'
        },
        {
            title: 'Simplified Team Collaboration',
            description: 'Lisa, a project manager, boosted her team’s collaboration using shared task boards.'
        },
        {
            title: 'Streamlined Project Management',
            description: 'Alex, a freelancer, uses the product to handle multiple client projects with ease.'
        }
    ],
    howWorks: [
        {
            title: 'Step 1: Sign Up',
            description: 'Create an account in just a few clicks, and get started immediately.'
        },
        {
            title: 'Step 2: Customize Your Workflow',
            description: 'Use our templates or create your own task flows for managing your projects.'
        },
        {
            title: 'Step 3: Collaborate and Execute',
            description: 'Invite your team, assign tasks, and track progress in real-time.'
        }
    ]
};
