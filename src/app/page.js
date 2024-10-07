// // // // // // // // // import React from 'react';

// // // // // // // // // const sections = [
// // // // // // // // //   { title: '2D and 3D Animation', img: '/path/to/image1.jpg' },
// // // // // // // // //   { title: 'Animal Portrait', img: '/path/to/image2.jpg' },
// // // // // // // // //   { title: 'Anime Intro and Logo', img: '/path/to/image3.jpg' },
// // // // // // // // //   { title: 'Business Card and Logo', img: '/path/to/image4.jpg' },
// // // // // // // // //   { title: 'Brochure', img: '/path/to/image5.jpg' },
// // // // // // // // //   { title: 'Comic Book Page Design', img: '/path/to/image6.jpg' },
// // // // // // // // //   { title: 'Furry Art', img: '/path/to/image7.jpg' },
// // // // // // // // //   { title: 'Cover Art', img: '/path/to/image8.jpg' },
// // // // // // // // //   { title: 'Documentary Edits', img: '/path/to/image9.jpg' },
// // // // // // // // //   { title: 'Emotes', img: '/path/to/image10.jpg' },
// // // // // // // // //   { title: 'Faceless Videos', img: '/path/to/image11.jpg' },
// // // // // // // // //   { title: 'Funny Edits', img: '/path/to/image12.jpg' },
// // // // // // // // //   { title: 'Gaming Banner and Logo', img: '/path/to/image13.jpg' },
// // // // // // // // //   { title: 'Logo Animation', img: '/path/to/image14.jpg' },
// // // // // // // // //   { title: 'Montages', img: '/path/to/image15.jpg' },
// // // // // // // // //   { title: 'Overlays', img: '/path/to/image16.jpg' },
// // // // // // // // //   { title: 'Product Animation', img: '/path/to/image17.jpg' },
// // // // // // // // //   { title: 'Shorts', img: '/path/to/image18.jpg' },
// // // // // // // // //   { title: 'Thumbnail', img: '/path/to/image19.jpg' },
// // // // // // // // //   { title: 'VTuber Models', img: '/path/to/image20.jpg' },
// // // // // // // // // ];

// // // // // // // // // export default function Home() {
// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-gradient-to-br  my-10">
// // // // // // // // //       <header className="py-10 text-center">
// // // // // // // // //         <h1 className="text-5xl uppercase font-bold">Artist's Portfolio</h1>
// // // // // // // // //       </header>
// // // // // // // // //       <main className="container mx-auto p-5 space-y-5 gri grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // // //         {sections.map((section) => (
// // // // // // // // //           <div key={section.title} className="bg-whie flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // // // //             <img src={section.img} alt={section.title} className="w-full h-48 object-cover"/>
// // // // // // // // //             <div className="p-5">
// // // // // // // // //               <h2 className="text-xl font-semibold">{section.title}</h2>
// // // // // // // // //               <p className="mt-2 text-gray-600">Description about {section.title}.</p>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         ))}
// // // // // // // // //       </main>
// // // // // // // // //       <footer className="bg-white py-4 fixed bottom-0 left-0 right-0">
// // // // // // // // //         <p className="text-center text-gray-600">© 2024 Hammad Hussain</p>
// // // // // // // // //       </footer>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // import React from 'react';

// // // // // // // // const sections = [
// // // // // // // //   { title: '2D and 3D Animation', img: '/path/to/image1.jpg' },
// // // // // // // //   { title: 'Animal Portrait', img: '/path/to/image2.jpg' },
// // // // // // // //   { title: 'Anime Intro and Logo', img: '/path/to/image3.jpg' },
// // // // // // // //   { title: 'Business Card and Logo', img: '/path/to/image4.jpg' },
// // // // // // // //   { title: 'Brochure', img: '/path/to/image5.jpg' },
// // // // // // // //   { title: 'Comic Book Page Design', img: '/path/to/image6.jpg' },
// // // // // // // //   { title: 'Furry Art', img: '/path/to/image7.jpg' },
// // // // // // // //   { title: 'Cover Art', img: '/path/to/image8.jpg' },
// // // // // // // //   { title: 'Documentary Edits', img: '/path/to/image9.jpg' },
// // // // // // // //   { title: 'Emotes', img: '/path/to/image10.jpg' },
// // // // // // // //   { title: 'Faceless Videos', img: '/path/to/image11.jpg' },
// // // // // // // //   { title: 'Funny Edits', img: '/path/to/image12.jpg' },
// // // // // // // //   { title: 'Gaming Banner and Logo', img: '/path/to/image13.jpg' },
// // // // // // // //   { title: 'Logo Animation', img: '/path/to/image14.jpg' },
// // // // // // // //   { title: 'Montages', img: '/path/to/image15.jpg' },
// // // // // // // //   { title: 'Overlays', img: '/path/to/image16.jpg' },
// // // // // // // //   { title: 'Product Animation', img: '/path/to/image17.jpg' },
// // // // // // // //   { title: 'Shorts', img: '/path/to/image18.jpg' },
// // // // // // // //   { title: 'Thumbnail', img: '/path/to/image19.jpg' },
// // // // // // // //   { title: 'VTuber Models', img: '/path/to/image20.jpg' },
// // // // // // // // ];

// // // // // // // // export default function Home() {
// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gradient-to-br my-10">
// // // // // // // //       <header className="py-10 text-center">
// // // // // // // //         <h1 className="text-5xl uppercase font-bold">Artist's Portfolio</h1>
// // // // // // // //       </header>
// // // // // // // //       <main className="container mx-auto p-5 space-y-5 grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // // //           <img src={sections[0].img} alt={sections[0].title} className="w-full h-48 object-cover"/>
// // // // // // // //           <div className="p-5">
// // // // // // // //             <h2 className="text-xl font-semibold">{sections[0].title}</h2>
// // // // // // // //             <p className="mt-2 text-gray-600">Description about {sections[0].title}.</p>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // // //           <img src={sections[1].img} alt={sections[1].title} className="w-full h-48 object-cover"/>
// // // // // // // //           <div className="p-5">
// // // // // // // //             <h2 className="text-xl font-semibold">{sections[1].title}</h2>
// // // // // // // //             <p className="mt-2 text-gray-600">Description about {sections[1].title}.</p>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //         {/* Repeat for each section */}
// // // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // // //           <img src={sections[2].img} alt={sections[2].title} className="w-full h-48 object-cover"/>
// // // // // // // //           <div className="p-5">
// // // // // // // //             <h2 className="text-xl font-semibold">{sections[2].title}</h2>
// // // // // // // //             <p className="mt-2 text-gray-600">Description about {sections[2].title}.</p>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //         {/* Add more divs for the remaining sections, following the same pattern */}
// // // // // // // //       </main>
// // // // // // // //       <footer className="bg-white py-4 fixed bottom-0 left-0 right-0">
// // // // // // // //         <p className="text-center text-gray-600">© 2024 Hammad Hussain</p>
// // // // // // // //       </footer>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // import React from 'react';

// // // // // // // export default function Home() {
// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gradient-to-br my-10">
// // // // // // //       <header className="py-10 text-center">
// // // // // // //         <h1 className="text-5xl uppercase font-bold">Artist's Portfolio</h1>
// // // // // // //       </header>
// // // // // // //       <main className="container mx-auto p-5 space-y-5 w- border-2 rid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadowmd overflow-hidden">
// // // // // // //           <img src="/path/to/image1.jpg" alt="2D and 3D Animation" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">2D and 3D Animation</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about 2D and 3D Animation.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image2.jpg" alt="Animal Portrait" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Animal Portrait</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Animal Portrait.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image3.jpg" alt="Anime Intro and Logo" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Anime Intro and Logo</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Anime Intro and Logo.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image4.jpg" alt="Business Card and Logo" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Business Card and Logo</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Business Card and Logo.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image5.jpg" alt="Brochure" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Brochure</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Brochure.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image6.jpg" alt="Comic Book Page Design" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Comic Book Page Design</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Comic Book Page Design.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image7.jpg" alt="Furry Art" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Furry Art</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Furry Art.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image8.jpg" alt="Cover Art" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Cover Art</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Cover Art.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image9.jpg" alt="Documentary Edits" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Documentary Edits</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Documentary Edits.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image10.jpg" alt="Emotes" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Emotes</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Emotes.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image11.jpg" alt="Faceless Videos" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Faceless Videos</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Faceless Videos.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image12.jpg" alt="Funny Edits" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Funny Edits</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Funny Edits.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image13.jpg" alt="Gaming Banner and Logo" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Gaming Banner and Logo</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Gaming Banner and Logo.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image14.jpg" alt="Logo Animation" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Logo Animation</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Logo Animation.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image15.jpg" alt="Montages" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Montages</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Montages.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image16.jpg" alt="Overlays" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Overlays</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Overlays.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image17.jpg" alt="Product Animation" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Product Animation</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Product Animation.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image18.jpg" alt="Shorts" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Shorts</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Shorts.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image19.jpg" alt="Thumbnail" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">Thumbnail</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about Thumbnail.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <div className="bg-white flex justify-center items-center rounded-lg shadow-md overflow-hidden">
// // // // // // //           <img src="/path/to/image20.jpg" alt="VTuber Models" className="w-full h-48 object-cover" />
// // // // // // //           <div className="p-5">
// // // // // // //             <h2 className="text-xl font-semibold">VTuber Models</h2>
// // // // // // //             <p className="mt-2 text-gray-600">Description about VTuber Models.</p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </main>
// // // // // // //       <footer className="bg-white py-4 fixed bottom-0 left-0 right-0">
// // // // // // //         <p className="text-center text-gray-600">© 2024 Hammad Hussain</p>
// // // // // // //       </footer>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import React from 'react';

// // // // // // export default function Home() {
// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br my-10">
// // // // // //       <header className="py-10 text-center">
// // // // // //         <h1 className="text-5xl uppercase font-bold">Artist's Portfolio</h1>
// // // // // //       </header>
// // // // // //       <main className="container mx-auto p-5 space-y-5 grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <video className="w-full h-48 object-cover" controls>
// // // // // //             <source src="/path/to/video1.mp4" type="video/mp4" />
// // // // // //             Your browser does not support the video tag.
// // // // // //           </video>
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">2D and 3D Animation</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about 2D and 3D Animation.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <img src="/path/to/image2.jpg" alt="Animal Portrait" className="w-full h-48 object-cover" />
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Animal Portrait</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Animal Portrait.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <video className="w-full h-48 object-cover" controls>
// // // // // //             <source src="/path/to/video2.mp4" type="video/mp4" />
// // // // // //             Your browser does not support the video tag.
// // // // // //           </video>
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Anime Intro and Logo</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Anime Intro and Logo.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <img src="/path/to/image4.jpg" alt="Business Card and Logo" className="w-full h-48 object-cover" />
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Business Card and Logo</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Business Card and Logo.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <video className="w-full h-48 object-cover" controls>
// // // // // //             <source src="/path/to/video3.mp4" type="video/mp4" />
// // // // // //             Your browser does not support the video tag.
// // // // // //           </video>
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Brochure</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Brochure.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <img src="/path/to/image6.jpg" alt="Comic Book Page Design" className="w-full h-48 object-cover" />
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Comic Book Page Design</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Comic Book Page Design.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <img src="/path/to/image7.jpg" alt="Furry Art" className="w-full h-48 object-cover" />
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Furry Art</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Furry Art.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <img src="/path/to/image8.jpg" alt="Cover Art" className="w-full h-48 object-cover" />
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Cover Art</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Cover Art.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <img src="/path/to/image9.jpg" alt="Documentary Edits" className="w-full h-48 object-cover" />
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Documentary Edits</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Documentary Edits.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <video className="w-full h-48 object-cover" controls>
// // // // // //             <source src="/path/to/video4.mp4" type="video/mp4" />
// // // // // //             Your browser does not support the video tag.
// // // // // //           </video>
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Faceless Videos</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Faceless Videos.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <img src="/path/to/image11.jpg" alt="Funny Edits" className="w-full h-48 object-cover" />
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Funny Edits</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Funny Edits.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <img src="/path/to/image13.jpg" alt="Gaming Banner and Logo" className="w-full h-48 object-cover" />
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Gaming Banner and Logo</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Gaming Banner and Logo.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <video className="w-full h-48 object-cover" controls>
// // // // // //             <source src="/path/to/video5.mp4" type="video/mp4" />
// // // // // //             Your browser does not support the video tag.
// // // // // //           </video>
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Montages</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Montages.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <img src="/path/to/image16.jpg" alt="Overlays" className="w-full h-48 object-cover" />
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Overlays</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Overlays.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <img src="/path/to/image17.jpg" alt="Product Animation" className="w-full h-48 object-cover" />
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Product Animation</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Product Animation.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <video className="w-full h-48 object-cover" controls>
// // // // // //             <source src="/path/to/video6.mp4" type="video/mp4" />
// // // // // //             Your browser does not support the video tag.
// // // // // //           </video>
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Shorts</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Shorts.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <img src="/path/to/image19.jpg" alt="Thumbnail" className="w-full h-48 object-cover" />
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">Thumbnail</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about Thumbnail.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="bg-white flex justify-center items-center rounded-lg overflow-hidden">
// // // // // //           <img src="/path/to/image20.jpg" alt="VTuber Models" className="w-full h-48 object-cover" />
// // // // // //           <div className="p-5">
// // // // // //             <h2 className="text-xl font-semibold">VTuber Models</h2>
// // // // // //             <p className="mt-2 text-gray-600">Description about VTuber Models.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </main>
// // // // // //       <footer className="bg-white py-4 fixed bottom-0 left-0 right-0">
// // // // // //         <p className="text-center text-gray-600">© 2024 Hammad Hussain</p>
// // // // // //       </footer>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import React from 'react';

// // // // // export default function Home() {
// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br my-10">
// // // // //       <header className="py-10 text-center">
// // // // //         <h1 className="text-5xl uppercase font-bold">Artist's Portfolio</h1>
// // // // //       </header>
// // // // //       <main className="container mx-auto p-5 space-y-5">
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <video className="w-full h-48 object-cover" controls>
// // // // //             <source src="/path/to/video1.mp4" type="video/mp4" />
// // // // //             Your browser does not support the video tag.
// // // // //           </video>
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">2D and 3D Animation</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about 2D and 3D Animation.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <img src="/path/to/image2.jpg" alt="Animal Portrait" className="w-full h-48 object-cover" />
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Animal Portrait</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Animal Portrait.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <video className="w-full h-48 object-cover" controls>
// // // // //             <source src="/path/to/video2.mp4" type="video/mp4" />
// // // // //             Your browser does not support the video tag.
// // // // //           </video>
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Anime Intro and Logo</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Anime Intro and Logo.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <img src="/path/to/image4.jpg" alt="Business Card and Logo" className="w-full h-48 object-cover" />
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Business Card and Logo</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Business Card and Logo.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <video className="w-full h-48 object-cover" controls>
// // // // //             <source src="/path/to/video3.mp4" type="video/mp4" />
// // // // //             Your browser does not support the video tag.
// // // // //           </video>
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Brochure</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Brochure.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <img src="/path/to/image6.jpg" alt="Comic Book Page Design" className="w-full h-48 object-cover" />
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Comic Book Page Design</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Comic Book Page Design.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <img src="/path/to/image7.jpg" alt="Furry Art" className="w-full h-48 object-cover" />
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Furry Art</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Furry Art.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <img src="/path/to/image8.jpg" alt="Cover Art" className="w-full h-48 object-cover" />
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Cover Art</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Cover Art.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <img src="/path/to/image9.jpg" alt="Documentary Edits" className="w-full h-48 object-cover" />
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Documentary Edits</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Documentary Edits.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <video className="w-full h-48 object-cover" controls>
// // // // //             <source src="/path/to/video4.mp4" type="video/mp4" />
// // // // //             Your browser does not support the video tag.
// // // // //           </video>
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Faceless Videos</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Faceless Videos.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <img src="/path/to/image11.jpg" alt="Funny Edits" className="w-full h-48 object-cover" />
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Funny Edits</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Funny Edits.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <img src="/path/to/image13.jpg" alt="Gaming Banner and Logo" className="w-full h-48 object-cover" />
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Gaming Banner and Logo</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Gaming Banner and Logo.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <video className="w-full h-48 object-cover" controls>
// // // // //             <source src="/path/to/video5.mp4" type="video/mp4" />
// // // // //             Your browser does not support the video tag.
// // // // //           </video>
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Montages</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Montages.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <img src="/path/to/image16.jpg" alt="Overlays" className="w-full h-48 object-cover" />
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Overlays</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Overlays.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <img src="/path/to/image17.jpg" alt="Product Animation" className="w-full h-48 object-cover" />
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Product Animation</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Product Animation.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <video className="w-full h-48 object-cover" controls>
// // // // //             <source src="/path/to/video6.mp4" type="video/mp4" />
// // // // //             Your browser does not support the video tag.
// // // // //           </video>
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Shorts</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Shorts.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <img src="/path/to/image19.jpg" alt="Thumbnail" className="w-full h-48 object-cover" />
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">Thumbnail</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about Thumbnail.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // // //           <img src="/path/to/image20.jpg" alt="VTuber Models" className="w-full h-48 object-cover" />
// // // // //           <div className="p-5">
// // // // //             <h2 className="text-xl font-semibold">VTuber Models</h2>
// // // // //             <p className="mt-2 text-gray-600">Description about VTuber Models.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </main>
// // // // //       <footer className="bg-white py-4 fixed bottom-0 left-0 right-0">
// // // // //         <p className="text-center text-gray-600">© 2024 Hammad Hussain</p>
// // // // //       </footer>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React from 'react';

// // // // export default function Home() {
// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br my-10">
// // // //       <header className="py-10 text-center">
// // // //         <h1 className="text-5xl uppercase font-bold">Artist's Portfolio</h1>
// // // //       </header>
// // // //       <main className="container mx-auto p-5 space-y-5">
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <video className="w-full h-48 object-cover" controls>
// // // //             <source src="/path/to/video1.mp4" type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </video>
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">2D Animation</h2>
// // // //             <p className="mt-2 text-gray-600">Description about 2D Animation.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <video className="w-full h-48 object-cover" controls>
// // // //             <source src="/path/to/video2.mp4" type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </video>
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">3D Animation</h2>
// // // //             <p className="mt-2 text-gray-600">Description about 3D Animation.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <img src="/path/to/image2.jpg" alt="Animal Portrait" className="w-full h-48 object-cover" />
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Animal Portrait</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Animal Portrait.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <video className="w-full h-48 object-cover" controls>
// // // //             <source src="/path/to/video3.mp4" type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </video>
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Anime Intro</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Anime Intro.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <video className="w-full h-48 object-cover" controls>
// // // //             <source src="/path/to/video4.mp4" type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </video>
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Logo</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Logo.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <video className="w-full h-48 object-cover" controls>
// // // //             <source src="/path/to/video5.mp4" type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </video>
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Brochure</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Brochure.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <img src="/path/to/image6.jpg" alt="Comic Book Page Design" className="w-full h-48 object-cover" />
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Comic Book Page Design</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Comic Book Page Design.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <img src="/path/to/image7.jpg" alt="Furry Art" className="w-full h-48 object-cover" />
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Furry Art</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Furry Art.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <img src="/path/to/image8.jpg" alt="Cover Art" className="w-full h-48 object-cover" />
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Cover Art</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Cover Art.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <img src="/path/to/image9.jpg" alt="Documentary Edits" className="w-full h-48 object-cover" />
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Documentary Edits</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Documentary Edits.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <video className="w-full h-48 object-cover" controls>
// // // //             <source src="/path/to/video6.mp4" type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </video>
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Faceless Videos</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Faceless Videos.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <img src="/path/to/image11.jpg" alt="Funny Edits" className="w-full h-48 object-cover" />
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Funny Edits</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Funny Edits.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <img src="/path/to/image13.jpg" alt="Gaming Banner" className="w-full h-48 object-cover" />
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Gaming Banner</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Gaming Banner.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <video className="w-full h-48 object-cover" controls>
// // // //             <source src="/path/to/video7.mp4" type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </video>
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Montages</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Montages.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <img src="/path/to/image16.jpg" alt="Overlays" className="w-full h-48 object-cover" />
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Overlays</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Overlays.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <img src="/path/to/image17.jpg" alt="Product Animation" className="w-full h-48 object-cover" />
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Product Animation</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Product Animation.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <video className="w-full h-48 object-cover" controls>
// // // //             <source src="/path/to/video8.mp4" type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </video>
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Shorts</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Shorts.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <img src="/path/to/image19.jpg" alt="Thumbnail" className="w-full h-48 object-cover" />
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">Thumbnail</h2>
// // // //             <p className="mt-2 text-gray-600">Description about Thumbnail.</p>
// // // //           </div>
// // // //         </div>
// // // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // // //           <img src="/path/to/image20.jpg" alt="VTuber Models" className="w-full h-48 object-cover" />
// // // //           <div className="p-5">
// // // //             <h2 className="text-xl font-semibold">VTuber Models</h2>
// // // //             <p className="mt-2 text-gray-600">Description about VTuber Models.</p>
// // // //           </div>
// // // //         </div>
// // // //       </main>
// // // //       <footer className="bg-white py-4 fixed bottom-0 left-0 right-0">
// // // //         <p className="text-center text-gray-600">© 2024 Hammad Hussain</p>
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // }







// // // import React from "react";

// // // export default function Home() {
// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br my-10">
// // //       <header className="py-10 text-center">
// // //         <h1 className="text-5xl uppercase font-bold">Artist's Portfolio</h1>
// // //       </header>
// // //       <main className="container mx-auto p-5 space-y-5">
// // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // //           <video className="w-3/4 h-48 object-cover" controls>
// // //             <source src="/2D.mp4" type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">2D Animation</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Explore my vibrant 2D animations that bring characters and stories
// // //               to life with dynamic visuals and captivating narratives.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row-reverse justify-center items-center rounded-lg overflow-hidden">
// // //           <video className="w-3/4 h-48 object-cover" controls>
// // //             <source src="/3D.mp4" type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">3D Animation</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Discover my 3D animations, showcasing intricate designs and
// // //               realistic movements that create immersive experiences.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // //           <img
// // //             src="/Potrait.jpg"
// // //             alt="Animal Portrait"
// // //             className="w-3/4 h-48 object-cover"
// // //           />
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Animal Portrait</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Detailed and expressive animal portraits that capture the essence
// // //               of wildlife and domestic animals alike.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row-reverse justify-center items-center rounded-lg overflow-hidden">
// // //           <video className="w-3/4 h-48 object-cover" controls>
// // //             <source src="/AnimeIntro.mp4" type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Anime Intro</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Engaging anime intros designed to set the tone for captivating
// // //               stories, blending visuals and sound seamlessly.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // //           <img
// // //             src="/AnimeLogo.jpg"
// // //             alt="Animal Portrait"
// // //             className="w-3/4 h-48 object-cover"
// // //           />

// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Anime Logo Design</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Creative logo designs that reflect the identity of brands,
// // //               combining uniqueness and professionalism.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row-reverse justify-center items-center rounded-lg overflow-hidden">
// // //           <video className="w-3/4 h-48 object-cover" controls>
// // //             <source src="/Broucher (1).mp4" type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Brochure Design</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Professional brochure designs that effectively communicate
// // //               messages and enhance marketing efforts.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // //           <img
// // //             src="/Thumbnail.jpg"
// // //             alt="Thumbnail"
// // //             className="w-3/4 h-48 object-cover"
// // //           />
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Thumbnail</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Striking thumbnails designed to attract clicks and enhance the
// // //               visibility of content.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row-reverse justify-center items-center rounded-lg overflow-hidden">
// // //           <img
// // //             src="/furry.jpg"
// // //             alt="Furry Art"
// // //             className="w-3/4 h-48 object-cover"
// // //           />
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Furry Art</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Vibrant and imaginative furry art that showcases unique characters
// // //               and storytelling in the furry community.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // //           <img
// // //             src="/CoverArtImg.jpg"
// // //             alt="Cover Art"
// // //             className="w-3/4 h-48 object-cover"
// // //           />
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Cover Art</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Eye-catching cover art designed to attract attention and represent
// // //               the essence of books and projects.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row-reverse justify-center items-center rounded-lg overflow-hidden">
// // //         <video className="w-3/4 h-48 object-cover" controls>
// // //             <source src="/DocEdit (2).mp4" type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Documentary Edits</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Skillfully edited documentary segments that highlight important
// // //               narratives and visuals.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // //         <video className="w-3/4 h-48 object-cover" controls>
// // //             <source src="/Faceless (2).mp4" type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Faceless Videos</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Engaging faceless video content that conveys messages and stories
// // //               without the need for a presenter.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row-reverse justify-center items-center rounded-lg overflow-hidden">
// // //           <video className="w-3/4 h-48 object-cover" controls>
// // //             <source src="/Funny.mp4" type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>{" "}
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Funny Edits</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Light-hearted and humorous video edits designed to entertain and
// // //               engage viewers.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // //           <img
// // //             src="/GammingBanImg.jpg"
// // //             alt="Gaming Banner"
// // //             className="w-3/4 h-48 object-cover"
// // //           />
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Gaming Banner</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Creative gaming banners that capture the spirit of gaming
// // //               communities and promote content effectively.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row-reverse justify-center items-center rounded-lg overflow-hidden">
// // //           <video className="w-3/4 h-48 object-cover" controls>
// // //             <source src="/Montages (2).mp4" type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Montages</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Captivating montages that blend clips and music to create a
// // //               memorable viewing experience.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // //           <img
// // //             src="/Overlays (3).jpg"
// // //             alt="Overlays"
// // //             className="w-3/4 h-48 object-cover"
// // //           />
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Overlays</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Professional overlays for videos and streams that enhance visual
// // //               appeal and viewer engagement.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row-reverse justify-center items-center rounded-lg overflow-hidden">
// // //           <video className="w-3/4 h-48 object-cover" controls>
// // //             <source src="/ProductAnim (2).mp4" type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Product Animation</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Engaging product animations that highlight features and benefits,
// // //               driving interest and sales.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden">
// // //           <video className="w-3/4 h-48 object-cover" controls>
// // //             <source src="/Shorts (2).mp4" type="video/mp4" />
// // //             Your browser does not support the video tag.
// // //           </video>
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">Shorts</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Bite-sized video shorts that deliver quick and entertaining
// // //               content, perfect for social media.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white flex flex-col md:flex-row-reverse justify-center items-center rounded-lg overflow-hidden">
// // //           <img
// // //             src="/Vtuber.jpg"
// // //             alt="VTuber Models"
// // //             className="w-3/4 h-48 object-cover"
// // //           />
// // //           <div className="p-5">
// // //             <h2 className="text-xl font-semibold">VTuber Models</h2>
// // //             <p className="mt-2 text-gray-600">
// // //               Custom VTuber models created for engaging live streams and content
// // //               creation in virtual environments.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </main>
// // //       <footer className="bg-white py-4 fixed bottom-0 left-0 right-0">
// // //         <p className="text-center text-gray-600">© 2024 Hammad Hussain</p>
// // //       </footer>
// // //     </div>
// // //   );
// // // }











// // import React from "react";

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-500 my-10">
// //       <header className="py-10 text-center">
// //         <h1 className="text-5xl uppercase font-bold text-white">Artist's Portfolio</h1>
// //       </header>
// //       <main className="container mx-auto p-5 space-y-5">
// //         {[
// //           {
// //             title: "2D Animation",
// //             description: "Explore my vibrant 2D animations that bring characters and stories to life with dynamic visuals and captivating narratives.",
// //             media: <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
// //               <source src="/2D.mp4" type="video/mp4" />
// //               Your browser does not support the video tag.
// //             </video>
// //           },
// //           {
// //             title: "3D Animation",
// //             description: "Discover my 3D animations, showcasing intricate designs and realistic movements that create immersive experiences.",
// //             media: <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
// //               <source src="/3D.mp4" type="video/mp4" />
// //               Your browser does not support the video tag.
// //             </video>
// //           },
// //           {
// //             title: "Animal Portrait",
// //             description: "Detailed and expressive animal portraits that capture the essence of wildlife and domestic animals alike.",
// //             media: <img src="/Potrait.jpg" alt="Animal Portrait" className="w-full h-60 object-cover transition-transform transform hover:scale-105" />
// //           },
// //           {
// //             title: "Anime Intro",
// //             description: "Engaging anime intros designed to set the tone for captivating stories, blending visuals and sound seamlessly.",
// //             media: <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
// //               <source src="/AnimeIntro.mp4" type="video/mp4" />
// //               Your browser does not support the video tag.
// //             </video>
// //           },
// //           // ... (Add other portfolio items in a similar manner)
// //         ].map((item, index) => (
// //           <div key={index} className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
// //             {index % 2 === 0 ? (
// //               <>
// //                 {item.media}
// //                 <div className="p-5">
// //                   <h2 className="text-xl font-semibold">{item.title}</h2>
// //                   <p className="mt-2 text-gray-600">{item.description}</p>
// //                 </div>
// //               </>
// //             ) : (
// //               <>
// //                 <div className="p-5">
// //                   <h2 className="text-xl font-semibold">{item.title}</h2>
// //                   <p className="mt-2 text-gray-600">{item.description}</p>
// //                 </div>
// //                 {item.media}
// //               </>
// //             )}
// //           </div>
// //         ))}

// //       </main>
// //       <footer className="bg-white py-4 fixed bottom-0 left-0 right-0">
// //         <p className="text-center text-gray-600">© 2024 Hammad Hussain</p>
// //       </footer>
// //     </div>
// //   );
// // }
















// import React from "react";

// export default function Home() {
//   return (
//     <div className="min-h-screen bggradient-to-br overflow-hidden  from-purple-500  to-blue-500 my-10">
//       <header className="py-10 text-center">
//         <h1 className="text-5xl uppercase font-bold text-wite">Artist's Portfolio</h1>
//       </header>
//       <main className="container  p-5 space-y-5">
//         {[
//           {
//             title: "2D Animation",
//             description: "Explore my vibrant 2D animations that bring characters and stories to life with dynamic visuals and captivating narratives.",
//             media: (
//               <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
//                 <source src="/2D.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )
//           },
//           {
//             title: "3D Animation",
//             description: "Discover my 3D animations, showcasing intricate designs and realistic movements that create immersive experiences.",
//             media: (
//               <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
//                 <source src="/3D.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )
//           },
//           {
//             title: "Animal Portrait",
//             description: "Detailed and expressive animal portraits that capture the essence of wildlife and domestic animals alike.",
//             media: (
//               <img src="/Potrait.jpg" alt="Animal Portrait" className="w-full h-60 object-cover transition-transform transform hover:scale-105" />
//             )
//           },
//           {
//             title: "Anime Intro",
//             description: "Engaging anime intros designed to set the tone for captivating stories, blending visuals and sound seamlessly.",
//             media: (
//               <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
//                 <source src="/AnimeIntro.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )
//           },
//           {
//             title: "Anime Logo Design",
//             description: "Creative logo designs that reflect the identity of brands, combining uniqueness and professionalism.",
//             media: (
//               <img src="/AnimeLogo.jpg" alt="Anime Logo Design" className="w-full h-60 object-cover transition-transform transform hover:scale-105" />
//             )
//           },
//           {
//             title: "Brochure Design",
//             description: "Professional brochure designs that effectively communicate messages and enhance marketing efforts.",
//             media: (
//               <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
//                 <source src="/Broucher (1).mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )
//           },
//           {
//             title: "Thumbnail",
//             description: "Striking thumbnails designed to attract clicks and enhance the visibility of content.",
//             media: (
//               <img src="/Thumbnail.jpg" alt="Thumbnail" className="w-full h-60 object-cover transition-transform transform hover:scale-105" />
//             )
//           },
//           {
//             title: "Furry Art",
//             description: "Vibrant and imaginative furry art that showcases unique characters and storytelling in the furry community.",
//             media: (
//               <img src="/furry.jpg" alt="Furry Art" className="w-full h-60 object-cover transition-transform transform hover:scale-105" />
//             )
//           },
//           {
//             title: "Cover Art",
//             description: "Eye-catching cover art designed to attract attention and represent the essence of books and projects.",
//             media: (
//               <img src="/CoverArtImg.jpg" alt="Cover Art" className="w-full h-60 object-cover transition-transform transform hover:scale-105" />
//             )
//           },
//           {
//             title: "Documentary Edits",
//             description: "Skillfully edited documentary segments that highlight important narratives and visuals.",
//             media: (
//               <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
//                 <source src="/DocEdit (2).mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )
//           },
//           {
//             title: "Faceless Videos",
//             description: "Engaging faceless video content that conveys messages and stories without the need for a presenter.",
//             media: (
//               <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
//                 <source src="/Faceless (2).mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )
//           },
//           {
//             title: "Funny Edits",
//             description: "Light-hearted and humorous video edits designed to entertain and engage viewers.",
//             media: (
//               <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
//                 <source src="/Funny.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )
//           },
//           {
//             title: "Gaming Banner",
//             description: "Creative gaming banners that capture the spirit of gaming communities and promote content effectively.",
//             media: (
//               <img src="/GammingBanImg.jpg" alt="Gaming Banner" className="w-full h-60 object-cover transition-transform transform hover:scale-105" />
//             )
//           },
//           {
//             title: "Montages",
//             description: "Captivating montages that blend clips and music to create a memorable viewing experience.",
//             media: (
//               <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
//                 <source src="/Montages (2).mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )
//           },
//           {
//             title: "Overlays",
//             description: "Professional overlays for videos and streams that enhance visual appeal and viewer engagement.",
//             media: (
//               <img src="/Overlays (3).jpg" alt="Overlays" className="w-full h-60 object-cover transition-transform transform hover:scale-105" />
//             )
//           },
//           {
//             title: "Product Animation",
//             description: "Engaging product animations that highlight features and benefits, driving interest and sales.",
//             media: (
//               <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
//                 <source src="/ProductAnim (2).mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )
//           },
//           {
//             title: "Shorts",
//             description: "Bite-sized video shorts that deliver quick and entertaining content, perfect for social media.",
//             media: (
//               <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
//                 <source src="/Shorts (2).mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )
//           },
//           {
//             title: "VTuber Models",
//             description: "Custom VTuber models created for engaging live streams and content creation in virtual environments.",
//             media: (
//               <img src="/Vtuber.jpg" alt="VTuber Models" className="w-full h-60 object-cover transition-transform transform hover:scale-105" />
//             )
//           }
//         ].map((item, index) => (
//           <div key={index} className="bg-white flex flex-col md:flex-row justify-center items-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
//             {index % 2 === 0 ? (
//               <>
//                 {item.media}
//                 <div className="p-5">
//                   <h2 className="text-xl font-semibold">{item.title}</h2>
//                   <p className="mt-2 text-gray-600">{item.description}</p>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="p-5">
//                   <h2 className="text-xl font-semibold">{item.title}</h2>
//                   <p className="mt-2 text-gray-600">{item.description}</p>
//                 </div>
//                 {item.media}
//               </>
//             )}
//           </div>
//         ))}
//       </main>
//       <footer className="bg-white py-4 fixed bottom-0 left-0 right-0">
//         <p className="text-center text-gray-600">© 2024 Hammad Hussain</p>
//       </footer>
//     </div>
//   );
// }

















'use client'
import React, { useState } from "react";

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      onClick={onClose}
    >
      <img src={imageSrc} alt="Expanded view" className="max-w-full max-h-full" />
    </div>
  );
};

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage("");
  };

  return (
    <div className="min-h-screen bg-gradient-t-br from-purple-500 to-blue-500 my-10">
      <header className="py-10 text-center">
        <h1 className="text-5xl uppercase font-bold text-hite">My Portfolio</h1>
      </header>
      <main className="container mx-auto lg:mx-44  w-fit p-5 space-y-14">
        {[
          {
            title: "2D Animation",
            description: "Explore my vibrant 2D animations that bring characters and stories to life with dynamic visuals and captivating narratives.",
            media: (
              <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
                <source src="/2D.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          },
          {
            title: "3D Animation",
            description: "Discover my 3D animations, showcasing intricate designs and realistic movements that create immersive experiences.",
            media: (
              <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
                <source src="/3D.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          },
          {
            title: "Animal Portrait",
            description: "Detailed and expressive animal portraits that capture the essence of wildlife and domestic animals alike.",
            media: (
              <img
                src="/Potrait.jpg"
                alt="Animal Portrait"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/Potrait.jpg")}
              />
            )
          },
          {
            title: "Anime Intro",
            description: "Engaging anime intros designed to set the tone for captivating stories, blending visuals and sound seamlessly.",
            media: (
              <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
                <source src="/AnimeIntro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          },
          {
            title: "Anime Logo Design",
            description: "Creative logo designs that reflect the identity of brands, combining uniqueness and professionalism.",
            media: (
              <img
                src="/AnimeLogo.jpg"
                alt="Anime Logo Design"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/AnimeLogo.jpg")}
              />
            )
          },
          {
            title: "Brochure Design",
            description: "Professional brochure designs that effectively communicate messages and enhance marketing efforts.",
            media: (
              <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
                <source src="/Broucher (1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          },
          {
            title: "Thumbnail",
            description: "Striking thumbnails designed to attract clicks and enhance the visibility of content.",
            media: (
              <img
                src="/Thumbnail.jpg"
                alt="Thumbnail"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/Thumbnail.jpg")}
              />
            )
          },
          {
            title: "Furry Art",
            description: "Vibrant and imaginative furry art that showcases unique characters and storytelling in the furry community.",
            media: (
              <img
                src="/furry.jpg"
                alt="Furry Art"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/furry.jpg")}
              />
            )
          },
          {
            title: "Cover Art",
            description: "Eye-catching cover art designed to attract attention and represent the essence of books and projects.",
            media: (
              <img
                src="/CoverArtImg.jpg"
                alt="Cover Art"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/CoverArtImg.jpg")}
              />
            )
          },
          {
            title: "Documentary Edits",
            description: "Skillfully edited documentary segments that highlight important narratives and visuals.",
            media: (
              <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
                <source src="/DocEdit (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          },
          {
            title: "Faceless Videos",
            description: "Engaging faceless video content that conveys messages and stories without the need for a presenter.",
            media: (
              <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
                <source src="/Faceless (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          },
          {
            title: "Funny Edits",
            description: "Light-hearted and humorous video edits designed to entertain and engage viewers.",
            media: (
              <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
                <source src="/Funny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          },
          {
            title: "Gaming Banner",
            description: "Creative gaming banners that capture the spirit of gaming communities and promote content effectively.",
            media: (
              <img
                src="/GammingBanImg.jpg"
                alt="Gaming Banner"
                className="w-96 h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/GammingBanImg.jpg")}
              />
            )
          },
          {
            title: "Montages",
            description: "Captivating montages that blend clips and music to create a memorable viewing experience.",
            media: (
              <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
                <source src="/Montages (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          },
          {
            title: "Overlays",
            description: "Professional overlays for videos and streams that enhance visual appeal and viewer engagement.",
            media: (
              <img
                src="/Overlays (3).jpg"
                alt="Overlays"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/Overlays (3).jpg")}
              />
            )
          },
          {
            title: "Product Animation",
            description: "Engaging product animations that highlight features and benefits, driving interest and sales.",
            media: (
              <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
                <source src="/ProductAnim (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          },
          {
            title: "Shorts",
            description: "Bite-sized video shorts that deliver quick and entertaining content, perfect for social media.",
            media: (
              <video className="w-full h-60 object-cover transition-transform transform hover:scale-105" controls>
                <source src="/Shorts (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          },
          {
            title: "VTuber Models",
            description: "Custom VTuber models created for engaging live streams and content creation in virtual environments.",
            media: (
              <img
                src="/Vtuber.jpg"
                alt="VTuber Models"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/Vtuber.jpg")}
              />
            )
          }
        ].map((item, index) => (
          <div key={index} className="bg-white flex flex-col md:gap-5 md:flex-row justify-center items-center rounded-lg shadow-g overflow-hidden transition-transform transform hover:scale-105">
            {index % 2 === 0 ? (
              <>
                {item.media}
                <div className="p-5">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="p-5">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
                {item.media}
              </>
            )}
          </div>
        ))}
      </main>
      <footer className="bg-white py-4 fixed bottom-0 left-0 right-0">
        <p className="text-center text-gray-600">© 2024 Hammad Hussain</p>
      </footer>
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={currentImage} />
    </div>
  );
}
