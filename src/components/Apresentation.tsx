

const Apresentation = () => {
    return (
        <div
            className='flex justify-between items-center'
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
                    className='w-80 h-80 bg-cover rounded-full bg-center'
                />
            </div>
        </div>
    );
};

export default Apresentation;
