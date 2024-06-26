import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import auth from "auth-astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [tailwind(), icon({
    include: {
      lucide: ["*"]
    }
  }), auth()],
  output: "server",
  adapter: vercel()
});
