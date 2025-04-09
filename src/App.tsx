import './App.css';
import Apresentation from './components/Apresentation';
import ProjectsCard from './components/ProjectsCard';
import Stack from './components/Stack';
import { motion } from 'framer-motion';

function App() {
    return (
        <>
            <div className='mx-[15%] p-4 flex flex-col  min-h-screen overflow-hidden'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className='mb-20'>
                        <Apresentation />
                    </div>
                    <Stack />
                </motion.div>
                <div className='mt-20'>
                    <div className='grid grid-cols-2 justify-items-center gap-10'>
                        <ProjectsCard title='Listtta' description='Encontre tatuadores e piercer na sua região pela Listtta.' stack='Next.js, Java, Spring, Postgresql, React, TypeScript' image={"projects/listtta.png"} liveLink={'https://listtta.com.br'} isOpenSource={false}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
