# Step 1: Build React app
FROM node:18-alpine AS build

# install bash (vite run చేయడానికి అవసరం అవుతుంది)
RUN apk add --no-cache bash

WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install

COPY . .

# vite కి execute permissions ఇవ్వాలి
RUN chmod +x node_modules/.bin/vite

# build React app
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy React build
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
