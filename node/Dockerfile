# Set the base image to Ubuntu
FROM    ubuntu

# File Author / Maintainer
MAINTAINER Anand Mani Sankar

# Update the repository
RUN apt-get update

# Install the dependencies
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup | sudo bash -
RUN apt-get -y install python build-essential

# Install nodejs
RUN apt-get -y install nodejs

# Check node and npm versions
RUN node -v
RUN npm -v

# Install nodemon
RUN npm install -g nodemon

# Bundle app source
COPY . /src

# Install app dependencies
RUN cd /src; npm install

# Expose port
EXPOSE  8080

# Run app using nodemon
CMD ["nodemon", "/src/index.js"]
