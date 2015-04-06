# Set the base image to Ubuntu
FROM    ubuntu

# File Author / Maintainer
MAINTAINER Anand Mani Sankar

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup | sudo bash - && \
    apt-get -y install python build-essential nodejs

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
