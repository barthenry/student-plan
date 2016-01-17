export class ObjectValuesValueConverter {
  toView(obj) {
    obj = obj || {};
    return Object.keys(obj).map((key) => obj[key]);
  }
}
