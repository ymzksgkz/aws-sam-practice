import { lambdaHandler } from '../../app'
import { expect, describe, it } from '@jest/globals'

describe('Unit test for app handler', function () {
  it('verifies successful response', async () => {
    const result = await lambdaHandler()

    expect(result.statusCode).toEqual(200)
    expect(result.body).toEqual(
      JSON.stringify({
        message: 'hello world',
      }),
    )
  })
})
