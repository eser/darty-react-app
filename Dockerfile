# Install Node.js docker container
FROM node:alpine

# Environment variables
ENV NODE_ENV production
ENV PORT 3000

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --no-package-lock

# Bundle app source
COPY . .

EXPOSE ${PORT}

RUN npm run init

CMD ["npm", "start"]
