import { lambdaHandler } from '../../app'
import { describe, it } from '@jest/globals'
import GoogleTrendsApiClient from '../../api_client/googleTrendsClient'
import { AxiosResponse } from 'axios'
import DynamoDbClient from '../../api_client/dynamoDbClient'

jest.mock('@api/googleTrendsClient')
const googleTrendsClientMock = GoogleTrendsApiClient as jest.Mock
jest.mock('@api/dynamoDbClient')
const dynamoDbClientMock = DynamoDbClient as jest.Mock

describe('Unit test for app handler', () => {
  const timeout = 100 * 1000 // DynamoDB の時間あたりのリクエスト制限対策のためテスト実行時間を伸ばす

  it(
    'Verifies successful response',
    async () => {
      dynamoDbClientMock.mockImplementationOnce(() => {
        return {
          put: () => {
            return null
          }
        }
      })

      googleTrendsClientMock.mockImplementationOnce(() => {
        return {
          fetchGoogleTrends: () => {
            return {
              data: '12345{"date":"","storySummaries":{"trendingStories":[{"id":"dummy","articles":[],"image":{"newsUrl":"https://example.com","source":"example","imageUrl":"https://example.com/image"},"entityNames":["entity1","entity2"],"shareUrl":"https://example.com/share"}]}}',
              status: 200,
              statusText: 'OK'
            } as AxiosResponse
          }
        }
      })

      const result = await lambdaHandler()
      expect(result.message).toEqual('OK')
    },
    timeout
  )
})
