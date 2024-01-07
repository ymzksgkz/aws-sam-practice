# fetch_google_trends
ref. https://aws.amazon.com/jp/builders-flash/202303/serverless-local-dev-environment

TODO 一応書いといたほうがいいもの
* aws cli
* pyenv

## Local Pyhon version
```
3.11
```

## Install sam cli
```shell
$ brew tap aws/tap
$ brew install aws-sam-cli

$ sam init
```

## Unit tests

```bash
$ pip install pytest pytest-mock --user
$ python -m pytest tests/ -v
```


## Local invoke

```bash
$ sam build
$ sam local invoke FetchGoogleTrendsFunction --event events/event.json
```


## Deploy

```bash
sam build
sam deploy --guided
```

## Logging

```bash
$ sam logs -n FetchGoogleTrendsFunction --stack-name "fetch-google-trends" --tail
```

## Remote invoke

```bash
$ sam remote invoke FetchGoogleTrendsFunction --event "{}"
```

## Cleanup

```bash
$ sam delete --stack-name "fetch-google-trends"
```
