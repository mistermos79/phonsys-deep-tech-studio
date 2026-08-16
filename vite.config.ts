import netlify from '@netlify/vite-plugin-tanstack-start'

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [netlify()],
  },
});
