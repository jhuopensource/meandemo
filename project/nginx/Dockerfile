FROM nginx:1.15.1-alpine
COPY --from=jhuopensource/meandemo:express_node /usr/src/app/dist/mean-angular6 /usr/share/nginx/html
COPY ./conf/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
