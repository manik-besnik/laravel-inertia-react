export const taskType = {
    like: 'like',
    comment: 'comment',
    share: 'share',
    follow: 'follow',
    repost: 'repost',
    save: 'save',
    clap: 'clap',
    subscribe: 'subscribe',
};


const tabs = [
    {
        name: 'Followers',
        typeOfTask: taskType.follow,
        isComing: false
    },
    {
        name: 'Subscribes',
        typeOfTask: taskType.subscribe,
        isComing: false
    },
    {
        name: 'Likes',
        typeOfTask: taskType.like,
        isComing: false
    },
    {
        name: 'Clap',
        typeOfTask: taskType.clap,
        isComing: false
    },
    {
        name: 'Saves',
        typeOfTask: taskType.save,
        isComing: false
    },
    {
        name: 'Comments',
        typeOfTask: taskType.comment,
        isComing: false
    },
    {
        name: 'Repost',
        typeOfTask: taskType.repost,
        isComing: false
    },
]

export const getTabItems = (taskAccountType) => {

    const commonTasks = [
        taskType.like,
        taskType.comment,
        taskType.save,
        taskType.follow
    ];

    const taskMapping = {
        [accountType.dribbble]: commonTasks,
        [accountType.behance]: commonTasks,
        [accountType.facebook]: commonTasks,
        [accountType.artstation]: commonTasks,
        [accountType.instagram]: commonTasks,
        [accountType.linkedin]: commonTasks,
        [accountType.twitter]: commonTasks,
        [accountType.tiktok]: commonTasks,
        [accountType.youtube]: [
            taskType.subscribe,
            taskType.like,
            taskType.comment,
        ],
        [accountType.medium]: [
            taskType.follow,
            taskType.clap,
            taskType.save,
            taskType.comment,
        ]

    };

    const tasks = taskMapping[taskAccountType] || [];
    return tabs.filter(item => tasks.includes(item.typeOfTask));
}

export const accountType = {
    dribbble: 'dribbble',
    behance: 'behance',
    artstation: 'artstation',
    medium: 'medium',
    youtube: 'youtube',
    facebook: 'facebook',
    instagram: 'instagram',
    linkedin: 'linkedin',
    twitter: 'twitter',
    tiktok: 'tiktok',
    custom: 'custom',
}

export const accountFilterData = [
    {name: "All", value: null},
    ...Object.keys(accountType).map(key => ({
        name: key.charAt(0).toUpperCase() + key.slice(1),
        value: accountType[key]
    }))
];

export const userStatus = {
    FREE: "free",
    PRO: "pro",
    PRO_PLUS: "pro_plus",
    BASIC: "basic",
    BAND: "band",
}
export const proPoint = [
    {
        coin: "100",
        perCoin: '0.05',
        discount: '0',
        completion: 'Unlimited Tasks Completion',
        price: '5',
        discountPrice: '5'
    },
    {
        coin: "250",
        perCoin: '0.04',
        discount: '15',
        completion: 'Unlimited Tasks Completion',
        price: '12',
        discountPrice: '10'
    },
    {
        coin: "500",
        perCoin: '0.036',
        discount: '28',
        completion: 'Unlimited Tasks Completion',
        price: '25',
        discountPrice: '18'
    },
    {
        coin: "750",
        perCoin: '0.033',
        discount: '32',
        completion: 'Unlimited Tasks Completion',
        price: '37',
        discountPrice: '25'
    },
    {
        coin: "1000",
        perCoin: '0.03',
        discount: '40',
        completion: 'Unlimited Tasks Completion',
        price: '50',
        discountPrice: '30',
        recommended: true,
    },
]

export const proAccount = [
    {
        name: 'basic',
        price: '0',
        longTerm: false,
        longTermPrice: '0',
        bonusCoin: '0',
        fulfillmentLimit: '100',
        taskLimit: '20',
    },
    {
        name: 'Pro',
        price: '2',
        longTerm: false,
        longTermPrice: '10',
        bonusCoin: '50',
        fulfillmentLimit: '100',
        taskLimit: 'Unlimited',
    },
    {
        name: 'Pro Plus',
        price: '4',
        longTerm: false,
        longTermPrice: '20',
        bonusCoin: '0',
        fulfillmentLimit: '100',
        taskLimit: 'Unlimited',
        recommended: true,
    },
]

export const dailyRewards = [
    {
        day: 1,
        coin: 2
    },
    {
        day: 2,
        coin: 2
    },
    {
        day: 3,
        coin: 2
    },
    {
        day: 4,
        coin: 4
    },
    {
        day: 5,
        coin: 4
    },
    {
        day: 6,
        coin: 4
    },
    {
        day: 7,
        coin: 8
    },
    {
        day: 8,
        coin: 8
    },
    {
        day: 9,
        coin: 8
    },
    {
        day: 10,
        coin: 10
    },
    {
        day: 11,
        coin: 10
    },
    {
        day: 12,
        coin: 10
    }
]
