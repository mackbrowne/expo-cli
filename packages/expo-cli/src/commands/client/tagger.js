/**
 * @flow
 */

class Updater {
  constructor(updateFn) {
    this._updateFn = updateFn;
  }

  async updateIfTagged(obj: Object) {
    if (typeof obj !== 'object') {
      return;
    }
    const returnValue = await this._updateFn(obj);
    delete obj._shouldUpdate;
    return { obj, returnValue };
  }
}

function tagForUpdate(obj: Object) {
  obj._shouldUpdate = true;
  return obj;
}

export { Updater, tagForUpdate };
