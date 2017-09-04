FROM mhart/alpine-node

RUN apk update && \
    apk add git && \
    apk add python build-base

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY package.json .

RUN npm install

RUN npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 8080

CMD ["npm", "run", "candidate"]
