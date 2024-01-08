# fetch_media_post

## Local Node version
```
20.x
```

## TODO
aws cli とかも一応説明しておく？

## Install sam cli
```shell
$ brew tap aws/tap
$ brew install aws-sam-cli

$ sam init
```

## Install for local development

```shell
$ npm i -g yarn
$ cd ./fetch_media_post
$ yarn
```

## Unit tests

```bash
$ yarn test
```

## Local invoke

```bash
$ sam build
$ sam local invoke FetchMediaPost --event events/event.json
```


## Deploy

```bash
sam build
sam deploy --guided
```

## Logging

```bash
$ sam logs --stack-name "fetch-media-post" --tail
```

## Remote invoke

```bash
$ sam remote invoke FetchMediaPost --event events/event.json
```

## Cleanup

```bash
$ sam delete --stack-name "fetch-media-post"
```