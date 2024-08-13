import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Context from "./context/Context.tsx";

createRoot(document.getElementById('root')!).render(
    <Context>
        <App/>
    </Context>,
)
