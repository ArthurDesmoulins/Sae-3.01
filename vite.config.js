import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/Sae-3.01/",  // ⚠️ Remplacer par le nom de votre dépôt GitHub
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        accueil: resolve(__dirname, "/Sae-3.01/Home-page.html"),
        panier: resolve(__dirname, "/Sae-3.01/Basket.html"),
        // Ajouter d'autres pages ici si nécessaire
      },
    },
  },
});