FROM mhart/alpine-node

#RUN apk add --update python build-base

RUN apk update && \
    apk add git && \
    apk add python build-base


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

# Start the job-preffrence service
RUN npm run jpref-analyzer

# Start the work-experience service
RUN npm run wexp-analyzer

# Start the project-analyzer service
RUN npm run proj-analyzer

# Start the qualification-analyzer service
RUN npm run qual-analyzer

# Start the skill-analyzer service
RUN npm run skill-analyzer

# Start the user-register-analyzer service
RUN npm run usrreg-analyzer

# Start the profile-info-analyzer service
RUN npm run prinfo-analyzer

EXPOSE 8080

CMD ["npm", "run", "candidate"]
