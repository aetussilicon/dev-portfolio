import './App.css';
import Apresentation from './components/Apresentation';
import Stack from './components/Stack';

function App() {
    return (
        <div className='mx-[15%] p-4 flex flex-col items-cnter h-screen'>
            <div className='mb-30'>
                <Apresentation />
            </div>
            <Stack />
        </div>
    );
}

export default App;
