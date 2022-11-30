

## A statically generated movie website example using Next.js and tailwind css

This is a Movies App built using Next.js, React and [The Movie Database (TMDB)](https://www.themoviedb.org/) API (Development is ongoing).The main goal was to dive deep into the NextJS framework with the following constaints/features:

- **SSR (Server Side Rendering)**: use NextJS to Server Side render the page with the data retrieved from the API and have a transparent client side navigation
  - **critical-path CSS**: extracting critical CSS is made easy using a CSS-in-JS library like styled-component
- **SEO friendly**: server side render meta tags relative to content based on API result
- **Social Media cards friendly**: server side render meta tags relative to twitter/facebook ... to customize thumbnails/description when page is shared (also works for slack, messenger, WhatsApp ...)

## Deploy on Vercel

A [live deployment](https://movie-app-five-blond.vercel.app/) of this app is available to try it out.

## Installation 

Clone and install the dependencies for `movie-app` locally:

```bash 
  git clone https://github.com/ullasoman/movie_app.git
  cd movie_app 
  npm install
```
## Running locally

* `npm run dev`: dev build
* `npm run build`: production build
* `npm run static-build`: production static build
* `npm run start`: start the project
* `npm run vercel-deploy`: deploy to vercel
* `npm run netlify-deploy`: deploy to netlify 
* `npm run analyze`: bundle analysis 
* (`analyze:server` and `analyze:browser` are available too)

## Quick setup

1. Take a copy of .env file
2. Get your TMDb API key
3. Get your TMDB API read access token
4. Enter the details into the .env.local file

## Tech Stack

Built with:

* Next.js
* Tailwind CSS
* Swiper Js

### TODO

- [ ] Integrate TMDB API by using [SWR](https://swr.vercel.app/) (React Hooks for Data Fetching)
- [ ] Search movie by movie title.
- [ ] Paginate movie list
- [ ] View movie detail
- [ ] Get recommendations

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
