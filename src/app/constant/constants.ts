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

