import { createRoot } from 'react-dom/client'
import './meyers-reset.css'
import './index.css'
import {Editor} from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Editor />
)
