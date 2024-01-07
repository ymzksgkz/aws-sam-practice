export const lambdaHandler = async () => {
  try {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hello world',
      }),
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'some error happened',
      }),
    }
  }
}
