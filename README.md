# WEMPY-ID WEB UI

![Wempy Logo](https://avatars.githubusercontent.com/u/76757449?s=460&u=885b7612459c68281b0cc077a2a809fb5e4b96f8&v=4)

## HOW TO RUN?

### EXTRACT NODE_MODULES

- npm install

### RUN LOCAL

- npm start

### RUN PRODUCTION

- npm run build

### BUILD DOCKER

- docker build --no-cache -t wempy-web .

### TAG DOCKER

- docker tag wempy-web

### DEPLOYMENT

kubectl apply -f deployment.yaml

kubectl apply -f service.yaml

### UPDATE DEPLOYMENT

- kubectl --record deployment.apps/wempyweb set image deployment.v1.apps/wempyweb wempy-app=asia.gcr.io/wempy-id/uiwempy:{VERSION_RELEASE}

- kubectl rollout status deployment.v1.apps/wempyweb
