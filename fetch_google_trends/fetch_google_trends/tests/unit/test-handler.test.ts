import { lambdaHandler, googleApiClient, trendsApiClient } from '../../app'
import { expect, describe, it } from '@jest/globals'
import MockAdapter from 'axios-mock-adapter'

describe('Unit test for app handler', () => {
  it('Verifies successful response', async () => {
    const googleMockAxios = new MockAdapter(googleApiClient)
    const googleTrendsMockResponse = `12345{"date":"","storySummaries":{"trendingStories":[{"id":"dummy","articles":[],"image":{"newsUrl":"https://example.com","source":"example","imageUrl":"https://example.com/image"},"entityNames":["entity1","entity2"],"shareUrl":"https://example.com/share"}]}}`
    // TODO API URL を変更する
    googleMockAxios.onGet(/https:\/\/trends.google.com\/*/).reply(200, googleTrendsMockResponse)

    const trendsMockAxios = new MockAdapter(trendsApiClient)
    // TODO API URL を変更する
    trendsMockAxios.onPost(/https:\/\/example.com\/*/).reply(200, { message: 'OK' })

    const result = await lambdaHandler()
    expect(result.message).toEqual('OK')

    googleMockAxios.reset()
    trendsMockAxios.reset()
  })
})
