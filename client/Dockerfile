# base image
FROM node:22-alpine


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Expose Vite port
EXPOSE 5173

# Start Vite and bind to all interfaces
CMD ["npm", "run", "dev"]
