# Use a modern, official Node.js base image
FROM node:18-buster

# File Author / Maintainer
LABEL maintainer="Anand Mani Sankar"

# Set the working directory to /src
WORKDIR /src

# Copy only package.json and package-lock.json to leverage Docker caching
COPY package.json package-lock.json /src/

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . /src/

# Install nodemon globally (for development purposes)
RUN npm install -g nodemon

# Expose port 8080
EXPOSE 8080

# Run the app using nodemon (useful for development environments)
CMD ["nodemon", "/src/index.js"]

