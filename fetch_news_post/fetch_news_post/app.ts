export const lambdaHandler = async () => {
  // TODO
  // 1. API から trend 情報を取得
  // 2. 検索ワードの一部からOpenAPIにリクエストを投げて関連するニュースを検索し、100字程度で要約させる
  // 3. レスポンスから API リクエスト可能な状態に整形
  // 5. API に保存

  try {
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
