import { SiteClient, Image } from 'datocms-client'

const DATOCMS_CLIENT = '99644b5eaa4af54e85bb'

class DatoCmsClient {
  constructor () {
    this.client = new SiteClient(DATOCMS_CLIENT)
  }

  getFilms = () =>
    this.client.items.all({ 'filter[type]': 'film' })

  getFilm = (filmId) =>
    this.client.items.find(filmId)
}

export default new DatoCmsClient()
