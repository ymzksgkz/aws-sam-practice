import pandas as pd
from pytrends.request import TrendReq


def fetch_google_trends(event):
    # TODO
    # 1. Google Trends から最新のデータを取得する
    # 2. 取得したデータを API リクエスト用に整形する
    # 3. 整形したデータを API に投げてデータを登録する

    print(event)

    return {'message': 'OK'}


def lambda_handler(event, context):
    return fetch_google_trends(event)

