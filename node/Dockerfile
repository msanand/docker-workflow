FROM    ubuntu
MAINTAINER Anand M.S <anand.m.s@gmail.com>


RUN apt-get update
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup | sudo bash -
RUN apt-get -y install nodejs
# RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN node -v
RUN npm -v

RUN npm install -g nodemon

# Bundle app source
COPY . /src
# Install app dependencies
RUN cd /src; npm install

EXPOSE  8080
CMD ["nodemon", "/src/index.js"]
