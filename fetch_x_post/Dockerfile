FROM public.ecr.aws/lambda/nodejs:20

COPY src .

RUN npm install -g yarn

RUN yarn compile

RUN mv ./dist/app.js ..

RUN rm -rf * ./.*

RUN mv ../app.js .

RUN npm uninstall -g yarn

#CMD sleep 7200

CMD ["app.lambdaHandler"]
