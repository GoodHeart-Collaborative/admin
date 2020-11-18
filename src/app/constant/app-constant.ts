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


export const REPORT_MESSAGE = {
 [1]: 'Explicit photos',
 [2]: 'Offensive content',
 [3]: 'Impostor accounts',

//  [4]: 'Other',
 [10]: 'Pretending to be Someone',
 [11]: 'Fake account',
 [12]: 'Fake name',
 [13]: 'Posting in appropriate things',
 [14]: 'Other',

}


export const CATEGORY_TYPE = {
  EVENT_CAEGORY: 1,
  OTHER_CATEGORY: 2
};