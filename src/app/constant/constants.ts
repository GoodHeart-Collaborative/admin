export const PAGE_OPTIONS = {
  page: 1,
  limit: 10
};

export const MY_FORMATS = {
  parse: {
    dateInput: 'll'
  },
  display: {
    dateInput: 'll',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'll',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

export const USER_SUBSCRIPTION_PLAN = {
	[1]: {
		price: 0,
		value: 'Free',
		sendValue: 1
	},
	[2]: {
		price: 8,
		value: 'Monthly',
		sendValue: 2
	},
	[3]: {
		price: 78,
		value: 'Yearly',
		sendValue: 3
	},
	[4]: {
		price: 0,
		value: 'None',
		sendValue: 4
	}
}


export const REPORT_MESSAGE = {
    Explicit_photos: {
        reason: "Explicit photos",
        id: 1
    },
    Offensive_content: {
        reason: "Offensive content",
        id: 2
    },
    Impostor_accounts: {
        reason: "Impostor accounts",
        id: 3
    },
    Other: {
        reason: "Other",
        id: 4
    },
	 PretendingToBeSomeOne: {
        reason: "Pretending to be Someone",
        id: 10
    },
    FAKE_ACCOUNT: {
        reason: "Fake account",
        id: 11
    },
    FAKE_NAME: {
        reason: "Fake name",
        id: 12
    },
    POSTING_IN_APPROPRIATE_THINGS: {
        reason: "Posting in appropriate things",
        id: 13
    },
    SOMETHING_ELSE: {
        reason: "Other",
        id: 14
    }
}
