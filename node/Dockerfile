# Use official Node.js 18 LTS image
FROM node:18

# Set working directory
WORKDIR /src

# Install nodemon globally
RUN npm install -g nodemon

# Copy package.json and install dependencies
COPY package.json /src/package.json
RUN npm install

# Copy the rest of the application code
COPY . /src

# Expose port
EXPOSE 8080

# Run app using nodemon
CMD ["nodemon", "/src/index.js"]
