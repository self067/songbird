export default class AnimalData {
  // _apiBase = 'https://self067-songbird.lmaa.ru/';
  _apiBase = '';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`, { mode: 'no-cors' });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} status=${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  async getAllAnimals() {
    const res = await this.getResource('animals.json');
    return res;
  };

}
