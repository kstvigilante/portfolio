# Stage 1: Build the React application
FROM node:26-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the remaining application code
COPY . .

# Build the production application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the production build from Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy our Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]