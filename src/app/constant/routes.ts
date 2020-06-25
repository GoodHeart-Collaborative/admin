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
  path: 'user',
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
  path: 'id',
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
    return `${ADMIN.fullUrl}/${this.path}`;
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
    return `${SETTINGS.fullUrl}/${this.path}`;
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

export const CATEGORY_DETAIL = {
  path: 'detail',
  fullUrl(categoryId) {
    return `${CATEGORY.fullUrl}/${categoryId}/${this.path}`;
  }
};

// CATEGORY ROUTES //
