export const lambdaHandler = async () => {
  // TODO
  // 1. API から trend を取得
  // 2. trend から検索ワードを抽出
  // 3. 検索ワードの一部から Sns を検索
  // 4. Sns のポストを最大100件まで取得
  // 5. ポストから API リクエストに必要な情報を集約
  // 6. API に保存
  // ユーザのアイコンまで保存するかは実装時考える

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
