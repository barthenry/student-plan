export class ObjectValuesValueConverter {
  toView(obj = {}) {
    return Object.keys(obj).map((key) => obj[key]);
  }
}
