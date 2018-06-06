# Install Node.js docker container
FROM node:onbuild

# Environment variables
ENV NODE_ENV production
ENV PORT 80

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --no-package-lock

# Bundle app source
COPY . .

EXPOSE 80

RUN npm run init

CMD ["npm", "start"]
