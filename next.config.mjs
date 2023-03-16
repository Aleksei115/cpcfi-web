// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
*/

/* @type {import("next").NextConfig} */

!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

import path from "path"; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  reactStrictMode: true,

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src' ,'styles')],
  },
  images: {

    // domains: ['images.pexels.com','miro.medium.com']
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/2726111/**',
      },
      {
        protocol: 'https',
        hostname: 'www.cpcfi.unam.mx'
      },
      {
        protocol: 'http',
        hostname: 'www.cpcfi.unam.mx'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }

    ]
  }
};
export default config;
