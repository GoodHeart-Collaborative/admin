export const VALIDATION_MESSAGES = {
  "confirm password": {
    matchPassword: "Confirm password is not matched with password",
  },
};
export const POPUP_MESSAGES = {
  ok: "Ok",
  close: "Close",
  confrim: "Confirmation",
  no: "No",
  yes: "Yes",
  cancel: "Cancel",
  save: "Save",
  passwordResetTitle: "Reset Password",
  passwordResetLink:
    "Password reset link has been sent to registered Email address. Please follow the link to reset password.",
  passwordChanged: "Password has been changed successfully.",
  logout: "Logout",
  logoutConfirmation: "Are you sure you want to logout?",
  forgotPasswordTitle:
"Forgot Your Password? Don't worry send us your registered email address and we will send yousteps to reset your password.",
};

export const invalidImageError = (format = "JPG, JPEG, PNG") =>
  `Only ${format} images are allowed`;

export const invalidFileSize = (size = 4) =>
  `File size can not be more than ${size} MB`;

export const requiredProfilePic = `Profile pic is required`;
export const requiredMedia = `Media is required`;
export const invalidContentType = 'Invalid content type selected';
export const videoFormatFile = (format = 'mp4/x-m4v/3gp') =>  `Please select any video ${format} format file.`;
export const videoFileSize = (size = 10) =>  `File size should not be greater then ${size} MB`;


export const COMMON_MESSAGES = {
  ADDED: (type) => toTitleCase(type) + " has been added successfully",
  UPDATED: (type) => toTitleCase(type) + " has been updated successfully",
  BLOCKED: {
    confirm: (type) => `Do you want to block this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been blocked successfully`,
  },

  ACTIVE: {
    confirm: (type) => `Do you want to unblock this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been unblocked successfully`,
  },
  INACTIVE: {
    confirm: (type) => `Do you want to inactivate this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been inactivated successfully`,
  },
  ACTIVATED: {
    confirm: (type) => `Do you want to activate this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been activated successfully`,
  },

  DEACTIVE: {
    confirm: (type) => `Do you want to deactivate this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been deactivated successfully`,
  },
  DELETED: {
    confirm: (type) => `Do you want to delete this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been deleted successfully`,
  },
  VERIFY: {
    confirm: (type) => `Do you want to verify this ${type.toLowerCase()}?`,
    success: (type) => `${toTitleCase(type)} has been verified successfully`,
  },
};

export const SOMETHING_WENT_WRONG =
  "Something went wrong , Please try again later.";

export const SLOW_INTERNET_CONNECTION =
  "Please check your internet connection.";

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
