# Deprecated
なんか違うと思ったので別リポジトリで作り直す
https://github.com/ymzksgkz/fetchGoogleTrends
AWS SAM を若干勉強した記録にのこしとく

# google_trends_lambda

## Local Node version
```
20.x
```

## Install AWS Cli
```shell
https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/getting-started-install.html
```

## Install sam cli
```shell
$ brew tap aws/tap
$ brew install aws-sam-cli

$ sam init
```

## Install for local development

```bash
$ npm i -g yarn
$ cd ./fetch_google_trends
$ yarn
```

## Unit tests

```bash
$ yarn test
```

## Local invoke

```bash
$ sam build
$ sam local invoke FetchGoogleTrends
```

## Deploy

```bash
sam build

export $(egrep -v '^#' .env | xargs) \
  && sam deploy --guided \
  --parameter-overrides DynamoDBTableArn=$DYNAMO_DB_TABLE_ARN
```

## Logging

```bash
$ sam logs --stack-name "fetch-google-trends" --tail
```

## Remote invoke

```bash
$ sam remote invoke FetchGoogleTrends --event events/event.json
```

## Cleanup

```bash
$ sam delete --stack-name "fetch-google-trends"
```
