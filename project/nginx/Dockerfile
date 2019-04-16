FROM nginx:1.15.1-alpine
COPY --from=project_meandemo_express_node:latest /usr/src/app/dist/mean-angular6 /usr/share/nginx/html
COPY ./conf/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
