# ---- Base image ----
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first
COPY package*.json tsconfig.json ./

# Install dependencies
RUN npm install

# Copy rest of the backend code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build TypeScript
RUN npm run build

# Expose backend port
EXPOSE 5000

# Run the compiled server
CMD ["npm", "run", "start"]
