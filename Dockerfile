FROM node:12.19.0-alpine3.9 AS builder

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

FROM node:12.19.0-alpine3.9 AS production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app ./

CMD ["npm", "run", "start:prod"]