export const VALIDATION_CRITERIA = {
  emailMaxLength: 100,
  passwordMinLength: 8,
  passwordMaxLength: 20,
  nameMinLength: 2,
  nameMaxLength: 100,
  subTitleMinLength: 2,
  subTitleMaxLength: 150,
  titleMinLength: 2,
  titleMaxLength: 100,
  categorytitleMinLength: 2,
  categorytitleMaxLength: 25,
  phoneMinLength: 8,
  phoneMaxLength: 14,
  locationMinLength: 2,
  locationMaxLength: 1000,
  priceMinLength: 1,
  priceMaxLength: 6,
  maxRange: 1000,
  descriptionMinLength: 10,
  descriptionMaxLength: 400,
  eventDescriptionMaxLength: 500,
  forumDescriptionMaxLength: 1000,
  bioMinLength: 10,
  bioMaxLength: 500,
  professionMinLength: 3,
  professionMaxLength: 50,
  topicMaxLength: 50,
  eventNameMaxlength : 50,
  titleNotificationMaxLimit: 50,
  messageNotificationMaxLimit: 125,
  questionFaqMaxLimit: 100,
  answerFaqMaxLimit: 500
};

export const getTrimmed = (body) => {
  for (const key in body) {
    if (body.hasOwnProperty(key)) {
      if (typeof body[key] == 'string') {
        body[key] = body[key].trim();
      }

    }
  }
}