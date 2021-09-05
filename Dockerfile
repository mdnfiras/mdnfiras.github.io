# Build the front end component in our angular front end base image
FROM my-resume-base:latest as resume-base

COPY . .

RUN npm run ng build

# Create image based off of the nginx image
FROM nginx

COPY --from=resume-base /usr/src/app/dist/resume /usr/share/nginx/html
