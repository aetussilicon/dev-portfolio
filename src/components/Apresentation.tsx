import { motion } from 'framer-motion';

const Apresentation = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='flex justify-between p-4 items-center'
        >
            <div className='font-extrabold text-5xl text-gray-700'>
                <h1>
                    Olá,
                    <br />
                    Meu nome é
                    <br />
                    <span className='bg-clip-text text-transparent bg-gradient-to-tr from-purple-400 to-purple-900'>
                        Artur Oliveira!
                    </span>
                </h1>
                <h1>Desenvolvo coisas para a web</h1>
            </div>
            <div className='p-2.5 rounded-full bg-gradient-to-r from-purple-400 to-purple-900 inline-block'>
                <div
                    style={{ backgroundImage: 'url("/placeholder.jpg")' }}
                    className='w-100 h-100 bg-cover rounded-full bg-center'
                />
            </div>
        </motion.div>
    );
};

export default Apresentation;
