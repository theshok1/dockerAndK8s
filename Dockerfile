FROM nginx

COPY ./dist/docker-and-k8s /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf