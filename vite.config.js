import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            // devOptions: {
            //     enabled: true
            // },
            strategies: 'injectManifest',
            srcDir: 'src',
            filename: 'sw.ts',
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
            manifest: {
                name: 'My React App',
                short_name: 'ReactApp',
                description: 'My awesome React app!',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: './src/assets/react.svg',
                        sizes: '192x192',
                        type: 'image/png',
                    }
                ]
            },
        })
    ],
})
