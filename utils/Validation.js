export function validateNames(name) {
  if (!name) {
    return false;
  }
  name = name.trim();
  if (!name) {
    return false;
  }

  return name.length > 2;

  // let letters = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
  // return letters.test(name) && name.length > 2;
}
export function validatePrice(price) {
  if (!price) {
    return false;
  }
  price = price.trim();
  if (!price) {
    return false;
  }
  let letters = /^\d{0,8}(\.\d{1,2})?$/;
  return letters.test(price);
  //email.match(letters);
}
