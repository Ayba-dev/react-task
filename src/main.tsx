import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Context from "./context/Context.tsx";
// import { registerSW } from 'virtual:pwa-register';


// const updateSW = registerSW({
//     onNeedRefresh() {
//         // Prompt the user to refresh the page
//     },
//     onOfflineReady() {
//         // Notify the user that the app is ready to work offline
//     },
// });

createRoot(document.getElementById('root')!).render(
    <Context>
        <App/>
    </Context>,
)
