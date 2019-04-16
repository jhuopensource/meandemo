FROM node:10.15.3-alpine
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
#RUN cd /usr/src/app && npm install && npm audit fix && npm install ajv@^6.9.1 && npm audit fix && clear && npm audit fix
RUN cd /usr/src/app && npm install && npm run-script build
EXPOSE 3000 4200
CMD ["npm","run-script","serve"]

# Basic run container for working through shell
# docker run -it --rm project_meandemo_express_node ash