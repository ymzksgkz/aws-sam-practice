from fetch_google_trends import app

def test_lambda_handler():
    result = app.lambda_handler(None, None)

    assert result['message'] == 'OK'