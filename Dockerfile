# production environment
FROM node:14.15.1-alpine
WORKDIR /
COPY /build /build
RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "build"]