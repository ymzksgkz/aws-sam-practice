import axios from 'axios'
import { GoogleTrends, TrendsApiRequestParams, TrendsApiResponse, TrendsStory } from './types'

export const googleApiClient = axios.create({
  baseURL: 'https://trends.google.com/trends/api/realtimetrends',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const trendsApiClient = axios.create({
  baseURL: 'https://example.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

const fetchGoogleTrends = async () => {
  const trendsUrl = 'https://trends.google.com/trends/api/realtimetrends'
  const params = {
    hl: 'ja',
    tz: '-540',
    cat: 'e',
    fi: '0',
    fs: '0',
    geo: 'JP',
    ri: '300',
    rs: '20',
    sort: '0',
  }

  const response = await googleApiClient.get(trendsUrl, { params })
  // 先頭に謎の文字列が入ってくるので削除している
  const jsonString = response.data.substring(5)

  return JSON.parse(jsonString) as GoogleTrends
}

const saveTrends = async (googleTrends: GoogleTrends) => {
  const params: TrendsApiRequestParams = {
    stories: googleTrends.storySummaries.trendingStories.map(story => {
      const { id, articles, image, entityNames, shareUrl } = story
      return { id, articles, image, entityNames, shareUrl }
    }) as TrendsStory[],
    reportDate: googleTrends.date,
  }

  // TODO mock
  const path = '/'
  const { data } = await trendsApiClient.post<TrendsApiResponse>(path, params)
  return data
}

export const lambdaHandler = async () => {
  const googleTrends = await fetchGoogleTrends()
  return await saveTrends(googleTrends)
}
