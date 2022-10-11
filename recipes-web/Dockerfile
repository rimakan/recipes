# pull the official base image
FROM node:18-alpine
# set working direction
WORKDIR /app
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
EXPOSE 3000
# start app
CMD ["npm", "start"]