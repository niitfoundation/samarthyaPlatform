FROM mhart/alpine-node

RUN apk update && \
    apk upgrade && \
    apk add git

WORKDIR /usr/src

RUN npm install -g @angular/cli@latest

COPY package.json .

RUN npm install

COPY . .

# Install webclient dependencies 
RUN npm run webclients-npm-install

# Build webclient apps
RUN npm run webclients-ng-build 

EXPOSE 8080

CMD ["npm", "run", "candidate"]
