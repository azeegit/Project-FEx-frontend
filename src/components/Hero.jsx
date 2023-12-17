import backgroundImage from '../assets/jan-antonin-kolar-vLxXvapupqI-unsplash.jpg'; // assuming the path is relative to the current file

const Hero = () => {
    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="flex flex-col justify-center items-center h-full bg-[#847e70] bg-opacity-50">
                <h1 className="text-6xl font-bold text-yellow-200">Empowering Startups and Investors</h1>
                <p className="text-xl text-yellow-300 mt-4">Building the Future Together</p> {/* Corrected text-gray-300 */}
                <button className="bg-gray-800 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded mt-4">Get Started</button>
            </div>
        </div>
    );
};

export default Hero;
