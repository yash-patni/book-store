// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function About() {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const about = async () => {
//             try {
//                 const res = await axios.get("http://localhost:4003/about");
//                 console.log(res.data);
//                 // setBooks(res.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchBooks();
//     }, []);
//     return (
//         <>
//         <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
//             <div className="mt-28 items-center justify-center text-center">
//                 <h1 className="text-2xl md:text-4xl">
//                 Welcome to <span className="text-pink-500">Yash's Book Store!</span>
//                 </h1>
//                 <p className="mt-12">
//                     Book Store is your ultimate online destination for discovering, purchasing, and enjoying books. Whether you're into the latest bestsellers, timeless classics, or hidden gems, our platform offers a vast collection to suit every reader. With seamless browsing and an integrated e-reader, you can dive into your favorite stories anytime, anywhere. Order physical copies for your bookshelf or instantly access e-books for on-the-go reading—Book Store makes it all possible, bringing the joy of reading to your fingertips.
//                 </p>
//                 <h3 className="mt-12 text-xl md:text-2xl">Technologies Used</h3>
//                 <ul className="list-disc list-inside mt-4">
//                     <li><strong>Frontend:</strong> React.js, Bootstrap</li>
//                     <li><strong>Backend:</strong> Node.js, Express.js </li>
//                     <li><strong>Database:</strong> MongoDB</li>
//                 </ul>
//                 <Link to="/">
//                     <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
//                     Back
//                     </button>
//                 </Link>
//             </div>
//         </div>
//         </>
//     );
// }

// export default About;
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center pt-20"> {/* Added padding to top */}
            <div className="max-w-screen-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="py-10 px-6 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-pink-500 dark:text-pink-400">
                        Welcome to <span className="text-yellow-300 dark:text-yellow-400">Yash's Book Store!</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
                        Your ultimate online destination for discovering, purchasing, and enjoying books.
                    </p>
                </div>

                <div className="p-8 md:p-12 text-gray-700 dark:text-gray-300">
                    <p className="text-lg md:text-xl">
                        Whether you're into the latest bestsellers, timeless classics, or hidden gems, our platform offers a vast collection to suit every reader. With seamless browsing and an integrated e-reader, you can dive into your favorite stories anytime, anywhere. Order physical copies for your bookshelf or instantly access e-books for on-the-go reading—Book Store makes it all possible, bringing the joy of reading to your fingertips.
                    </p>

                    <h3 className="mt-12 text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center">
                        Technologies Used
                    </h3>
                    <ul className="list-disc list-inside mt-6 text-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li><strong>Frontend:</strong> React.js, Bootstrap</li>
                        <li><strong>Backend:</strong> Node.js, Express.js</li>
                        <li><strong>Database:</strong> MongoDB</li>
                        <li><strong>Styling:</strong> Tailwind CSS</li>
                    </ul>

                    <div className="mt-12 text-center">
                        <Link to="/">
                            <button className="bg-yellow-300 dark:bg-yellow-400 text-gray-800 dark:text-gray-900 px-6 py-3 rounded-md hover:bg-yellow-400 dark:hover:bg-yellow-500 transition duration-300">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
