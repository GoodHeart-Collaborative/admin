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
    // {value: 'Experts_in_Executive_Burnout' , viewValue: 'Experts in Executive Burnout'},
    // {value: 'Nonprofit_Resiliency_Coaches' , viewValue: 'Nonprofit Resiliency Coaches'},
    // {value: 'Wellness_Coaches' , viewValue: 'Wellness Coaches'},
    {value: 'Nonprofit' , viewValue: 'Nonprofit'},
    {value: 'Emergency_Services' , viewValue: 'Emergency Services'},
    {value: 'Social_And_Community_Services' , viewValue: 'Social And Community Services'},
    {value: 'Law_Enforcement' , viewValue: 'Law Enforcement'},
    {value: 'Healthcare_And_Community_Medical_Services' , viewValue: 'Healthcare And Community Medical Services'},
    // {value: 'Compassion_Fatigue' , viewValue: 'Compassion Fatigue'},
    // {value: 'Licensed_Therapists_specializing_in_Vicarious_and_Secondary_Trauma' , 
    // viewValue: 'Licensed Therapists specializing in Vicarious and Secondary Trauma'},
];

export const EXPERIENCE = [
    {value: 'Junior' , viewValue: 'Junior'},
    {value: 'Mid' , viewValue: 'Mid'},
    {value: 'Senior' , viewValue: 'Senior'},

]
export const PROFESSION = [
    {value: 'Founder' , viewValue: 'Founder'},
    {value: 'CEO' , viewValue: 'CEO'},
    {value: 'Executive Director' , viewValue: 'Executive Director'},
    {value: 'Managing Director' , viewValue: 'Managing Director'},

];
 

export const EXPERT_CONTENT_TYPE =  [
    { value : 1 , viewValue: 'Video', disabled: false},
    { value : 2 , viewValue: 'Article', disabled: false},
    { value : 3 , viewValue: 'Image', disabled: false},
    { value : 4 , viewValue: 'Voice Note', disabled: false}
];

export const PRAVICY =  [
    { value : 'private', viewValue: 'Private'},
    { value : 'protected', viewValue: 'Protected'},
    { value : 'public', viewValue: 'Public'},

];
