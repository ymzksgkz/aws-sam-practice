export const lambdaHandler = async () => {
  // TODO
  // 1. API から trend 情報を取得
  // 2. 検索ワードの一部から画像を検索(当日から2日前までの範囲で最大10件)
  // 3. 画像をVision API に投げてさらに情報を取得（関連ワードとして表示するため）
  // 4. ポストから API リクエストに必要な情報を集約
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
