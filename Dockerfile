FROM node:16-alpine
EXPOSE 8080
WORKDIR /app
COPY docs /app/docs
COPY package.json /app/
COPY yarn.lock /app/
RUN apk add --no-cache git
RUN yarn install
RUN npm run docs:dev

