import { lambdaHandler } from '../../app'
import { describe, it } from '@jest/globals'

describe('Unit test for app handler', () => {
  it('Verifies successful response', async () => {
    jest.mock('@api/googleTrendsClient', () => ({
      fetchGoogleTrends: jest
        .fn()
        .mockResolvedValue(
          '12345{"date":"","storySummaries":{"trendingStories":[{"id":"dummy","articles":[],"image":{"newsUrl":"https://example.com","source":"example","imageUrl":"https://example.com/image"},"entityNames":["entity1","entity2"],"shareUrl":"https://example.com/share"}]}}',
        ),
    }))
    const result = await lambdaHandler()
    expect(result.message).toEqual('OK')
  })
})
