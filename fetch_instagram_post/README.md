# fetch_instagram_post

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
$ cd ./fetch_instagram_post
$ yarn
```

## Unit tests

```bash
$ yarn test
```

## Local invoke

```bash
$ sam build
$ sam local invoke FetchInstagramPost --event events/event.json
```


## Deploy

```bash
sam build
sam deploy --guided
```

## Logging

```bash
$ sam logs --stack-name "fetch-instagram-post" --tail
```

## Remote invoke

```bash
$ sam remote invoke FetchInstagramPost --event events/event.json
```

## Cleanup

```bash
$ sam delete --stack-name "fetch-instagram-post"
```
