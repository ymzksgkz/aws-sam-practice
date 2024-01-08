import { lambdaHandler } from '../../app'
import { expect, describe, it } from '@jest/globals'

describe('Unit test for app handler', () => {
  it('Verifies successful response', async () => {
    const result = await lambdaHandler()

    expect(result.message).toEqual('OK')
  })

  it('Verify request parameters', () => {})
})
