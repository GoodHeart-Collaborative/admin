import { USER_COMPANY_TYPE } from './enums';

export const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
};

export const HOST_STATUS = {
  ACTIVE: 'active',
  BLOCK: 'block',
};

export const USER_STATUS_LIST = [
  { value: USER_STATUS.ACTIVE, viewValue: 'Active' },
  { value: USER_STATUS.INACTIVE, viewValue: 'Inactive' },
];

export const HOST_STATUS_LIST = [
  { value: HOST_STATUS.ACTIVE, viewValue: 'Active' },
  { value: HOST_STATUS.BLOCK, viewValue: 'Blocked' },
];

export const ACCOUNT_STATUS = {
  verified: 'verified',
  unverified: 'unverified',
};

export const USER_ACCOUNT_STATUS_LIST = [
  {
    value: ACCOUNT_STATUS.verified,
    viewValue: 'Verified',
  },
  {
    value: ACCOUNT_STATUS.unverified,
    viewValue: 'Unverified',
  },
];




export const USER_COMPANY_TYPE_CONST = [
  {
    value: USER_COMPANY_TYPE.COMPANY,
    viewValue: 'Company',
  },
  {
    value: USER_COMPANY_TYPE.INDIVIDUAL,
    viewValue: 'Individual',
  },
];

