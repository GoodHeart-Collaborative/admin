// tslint:disable-next-line:no-namespace
export const LOGIN = 'admin/login';
export const FORGOT_PASSWORD = 'admin/forgot-password';
export const CHANGE_PASSWORD = 'admin/change-password';
export const ADMIN = 'admin/details';
export const EDIT_PROFILE = 'admin/update';
export const RESET_PASSWORD = 'admin/reset-password';
export const LOGOUT = 'admin/logout';
export const VALIDATE_TOKEN = 'common/deepLink';
export const FEEDBACK = 'feedback';
export const NOTIFICATION = 'notification';

// USER API's //
export const USER = 'admin/users';
export const USER_DETAILS = (id) => `admin/users/${id}`;



// DREASHBOARD API's //
export const DASHBOARD = 'admin/dashboard';

// HOST API's //
export const HOST = 'admin/host/list';
export const HOST_DELETE = (userId) => `admin/host/${userId}/delete`;
export const HOST_VERFIY = (userId) => `admin/host/${userId}/verify`;
export const HOST_BLOCK = (userId) => `admin/host/${userId}/block`;
export const HOST_UNBLOCK = (userId) => `admin/host/${userId}/unblock`;

// HOST API's //

// AMENITY API's //
export const AMENITY_LIST_GET = 'admin/amenities/list';
export const AMENITY_ACTIVE_PUT = (id) => `admin/amenities/${id}/active`;
export const AMENITY_INACTIVE_PUT = (id) => `admin/amenities/${id}/inactive`;
export const AMENITY_DETAIL_GET = (id) => `admin/amenities/${id}/details`;
export const AMENITY_ADD_POST = `admin/amenities/add`;
export const AMENITY_EDIT_PUT = `admin/amenities/update`;

// AMENITY API's //

export const USER_DELETE = (userId) => `admin/users/${userId}/delete`;
export const USER_BLOCK = (userId) => `admin/users/${userId}/block`;
export const USER_UNBLOCK = (userId) => `admin/users/${userId}/unblock`;

// CATEGORY API's //

export const CATEGORY_LIST_GET = 'admin/category/list';
export const INACTIVATE_CATGEORY = (categoryId) =>
  `admin/category/${categoryId}/inactive`;
export const ACTIVATE_CATGEORY = (categoryId) =>
  `admin/category/${categoryId}/active`;
export const CATEGORY_DETAIL_GET = (categoryId) =>
  `admin/category/${categoryId}/details`;
export const CATEGORY_ADD_POST = 'admin/category/add';
export const CATEGORY_UPDATE_POST = 'admin/category/update';

// CATEGORY API's //
