# Stage 1: Build React application
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm ci

# Copy source code
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
