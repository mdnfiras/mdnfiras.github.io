FROM node
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g @angular/cli
RUN npm install --save-dev @angular-devkit/build-angular
ENTRYPOINT ["sh", "-c"]
