import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { whyframe } from "@whyframe/core";
import { whyframeSvelte } from "@whyframe/svelte";
import sveld from "vite-plugin-sveld";

export default defineConfig({
  plugins: [
    sveltekit(),
    whyframe({
      components: [{ name: "Preview", showSource: true }],
    }),
    whyframeSvelte({
      preprocess: true,
      include: /\.(svelte|svx)$/,
    }),
    sveld(),
  ],
});
