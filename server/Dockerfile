# base image
FROM node:18-alpine

# working directory
WORKDIR /app

# copy dependencies 
COPY package*.json tsconfig.json ./

# install dependencies
RUN npm install 

# copy rest of the backend code
COPY . .

# generate prsima client
RUN npx prisma generate

# build typescript
RUN npm run build

# expose backend port
EXPOSE 5000

# run the compiled server
CMD [ "npm", "run", "start" ]

