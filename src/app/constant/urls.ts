// tslint:disable-next-line:no-namespace
export const LOGIN = 'admin/login';
export const FORGOT_PASSWORD = 'admin/forgot-password';
export const CHANGE_PASSWORD = 'admin/change-password';
export const ADMIN = 'admin/details';
export const EDIT_PROFILE = 'admin/details';
export const RESET_PASSWORD = 'admin/reset-password';
export const LOGOUT = 'admin/logout';
export const VALIDATE_TOKEN = 'common/deepLink';
export const FEEDBACK = 'feedback';

// USER API's //
export const USER = 'admin/users';
export const USER_DETAILS = (id) => `admin/users/${id}`;
// CATEGORY API's //

export const CATEGORY = 'admin/category';
export const CATEGORY_LISTING = 'admin/category';
export const CATEGORY_POST_LISTING =  `admin/categoryDetails`;
export const CATEGORY_DETAILS = (categoryId) => `admin/category/${categoryId}`;
export const EDIT_CATEGORY = (categoryId) => `admin/category/${categoryId}`;
export const CATEGORY_POST_ACTION = (postId, status) => `admin/expertpost/${postId}/status/${status}`;
export const CATEGORY_ACTION = (id, status) => `admin/category/${id}/status/${status}`;

// DAILY_INSPIRATION API's //

export const DAILY_INSPIRATION = 'admin/inspiration';
export const DAILY_INSPIRATION_DETAILS = (Id) => `admin/inspiration/${Id}`;
export const DAILY_INSPIRATION_ACTION = (id) => `admin/inspiration/${id}/status`;
export const EDIT_DAILY_INSPIRATION = (Id) => `admin/inspiration/${Id}`;

// UNICORN API's //

export const UNICORN = 'admin/unicorn';
export const UNICORN_DETAILS = (Id) => `admin/unicorn/${Id}`;
export const ACTION_UNICORN = (Id , status) => `admin/unicorn/${Id}/status/${status}`;

// ADVICE API's //

export const ADVICE = 'admin/advice';
export const ADVICE_DETAILS = (Id) => `admin/advice/${Id}`;
export const ACTION_ADVICE = (Id , status) => `admin/advice/${Id}/status/${status}`;

// MEMBER API's //

export const MEMBER = 'admin/members';
export const MEMBER_DETAILS = (Id) => `admin/members/${Id}`;

// EVENT API's //

export const EVENT = 'admin/event';
export const EVENT_INTREST = 'admin/event-interest';
export const EVENT_DETAILS = (Id) => `admin/event/${Id}`;
export const ACTION_EVENT = (Id, status) => `admin/event/${Id}/status/${status}`;

// ARTICLES API's //

export const ARTICLES = 'admin/inspire';
export const ARTICLES_DETAILS = (Id) => `admin/inspire/${Id}`;


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

// HOME API's //
export const HOME = 'admin/home';
export const HOME_DETAILS = (Id) => `admin/home/${Id}`;
export const HOME_LIKE = `admin/like`;
export const HOME_COMMENT = `admin/comment`;
export const ACTION_HOME = (Id , status) => `admin/home/${Id}/status/${status}`;

// GRATITUDE API's //
export const GRATITUDE = 'admin/gratitude';
export const GRATITUDE_DETAILS = (Id) => `admin/gratitude/${Id}`;
export const ACTION_GRATITUDE = (Id , status) => `admin/gratitude/${Id}/status/${status}`;

// NOTIFICATION API's //
export const NOTIFICATION = 'admin-notification';
export const NOTIFICATION_DETAILS = `admin-notification/details`;
export const ACTION_NOTIFICATION = (Id , status) => `admin/gratitude/${Id}/status/${status}`;

// NOTIFICATION API's //
export const FORUM = 'admin-forum';
export const FORUM_DETAILS = `admin-forum/details`;
export const ACTION_FORUM = (Id , status) => `admin/gratitude/${Id}/status/${status}`;

// EXPERT API's //
export const EXPERT = 'admin/expert';
export const EXPERT_POST = 'admin/expertPost';
export const EXPERT_DETAILS = (Id) => `admin/expert/${Id}`;
export const ADD_EXPERT = `admin/expert`;
export const ACTION_EXPERT = (expertId , status) => `admin/expert/${expertId}/status/${status}`;
export const ACTION_EXPERT_POST = (postId , status) => `admin/expertpost/${postId}/status/${status}`;