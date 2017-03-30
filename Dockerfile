FROM mhart/alpine-node
# FROM mhart/alpine-node:6

WORKDIR /usr/src

COPY package.json .

RUN npm install

RUN apk update && \
    apk upgrade && \
    apk add git

COPY package.json /webclient/candidate/

RUN npm install

COPY package.json /webclient/placement/

RUN npm install

ADD . .

EXPOSE 8080

CMD ["npm", "run", "candidate"]
