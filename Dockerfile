FROM node:12.18.0-stretch

WORKDIR /home/node/app

COPY . .

RUN yarn install

EXPOSE 3000

# CMD ["yarn", "run", "start"]

# FROM node:12.18.0-stretch 

# RUN yarn global add serve

# WORKDIR /app

# COPY --from=builder /app/build .

# CMD ["serve", "-l", "5000", "-s" , "."]

# EXPOSE 5000
