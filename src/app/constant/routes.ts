import { IRoute } from '../models/common-models';

export const ACCOUNT: IRoute = {
  path: 'auth',
  get fullUrl(): string {
    return `/${this.path}`;
  }
};

export const ADMIN: IRoute = {
  path: 'admin',
  get fullUrl(): string {
    return `/${this.path}`;
  }
};

export const LINK_EXPIRED: IRoute = {
  path: 'link-expired',
  get fullUrl(): string {
    return `/${this.path}`;
  }
};
export const CONTENT: IRoute = {
  path: 'content/view',
  get fullUrl(): string {
    return `/${this.path}`;
  }
};

export const LOGIN: IRoute = {
  path: 'login',
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  }
};

export const FORGOT_PASSWORD: IRoute = {
  path: 'forgot-password',
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  }
};

export const RESET_PASSWORD: IRoute = {
  path: 'reset-password/token',
  get fullUrl(): string {
    return `${ACCOUNT.fullUrl}/${this.path}`;
  }
};

export const REPORTS: IRoute = {
  path: 'report',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};

export const USER: IRoute = {
  path: 'users',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};

export const USER_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${USER.fullUrl}/${this.path}`;
  }
};

export const USER_DETAIL: IRoute = {
  path: `:id`,
  get fullUrl(): string {
    return `${USER.fullUrl}/${this.path}`;
  }
};

export const GRATITUDE_DETAIL: IRoute = {
  path: `:id/gratitude/details`,
  get fullUrl(): string {
    return `${USER.fullUrl}/${this.path}`;
  }
};
export const EVENT_DETAIL: IRoute = {
  path: `:id/event/details`,
  get fullUrl(): string {
    return `${USER.fullUrl}/${this.path}`;
  }
};
export const TOPIC_DETAIL: IRoute = {
  path: `:id/topic/details`,
  get fullUrl(): string {
    return `${USER.fullUrl}/${this.path}`;
  }
};
export const SHOUTOUTS_DETAIL: IRoute = {
  path: `:id/shoutouts/details`,
  get fullUrl(): string {
    return `${USER.fullUrl}/${this.path}`;
  }
};




export const FEEDBACK: IRoute = {
  path: 'feedback',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};

export const FEEDBACK_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${FEEDBACK.fullUrl}/${this.path}`;
  }
};

export const FEEDBACK_DETAIL: IRoute = {
  path: 'detail',
  get fullUrl(): string {
    return `${FEEDBACK.fullUrl}/${this.path}`;
  }
};

export const SETTINGS: IRoute = {
  path: 'settings',
  get fullUrl(): string {
    return `${this.path}`;
  }
};

export const ADMIN_PROFILE: IRoute = {
  path: 'profile',
  get fullUrl(): string {
    return `${SETTINGS.fullUrl}/${this.path}`;
  }
};

export const CHANGE_PASSWORD: IRoute = {
  path: 'change-password',
  get fullUrl(): string {
    return `${SETTINGS.path}/${this.path}`;
  }
};

export const EDIT_PROFILE: IRoute = {
  path: 'edit-profile',
  get fullUrl(): string {
    return `${SETTINGS.fullUrl}/${this.path}`;
  }
};

export const NOTIFICATION: IRoute = {
  path: 'notification',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};

export const NOTIFICATION_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${NOTIFICATION.fullUrl}/${this.path}`;
  }
};

export const ADD_NOTIFICATION: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${NOTIFICATION.fullUrl}/${this.path}`;
  }
};

export const EDIT_NOTIFICATION: IRoute = {
  path: 'edit',
  get fullUrl(): string {
    return `${NOTIFICATION.fullUrl}/${this.path}`;
  }
};

export const CONTENT_MANAGEMENT: IRoute = {
  path: 'content-management',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};

export const DASHBOARD: IRoute = {
  path: 'dashboard',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
    // return `/${this.path}`;
  }
};

// HOST ROUTES START //

export const HOST: IRoute = {
  path: 'host',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};

export const HOST_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${HOST.fullUrl}/${this.path}`;
  }
};

// HOST ROUTES  END //

// AMENITY ROUTES //

export const AMENITY: IRoute = {
  path: 'amenity',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};

export const AMENITY_LIST: IRoute = {
  path: 'amenity-list',
  get fullUrl(): string {
    return `${AMENITY.fullUrl}/${this.path}`;
  }
};

export const AMENITY_ADD: IRoute = {
  path: 'amenity-add',
  get fullUrl(): string {
    return `${AMENITY.fullUrl}/${this.path}`;
  }
};
export const AMENITY_EDIT = {
  path: 'amenity-edit',
  fullUrl(id) {
    return `${AMENITY.fullUrl}/${id}/${this.path}`;
  }
};

export const AMENITY_DETAIL: IRoute = {
  path: 'amenity-detail',
  get fullUrl(): string {
    return `${AMENITY.fullUrl}/${this.path}`;
  }
};

// AMENITY ROUTES //

export const EVENT_CATEGORY: IRoute = {
  path: 'event-category',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};
export const ADD_EVENT_CATEGORY: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${EVENT_CATEGORY.fullUrl}/${this.path}`;
  }
};

export const EVENT_CATEGORY_DETAIL = {
  path: 'detail',
  fullUrl(categoryId) {
    return `${EVENT_CATEGORY.fullUrl}/${categoryId}/${this.path}`;
  }
};

// CATEGORY ROUTES //

export const CATEGORY: IRoute = {
  path: 'category',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};

export const CATEGORY_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${CATEGORY.fullUrl}/${this.path}`;
  }
};
export const ADD_CATEGORY: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${CATEGORY.fullUrl}/${this.path}`;
  }
};

export const CATEGORY_DETAIL = {
  path: 'detail',
  fullUrl(categoryId) {
    return `${CATEGORY.fullUrl}/${categoryId}/${this.path}`;
  }
};

// EVENT ROUTES //

export const EVENTS: IRoute = {
  path: 'event',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};
export const EVENTS_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${EVENTS.fullUrl}/${this.path}`;
  }
};

export const EVENTS_DETAIL = {
  path: ':id',
  fullUrl() {
    return `${EVENTS.fullUrl}/${this.path}`;

  }
};

export const ADD_EVENTS: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${EVENTS.fullUrl}/${this.path}`;
  }
};


// NOTIFICATIONS
export const NOTIFICATIONS: IRoute = {
  path: 'notifications',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};

export const NOTIFICATIONS_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${NOTIFICATIONS.fullUrl}/${this.path}`;
  }
};

export const ADD_NOTIFICATIONS: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${NOTIFICATIONS.fullUrl}/${this.path}`;
  }
};

export const NOTIFICATIONS_DETAIL = {
  path: ':id',
  fullUrl() {
    return `${NOTIFICATIONS.fullUrl}/${this.path}`;

  }
};

// DAILY_INSPIRATION ROUTES //
export const DAILY_INSPIRATION: IRoute = {
  path: 'inspiring-women',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};
export const DAILY_INSPIRATION_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${DAILY_INSPIRATION.fullUrl}/${this.path}`;
  }
};
export const ADD_DAILY_INSPIRATION: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${DAILY_INSPIRATION.fullUrl}/${this.path}`;
  }
};
export const DAILY_INSPIRATION_DETAILS: IRoute = {
  path: ':id',
  get fullUrl(): string {
    return `${DAILY_INSPIRATION.fullUrl}/${this.path}`;
  }
};

// DAILY_UNICORN ROUTES //
export const DAILY_UNICORN: IRoute = {
  path: 'daily-smiles',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};
export const DAILY_UNICORN_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${DAILY_UNICORN.fullUrl}/${this.path}`;
  }
};
export const ADD_DAILY_UNICORN: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${DAILY_UNICORN.fullUrl}/${this.path}`;
  }
};
export const DAILY_UNICORN_DETAILS: IRoute = {
  path: ':id',
  get fullUrl(): string {
    return `${DAILY_INSPIRATION.fullUrl}/${this.path}`;
  }
};

// DAILY_ADVICE ROUTES //
export const DAILY_ADVICE: IRoute = {
  path: 'daily-pep-talk',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};
export const DAILY_ADVICE_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${DAILY_ADVICE.fullUrl}/${this.path}`;
  }
};
export const ADD_DAILY_ADVICE: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${DAILY_ADVICE.fullUrl}/${this.path}`;
  }
};
export const DAILY_ADVICE_DETAILS: IRoute = {
  path: ':id',
  get fullUrl(): string {
    return `${DAILY_ADVICE.fullUrl}/${this.path}`;
  }
};



// MEMBER_OF_THE_DAY ROUTES //
export const MEMBER_OF_THE_DAY: IRoute = {
  path: 'leader-of-the-day',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};
export const MEMBER_OF_THE_DAY_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${MEMBER_OF_THE_DAY.fullUrl}/${this.path}`;
  }
};
export const ADD_MEMBER_OF_THE_DAY: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${MEMBER_OF_THE_DAY.fullUrl}/${this.path}`;
  }
};
export const MEMBER_OF_THE_DAY_DETAILS: IRoute = {
  path: ':id',
  get fullUrl(): string {
    return `${MEMBER_OF_THE_DAY.fullUrl}/${this.path}`;
  }
};



// ARTICLES ROUTES //
export const ARTICLES: IRoute = {
  path: 'articles',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};
export const ARTICLES_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${ARTICLES.fullUrl}/${this.path}`;
  }
};
export const ADD_ARTICLES: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${ARTICLES.fullUrl}/${this.path}`;
  }
};
export const ARTICLES_DETAILS: IRoute = {
  path: ':id',
  get fullUrl(): string {
    return `${ARTICLES.fullUrl}/${this.path}`;
  }
};

// EXPERT ROUTES //
export const EXPERT: IRoute = {
  path: 'expert',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};
export const EXPERT_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${EXPERT.fullUrl}/${this.path}`;
  }
};
export const ADD_EXPERT: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${EXPERT.fullUrl}/${this.path}`;
  }
};
export const EXPERT_DETAILS: IRoute = {
  path: ':id',
  get fullUrl(): string {
    return `${EXPERT.fullUrl}/${this.path}`;
  }
};
export const ADD_EXPERT_CONTENT: IRoute = {
  path: 'add-content',
  get fullUrl(): string {
    return `${EXPERT.fullUrl}/${this.path}`;
  }
};


// FORUM ROUTES //
export const FORUM: IRoute = {
  path: 'forum',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};
export const FORUM_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${FORUM.fullUrl}/${this.path}`;
  }
};
export const ADD_FORUM: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${FORUM.fullUrl}/${this.path}`;
  }
};
export const FORUM_DETAILS: IRoute = {
  path: ':id',
  get fullUrl(): string {
    return `${FORUM.fullUrl}/${this.path}`;
  }
};
export const ADD_FORUM_CONTENT: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${FORUM.fullUrl}/${this.path}`;
  }
};

// FORUM ROUTES //
export const FEED: IRoute = {
  path: 'feed',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};
export const FEED_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${FEED.fullUrl}/${this.path}`;
  }
};
export const ADD_FEED: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${FEED.fullUrl}/${this.path}`;
  }
};
export const FEED_DETAILS: IRoute = {
  path: ':id',
  get fullUrl(): string {
    return `${FEED.fullUrl}/${this.path}`;
  }
};

// REPORTS_AND_ANALYTICS ROUTES //
export const REPORTS_AND_ANALYTICS: IRoute = {
  path: 'reports-and-analytics',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};
export const REPORTS_AND_ANALYTICS_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${REPORTS_AND_ANALYTICS.fullUrl}/${this.path}`;
  }
};
export const ADD_REPORTS_AND_ANALYTICS: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${REPORTS_AND_ANALYTICS.fullUrl}/${this.path}`;
  }
};
export const REPORTS_AND_ANALYTICS_DETAILS: IRoute = {
  path: ':id',
  get fullUrl(): string {
    return `${REPORTS_AND_ANALYTICS.fullUrl}/${this.path}`;
  }
};



/// CALENDER 
export const CALENDER: IRoute = {
  path: 'calender',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};

/// FAQs

export const FAQs: IRoute = {
  path: 'faq',
  get fullUrl(): string {
    return `${ADMIN.fullUrl}/${this.path}`;
  }
};
export const FAQs_LIST: IRoute = {
  path: 'list',
  get fullUrl(): string {
    return `${FAQs.fullUrl}/${this.path}`;
  }
};
export const ADD_FAQs: IRoute = {
  path: 'add',
  get fullUrl(): string {
    return `${FAQs.fullUrl}/${this.path}`;
  }
};

export const FAQs_DETAILS: IRoute = {
  path: ':id',
  get fullUrl(): string {
    return `${REPORTS_AND_ANALYTICS.fullUrl}/${this.path}`;
  }
}
