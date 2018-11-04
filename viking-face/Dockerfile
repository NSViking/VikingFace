FROM node:10.5 as node
RUN npm install -g @angular/cli
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
ARG env=prod
RUN ng build
FROM nginx:1.13
COPY --from=node /app/dist/viking-face /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf