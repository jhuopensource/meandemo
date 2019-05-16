FROM node:10.15.3-alpine
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN export npm_config_loglevel=silent && npm cache clean --force && cd /usr/src/app && npm install && npm run-script build
RUN npm audit fix
EXPOSE 3000 4200
CMD ["npm","run-script","serve"]

# Basic run container for working through shell
# docker run -it --rm jhuopensource/meandemo:nginx_angular_node cd /usr/src/app && npm install eslint && /usr/src/app/node_modules/.bin/eslint -c /usr/src/app/.eslintrc.js /usr/src/app
