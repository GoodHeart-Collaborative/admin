export const VALIDATION_CRITERIA = {
  emailMaxLength: 100,
  passwordMinLength: 8,
  passwordMaxLength: 20,
  nameMinLength: 2,
  nameMaxLength: 100,
  subTitleMinLength: 2,
  subTitleMaxLength: 150,
  titleMinLength: 2,
  titleMaxLength: 20,
  phoneMinLength: 8,
  phoneMaxLength: 14,
  locationMinLength: 2,
  locationMaxLength: 1000,
  priceMinLength: 1,
  priceMaxLength: 10,
  maxRange: 1000,
  descriptionMinLength: 10,
  descriptionMaxLength: 400,
  bioMinLength: 10,
  bioMaxLength: 200,
  professionMinLength: 3,
  professionMaxLength: 20,
};

export const getTrimmed = (body) =>{
  for (const key in body) {
    if (body.hasOwnProperty(key)) {
      if (typeof body[key] == 'string') {
        body[key] = body[key].trim();
      }

    }
  }
}