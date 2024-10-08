##################
## BASE IMAGE 
##################
FROM node:20-alpine AS base
# RUN apk add --no-cache libc6-compat
WORKDIR /app


##################
## BUILDER 
##################
FROM base AS build
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build


##################
## prod-deps 
##################
FROM base AS prod-deps
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile


##################
## RUNNER 
##################
FROM base AS runner
COPY package.json /app
COPY --chown=node:node --from=prod-deps /app/node_modules /app/node_modules
COPY --chown=node:node --from=build /app/dist /app/dist

EXPOSE 8000

CMD [ "yarn", "start:prod" ]
