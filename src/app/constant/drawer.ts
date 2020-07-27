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

export const MEDIA_TYPE = {
    IMAGE: 1,
    VIDEO: 2
};

export const INDUSTRY_TYP = {
    Experts_in_Executive_Burnout:
        'Experts in Executive Burnout',
    Nonprofit_Resiliency_Coaches: 'Nonprofit Resiliency Coaches',
    Wellness_Coaches: 'Wellness Coaches',
    Licensed_Therapists_specializing_in_Vicarious_and_Secondary_Trauma:
        'Licensed Therapists specializing in Vicarious and Secondary Trauma',
    Compassion_Fatigue: 'Compassion Fatigue'
};
export const INDUSTRY_TYPE = [
    {value: 'Experts_in_Executive_Burnout' , viewValue: 'Experts in Executive Burnout'},
    {value: 'Nonprofit_Resiliency_Coaches' , viewValue: 'Nonprofit Resiliency Coaches'},
    {value: 'Wellness_Coaches' , viewValue: 'Wellness Coaches'},
    {value: 'Compassion_Fatigue' , viewValue: 'Compassion Fatigue'},
    {value: 'Licensed_Therapists_specializing_in_Vicarious_and_Secondary_Trauma' , 
    viewValue: 'Licensed Therapists specializing in Vicarious and Secondary Trauma'},
];

export const EXPERIENCE = [
    {value: 'junior' , viewValue: 'Junior'},
    {value: 'mid' , viewValue: 'Mid'},
    {value: 'senior' , viewValue: 'Senior'},

]

export const EXPERT_CONTENT_TYPE = {
    VIDEO: {
        TYPE: 'video',
        VALUE: 1,
        DISPLAY_NAME: 'VIDEO'
    },
    ARTICLE: {
        TYPE: 'article',
        VALUE: 2,
        DISPLAY_NAME: 'ARTICLE'
    },
    IMAGE: {
        TYPE: 'image',
        VALUE: 3,
        DISPLAY_NAME: 'IMAGE'
    },
    VOICE_NOTE: {
        TYPE: 'voice_note',
        VALUE: 4,
        DISPLAY_NAME: 'VOICE_NOTE'
    }
};

