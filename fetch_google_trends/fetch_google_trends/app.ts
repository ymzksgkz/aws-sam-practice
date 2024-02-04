import { GoogleTrends } from './types'
import GoogleTrendsApiClient from './api_client/googleTrendsClient'

const fetchGoogleTrends = async () => {
  const apiClient = new GoogleTrendsApiClient()
  const response = await apiClient.fetchGoogleTrends()

  // 先頭に謎の文字列が入ってくるので削除している
  const jsonString = response.data.substring(5)
  return JSON.parse(jsonString) as GoogleTrends
}

const saveTrends = async (googleTrends: GoogleTrends) => {
  console.log(1, googleTrends)
  // TODO DynamoDBにput
}

export const lambdaHandler = async () => {
  const googleTrends = await fetchGoogleTrends()
  await saveTrends(googleTrends)

  return { message: 'OK' }
}
