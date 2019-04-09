import {key} from './secretKey'

function createLastFMClient() {
  const LastFM = require('last-fm')
  const lastfm = new LastFM(key(), { userAgent: 'MyApp/1.0.0 (http://example.com)' })
  return lastfm
}

export {createLastFMClient}
