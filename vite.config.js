import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	commonjsOptions: {
		esmExternals: true,
	},
	server: {
		port: 3000,
	},
	commonjsOptions: {
		esmExternals: true,
	},
});
