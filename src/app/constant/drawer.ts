import { DASHBOARD, USER, CATEGORY } from 'src/app/constant/routes';
export const DRAWER_MENUS = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'dashboard',
        url: DASHBOARD.fullUrl,
    },
    {
        id: 'user',
        label: 'Users',
        icon: 'person',
        url: USER.fullUrl,
    },
    {
        id: 'category',
        label: 'Categories',
        icon: 'category',
        url: CATEGORY.fullUrl,
    },
    // {
    //     id: 'category',
    //     label: 'Management',
    //     icon: 'account_balance',
    //     url: CATEGORY.fullUrl,
    // },
];

export const HOME_TYPE = {
    UNICRON: 1,
    INSPIRATION: 2,
    DAILY_ADVICE: 3,
    GENERAL_GRATITUDE: 4
};
export const REPORT_TYPE = {
    EXPERT_POST: 7,
    USER: 10,
    FORUM: 9,
    UNICORN: 1,
    INSPIRATION: 2,
    DAILY_ADVICE: 3,
    GENERAL_GRATITUDE: 4,
    MEMBER_OF_DAY: 5,
    CONGRATS: 6,
    SHOUTOUT: 8,
    FORUM_TOPIC: 9,
};

export const MEDIA_TYPE = {
    IMAGE: 1,
    VIDEO: 2,
    NONE: 3
};

export const INDUSTRY = {
    [1]: 'Nonprofit',
    [2]: 'Emergency Services',
    [3]: 'Social And Community Services',
    [4]: 'Law Enforcement',
    [5]: 'Healthcare And Community Medical Services',
    [6]: 'Mental Health',
    [7]: 'Education',
    [8]: 'Legal Profession',
};


export const INDUSTRY_TYPE = [
    { value: 1, viewValue: 'Nonprofit' },
    { value: 2, viewValue: 'Emergency Services' },
    { value: 3, viewValue: 'Social And Community Services' },
    { value: 4, viewValue: 'Law Enforcement' },
    { value: 5, viewValue: 'Healthcare And Community Medical Services' },
    { value: 6, viewValue: 'Mental Health' },
    { value: 7, viewValue: 'Education' },
    { value: 8, viewValue: 'Legal Profession' },
];


export const EXPERIENCE = [
    { value: 'Junior', viewValue: 'Junior' },
    { value: 'Mid', viewValue: 'Mid' },
    { value: 'Senior', viewValue: 'Senior' },

];
export const PROFESSION = [
    { value: 'Founder', viewValue: 'Founder' },
    { value: 'CEO', viewValue: 'CEO' },
    { value: 'Executive Director', viewValue: 'Executive Director' },
    { value: 'Managing Director', viewValue: 'Managing Director' },
    { value: 'Licensed Counselor', viewValue: 'Licensed Counselor' },
    { value: 'Professional Coach', viewValue: 'Professional Coach' },
    { value: 'Consultant', viewValue: 'Consultant' },
    { value: 'Professor', viewValue: 'Professor' },
    { value: 'Professional Trainer', viewValue: 'Professional Trainer' },
    { value: 'Director', viewValue: 'Director' },
    { value: 'Manager_Supervisor', viewValue: 'Manager/Supervisor' },
    { value: 'Therapist_Counselor', viewValue: 'Therapist/Counselor' },
    { value: 'Social_Worker', viewValue: 'Social Worker' },
    { value: 'Direct_Care_Staff', viewValue: 'Direct Care Staff' },
    { value: 'Caregiver', viewValue: 'Caregiver' },
    { value: 'Doctor_Nurse_Medical_Staff', viewValue: 'Doctor/Nurse/Medical Staff' },
    { value: 'Teacher_School_Staff', viewValue: 'Teacher/School Staff' },
    { value: 'Attorney', viewValue: 'Attorney' },
    { value: 'Lawyer', viewValue: 'Lawyer' },
    { value: 'Paralegal', viewValue: 'Paralegal' },
    { value: 'Judge', viewValue: 'Judge' },
];

export const PROFESSION_TYPE = {
    ['Founder']: 'Founder',
    ['CEO']: 'CEO',
    ['Executive Director']: 'Executive Director',
    ['Managing Director']: 'Managing Director',
    ['Licensed Counselor']: 'Licensed Counselor',
    ['Professional Coach']: 'Professional Coach',
    ['Consultant']: 'Consultant',
    ['Professor']: 'Professor',
    ['Professional Trainer']: 'Professional Trainer',
    ['Director']: 'Director',
    ['Manager_Supervisor']: 'Manager/Supervisor',
    ['Therapist_Counselor']: 'Therapist/Counselor',
    ['Social_Worker']: 'Social Worker',
    ['Direct_Care_Staff']: 'Direct Care Staff',
    ['Caregiver']: 'Caregiver',
    ['Doctor_Nurse_Medical_Staff']: 'Doctor/Nurse/Medical Staff',
    ['Teacher_School_Staff']: 'Teacher/School Staff',
    ['First_Responder']: 'First Responder',
    ['Attorney']: 'Attorney',
    ['Lawyer']: 'Lawyer',
    ['Paralegal']: 'Paralegal',
    ['Judge']: 'Judge',
   
}


export const EXPERT_CONTENT_TYPE = [
    { value: 2, viewValue: 'Video', disabled: false },
    { value: 3, viewValue: 'Article', disabled: false },
    { value: 1, viewValue: 'Image', disabled: false },
];

export const PRAVICY = [
    { value: 'private', viewValue: 'Private' },
    // { value: 'protected', viewValue: 'Protected' },
    { value: 'public', viewValue: 'Public' },

];


export const EVENT_CATEGORY = {
    EVENTS: {
        TYPE: 'events',
        VALUE: 1,
        DISPLAY_NAME: 'EVENTS'
    },
    CLASSES: {
        TYPE: 'classes',
        VALUE: 2,
        DISPLAY_NAME: 'CLASSES'
    },
    TRAINING: {
        TYPE: 'training',
        VALUE: 3,
        DISPLAY_NAME: 'TRAINING'
    },
    MEETUP: {
        TYPE: 'meetup',
        VALUE: 4,
        DISPLAY_NAME: 'MEETUP'
    }
};

export const EVENT_INTEREST = {
    GOING: 1,
    INTEREST: 2
};

export const FEED_TYPE = {
    GRATITUDE: 4,
    SHOUTOUTS: 8
};

export const privacyList = [
    { view: 'Private', value: 'private' },
    // { view: 'Protected', value: 'protected' },
    { view: 'Public', value: 'public' },
];

export const statusList = [
    { view: 'Active', value: 'active' },
    { view: 'Blocked', value: 'blocked' },
];
export const expiredList = [
    { view: 'Expired', value: true },
    // { view: 'Active', value: 'active' },
    // { view: 'Blocked', value: 'blocked' },
];



export const sentTo = [
    { value: '1', viewValue: 'Android' },
    { value: '2', viewValue: 'IOS' },
    { value: '4', viewValue: 'All Users' },
]
export const reportType = {
    EXPERT_POST:
    {
        label: 'EXPERT POST',
        value: 7
    },
    USER: 
    {
        label: 'USER',
        value: 10
    },
    FORUM:   
    {
        label: 'FORUM',
        value: 9
    },
    UNICORN:    {
        label: 'UNICORN',
        value: 1
    },
    INSPIRATION:  
    {
        label: 'INSPIRATION',
        value: 2
    },
    DAILY_ADVICE: 
    {
        label: 'DAILY ADVICE',
        value: 3
    },
    GENERAL_GRATITUDE: {
        label: 'GENERAL GRATITUDE',
        value: 4
    },
    MEMBER_OF_DAY: {
        label: 'MEMBER OF DAY',
        value: 5
    },
    SHOUTOUT: {
        label: 'SHOUTOUT',
        value: 8
    },
    // FORUM_TOPIC: 9,
};