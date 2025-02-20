import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const projects = [
  {
    id: 1,
    title: "Psnatapc Connect",
    image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg",
    description: "An innovative app that matches students to ideal placements using real-time data."
  },
  {
    id: 2,
    title: "Bus Timing System",
    image: "https://images.pexels.com/photos/205353/pexels-photo-205353.jpeg",
    description: "This website helps customers track rural buses and schedules efficiently."
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    description: "A personal portfolio site showcasing projects and blogs."
  }
];

const extraProjects = [
  {
    id: 4,
    title: "Travel Blog",
    image: "https://images.pexels.com/photos/10562442/pexels-photo-10562442.jpeg",
    description: "A travel blog platform for sharing experiences and destinations."
  },
  {
    id: 5,
    title: "Photography Portfolio",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
    description: "A stunning gallery website for professional photographers."
  },
  {
    id: 6,
    title: "Leaf Disease Detection",
    image: "https://images.pexels.com/photos/30773157/pexels-photo-30773157.jpeg",
    description: "Leaf disease detection identifies plant diseases using image processing."
  }, 
];

const allProjects = [...projects, ...extraProjects];

const Projects = () => {
  return (
    <section className="w-fullpy-10" style={{
      width: '100vw',
      height: '100vh',
      position: 'fixed',
    }}>
      <h2 className="text-3xl font-bold text-center mb-2 font-mono text-indigo-900">My Projects</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="w-11/12 mx-auto "
      >
        {allProjects.map((project) => (
          <SwiperSlide key={project.id} className="p-7 mb-6 ">
            <div className="rounded-lg shadow-md p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-4 font-mono text-blue-900">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2 font-serif">{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
