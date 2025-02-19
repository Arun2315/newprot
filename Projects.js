import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
    description: "A full-stack e-commerce platform with authentication and payment integration."
  },
  {
    id: 2,
    title: "Social Media App",
    image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
    description: "A real-time social media app with chat and post-sharing features."
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
    description: "A personal portfolio site showcasing projects and blogs."
  }
];

const extraProjects = [
  {
    id: 4,
    title: "Travel Blog",
    image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
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
    title: "Fitness App",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    description: "A mobile-friendly app for tracking workouts and diet plans."
  },
  {
    id: 7,
    title: "Recipe Sharing Platform",
    image: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    description: "A user-friendly recipe website with step-by-step cooking guides."
  },
  {
    id: 8,
    title: "Event Management System",
    image: "https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg",
    description: "An event planning system to manage and schedule events efficiently."
  }
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
