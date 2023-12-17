const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                {/* Add footer content here */}
                <div className="flex justify-around">
                    <div>Column 1</div>
                    <div>Column 2</div>
                    <div>Column 3</div>
                </div>
                <p className="text-center mt-4">© YourCompany - All rights reserved</p>
            </div>
        </footer>
    );
};
export default Footer;