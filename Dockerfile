FROM mhart/alpine-node

RUN apk update && \
    apk add git && \
    apk add python build-base

# Set the timezone for container, so that logs etc., can be easily tracked
ENV TZ=Asia/Kolkata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Create app directory
RUN mkdir /usr/src

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
