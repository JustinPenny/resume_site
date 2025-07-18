import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css'

const container = document.getElementById('root'); // This has replaced ReactDOM.render
const root = createRoot(container); // Create a root
root.render(<App />);
