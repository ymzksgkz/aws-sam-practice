# for edit image
# docker build -t fetch_google_trends .
# CMD sleep 7200
# docker run -d fetch_google_trends:latest
# docker exec [containerID] bash

FROM public.ecr.aws/lambda/nodejs:20

COPY fetch_google_trends .

RUN npm install -g yarn

RUN yarn

RUN yarn compile

RUN mkdir ../tempDir

RUN mv ./dist/* ../tempDir

RUN mv ./node_modules ../tempDir

RUN rm -rf * ./.*

RUN mv ../tempDir/* .

RUN rm -rf ../tempDir

RUN npm uninstall -g yarn

CMD ["app.lambdaHandler"]
