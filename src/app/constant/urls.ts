// tslint:disable-next-line:no-namespace
export const LOGIN = 'admins/login';
export const FORGOT_PASSWORD = 'admins/password/forgot';
export const CHANGE_PASSWORD = 'admins/password';
export const ADMIN = 'admins/details';
export const EDIT_PROFILE = 'admins/update';
export const RESET_PASSWORD = 'admins/password/reset';
export const LOGOUT = 'admins/logout';
export const VALIDATE_TOKEN = 'admins/password/verify';
export const USER = 'admins/users/list';
export const FEEDBACK = 'feedback';
export const NOTIFICATION = 'notification';
export const DASHBOARD = 'dashboard';

// HOST API's //
export const HOST = 'admins/host/list';
export const HOST_DELETE = (userId) => `admins/host/${userId}/delete`;
export const HOST_VERFIY = (userId) => `admins/host/${userId}/verify`;

export const HOST_BLOCK = (userId) => `admins/host/${userId}/block`;

export const HOST_UNBLOCK = (userId) => `admins/host/${userId}/unblock`;

// HOST API's //

// AMENITY API's //

export const AMENITY_LIST_GET = 'admins/amenities/list';
export const AMENITY_ACTIVE_PUT = (id) => `admins/amenities/${id}/active`;
export const AMENITY_INACTIVE_PUT = (id) => `admins/amenities/${id}/inactive`;
export const AMENITY_DETAIL_GET = (id) => `admins/amenities/${id}/details`;
export const AMENITY_ADD_POST = `admins/amenities/add`;
export const AMENITY_EDIT_PUT = `admins/amenities/update`;

// AMENITY API's //

export const USER_DELETE = (userId) => `admins/users/${userId}/delete`;
export const USER_BLOCK = (userId) => `admins/users/${userId}/block`;

export const USER_UNBLOCK = (userId) => `admins/users/${userId}/unblock`;

// CATEGORY API's //

export const CATEGORY_LIST_GET = 'admins/category/list';
export const INACTIVATE_CATGEORY = (categoryId) =>
  `admins/category/${categoryId}/inactive`;
export const ACTIVATE_CATGEORY = (categoryId) =>
  `admins/category/${categoryId}/active`;
export const CATEGORY_DETAIL_GET = (categoryId) =>
  `admins/category/${categoryId}/details`;

export const CATEGORY_ADD_POST = 'admins/category/add';
export const CATEGORY_UPDATE_POST = 'admins/category/update';

// CATEGORY API's //
