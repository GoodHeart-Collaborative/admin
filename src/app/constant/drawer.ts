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
