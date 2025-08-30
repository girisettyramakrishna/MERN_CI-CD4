# Use official Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY . .

# Expose backend port (example: 5000)
EXPOSE 5000

# Start backend server
CMD ["node", "index.js"]
