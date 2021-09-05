# Build the front end component in our angular front end base image
FROM my-angular-base:latest as base

COPY . .

RUN npm run ng build

# Create image based off of the nginx image
FROM nginx

COPY --from=base /usr/src/app/dist /usr/share/nginx/html
