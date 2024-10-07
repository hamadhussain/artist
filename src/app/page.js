"use client";
import React, { useState } from "react";
const SkillsSection = () => {
  return (
    <>
      <div className="bg-white rounded-lg  p-6">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600">
          Hello! I am a passionate creator with a strong background in
          development, design, editing, and animation. My journey began with a
          love for technology and art, which has shaped my approach to creating
          engaging content that resonates with audiences. I thrive on challenges
          and enjoy pushing the boundaries of creativity to deliver projects
          that not only meet but exceed expectations.
        </p>
        <p className="mt-4 text-gray-600">
          When I'm not creating, you can find me exploring new technologies,
          participating in design communities, or working on personal projects
          that inspire me. I'm always eager to learn and grow, both personally
          and professionally.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center bg-white rounded-lg p-6 mt-10">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600 mb-2">
            As a versatile creator, I blend my expertise in development, design,
            editing, and animation to deliver engaging and impactful content.
          </p>
          <p className="text-gray-600 mb-2">
            🌟 <strong>Developer:</strong> I write clean and efficient code,
            creating user-friendly applications and websites.
          </p>
          <p className="text-gray-600 mb-2">
            🎨 <strong>Designer:</strong> My design philosophy centers on
            aesthetics and usability, ensuring every visual element serves a
            purpose.
          </p>
          <p className="text-gray-600 mb-2">
            🎬 <strong>Editor:</strong> I edit videos with precision, enhancing
            narratives and delivering polished final products.
          </p>
          <p className="text-gray-600 mb-2">
            ✨ <strong>Animator:</strong> I bring stories to life through
            vibrant animations that engage and captivate audiences.
          </p>
        </div>
      </div>
    </>
  );
};

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      onClick={onClose}
    >
      <img
        src={imageSrc}
        alt="Expanded view"
        className="max-w-full max-h-full"
      />
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
      <SkillsSection />
      <main className="hidden md:block container mx-auto lg:mx-44  w-fit p-5 space-y-14">
        <h2 className="text-2xl font-bold mb-4">My Projects</h2>

        {[
          {
            title: "2D Animation",
            description:
              "Explore my vibrant 2D animations that bring characters and stories to life with dynamic visuals and captivating narratives.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/2D.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "3D Animation",
            description:
              "Discover my 3D animations, showcasing intricate designs and realistic movements that create immersive experiences.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/3D.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Animal Portrait",
            description:
              "Detailed and expressive animal portraits that capture the essence of wildlife and domestic animals alike.",
            media: (
              <img
                src="/Potrait.jpg"
                alt="Animal Portrait"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/Potrait.jpg")}
              />
            ),
          },
          {
            title: "Anime Intro",
            description:
              "Engaging anime intros designed to set the tone for captivating stories, blending visuals and sound seamlessly.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/AnimeIntro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Anime Logo Design",
            description:
              "Creative logo designs that reflect the identity of brands, combining uniqueness and professionalism.",
            media: (
              <img
                src="/AnimeLogo.jpg"
                alt="Anime Logo Design"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/AnimeLogo.jpg")}
              />
            ),
          },
          {
            title: "Brochure Design",
            description:
              "Professional brochure designs that effectively communicate messages and enhance marketing efforts.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/Broucher (1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Thumbnail",
            description:
              "Striking thumbnails designed to attract clicks and enhance the visibility of content.",
            media: (
              <img
                src="/Thumbnail.jpg"
                alt="Thumbnail"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/Thumbnail.jpg")}
              />
            ),
          },
          {
            title: "Furry Art",
            description:
              "Vibrant and imaginative furry art that showcases unique characters and storytelling in the furry community.",
            media: (
              <img
                src="/furry.jpg"
                alt="Furry Art"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/furry.jpg")}
              />
            ),
          },
          {
            title: "Cover Art",
            description:
              "Eye-catching cover art designed to attract attention and represent the essence of books and projects.",
            media: (
              <img
                src="/CoverArtImg.jpg"
                alt="Cover Art"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/CoverArtImg.jpg")}
              />
            ),
          },
          {
            title: "Documentary Edits",
            description:
              "Skillfully edited documentary segments that highlight important narratives and visuals.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/DocEdit (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Faceless Videos",
            description:
              "Engaging faceless video content that conveys messages and stories without the need for a presenter.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/Faceless (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Funny Edits",
            description:
              "Light-hearted and humorous video edits designed to entertain and engage viewers.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/Funny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Gaming Banner",
            description:
              "Creative gaming banners that capture the spirit of gaming communities and promote content effectively.",
            media: (
              <img
                src="/GammingBanImg.jpg"
                alt="Gaming Banner"
                className="w-96 h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/GammingBanImg.jpg")}
              />
            ),
          },
          {
            title: "Montages",
            description:
              "Captivating montages that blend clips and music to create a memorable viewing experience.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/Montages (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Overlays",
            description:
              "Professional overlays for videos and streams that enhance visual appeal and viewer engagement.",
            media: (
              <img
                src="/Overlays (3).jpg"
                alt="Overlays"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/Overlays (3).jpg")}
              />
            ),
          },
          {
            title: "Product Animation",
            description:
              "Engaging product animations that highlight features and benefits, driving interest and sales.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/ProductAnim (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Shorts",
            description:
              "Bite-sized video shorts that deliver quick and entertaining content, perfect for social media.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/Shorts (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "VTuber Models",
            description:
              "Custom VTuber models created for engaging live streams and content creation in virtual environments.",
            media: (
              <img
                src="/Vtuber.jpg"
                alt="VTuber Models"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/Vtuber.jpg")}
              />
            ),
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white flex flex-col md:gap-5 md:flex-row justify-center items-center rounded-lg shadow-g overflow-hidden transition-transform transform hover:scale-105"
          >
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
      <main className="block md:hidden container mx-auto lg:mx-44  w-fit p-5 space-y-14">
        <h2 className="text-2xl font-bold mb-4">My Projects</h2>

        {[
          {
            title: "2D Animation",
            description:
              "Explore my vibrant 2D animations that bring characters and stories to life with dynamic visuals and captivating narratives.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/2D.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "3D Animation",
            description:
              "Discover my 3D animations, showcasing intricate designs and realistic movements that create immersive experiences.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/3D.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Animal Portrait",
            description:
              "Detailed and expressive animal portraits that capture the essence of wildlife and domestic animals alike.",
            media: (
              <img
                src="/Potrait.jpg"
                alt="Animal Portrait"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/Potrait.jpg")}
              />
            ),
          },
          {
            title: "Anime Intro",
            description:
              "Engaging anime intros designed to set the tone for captivating stories, blending visuals and sound seamlessly.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/AnimeIntro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Anime Logo Design",
            description:
              "Creative logo designs that reflect the identity of brands, combining uniqueness and professionalism.",
            media: (
              <img
                src="/AnimeLogo.jpg"
                alt="Anime Logo Design"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/AnimeLogo.jpg")}
              />
            ),
          },
          {
            title: "Brochure Design",
            description:
              "Professional brochure designs that effectively communicate messages and enhance marketing efforts.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/Broucher (1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Thumbnail",
            description:
              "Striking thumbnails designed to attract clicks and enhance the visibility of content.",
            media: (
              <img
                src="/Thumbnail.jpg"
                alt="Thumbnail"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/Thumbnail.jpg")}
              />
            ),
          },
          {
            title: "Furry Art",
            description:
              "Vibrant and imaginative furry art that showcases unique characters and storytelling in the furry community.",
            media: (
              <img
                src="/furry.jpg"
                alt="Furry Art"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/furry.jpg")}
              />
            ),
          },
          {
            title: "Cover Art",
            description:
              "Eye-catching cover art designed to attract attention and represent the essence of books and projects.",
            media: (
              <img
                src="/CoverArtImg.jpg"
                alt="Cover Art"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/CoverArtImg.jpg")}
              />
            ),
          },
          {
            title: "Documentary Edits",
            description:
              "Skillfully edited documentary segments that highlight important narratives and visuals.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/DocEdit (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Faceless Videos",
            description:
              "Engaging faceless video content that conveys messages and stories without the need for a presenter.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/Faceless (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Funny Edits",
            description:
              "Light-hearted and humorous video edits designed to entertain and engage viewers.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/Funny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Gaming Banner",
            description:
              "Creative gaming banners that capture the spirit of gaming communities and promote content effectively.",
            media: (
              <img
                src="/GammingBanImg.jpg"
                alt="Gaming Banner"
                className="w-96 h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/GammingBanImg.jpg")}
              />
            ),
          },
          {
            title: "Montages",
            description:
              "Captivating montages that blend clips and music to create a memorable viewing experience.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/Montages (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Overlays",
            description:
              "Professional overlays for videos and streams that enhance visual appeal and viewer engagement.",
            media: (
              <img
                src="/Overlays (3).jpg"
                alt="Overlays"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/Overlays (3).jpg")}
              />
            ),
          },
          {
            title: "Product Animation",
            description:
              "Engaging product animations that highlight features and benefits, driving interest and sales.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/ProductAnim (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "Shorts",
            description:
              "Bite-sized video shorts that deliver quick and entertaining content, perfect for social media.",
            media: (
              <video
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
                controls
              >
                <source src="/Shorts (2).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ),
          },
          {
            title: "VTuber Models",
            description:
              "Custom VTuber models created for engaging live streams and content creation in virtual environments.",
            media: (
              <img
                src="/Vtuber.jpg"
                alt="VTuber Models"
                className="w-full h-60 object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openModal("/Vtuber.jpg")}
              />
            ),
          },
        ].map((item, index) => (
       <>
          <div
            key={index}
            className="bg-white flex my-3 flex-col md:gap-5 md:flex-row justify-center items-center rounded-lg shadow-g overflow-hidden transition-transform transform hover:scale-105"
          >
               
                <div className="p-5">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
                {item.media}
            {/* )} */}
          </div>
       </>
        ))}
      </main>


      <footer className="bg-white py-4 fixed bottom-0 left-0 right-0">
        <p className="text-center text-gray-600">© 2024 </p>
      </footer>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={currentImage}
      />
    </div>
  );
}