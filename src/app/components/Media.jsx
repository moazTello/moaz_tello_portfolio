// // MediaSection.jsx
// import React from "react";

// const mediaArticles = [
//   {
//     title: "Syrian Students Explore AI",
//     description: "My participation in the High-Tech Exhibition",
//     image: "/hitech-aiu.jpg", // ضع صورة مناسبة في public/images
//     link: "https://sarabic.ae/20230611/%D8%B7%D9%84%D8%A7%D8%A8-%D8%B3%D9%88%D8%B1%D9%8A%D9%88%D9%86-%D9%8A%D8%B7%D8%B1%D9%82%D9%88%D9%86-%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%B5%D9%86%D8%B9%D9%8A-1077996853.html"
//   },
//   {
//     title: "AIU Participates in High-Tech Exhibition",
//     description: "Official news coverage of my participation with the university",
//     image: "/hitech-Arab-International-university.jpg",
//     link: "https://www.aiu.edu.sy/ar/news/algamaa-alaarby-aldoly-tshark-fy-maard-haytk-llmaalomaty"
//   }
// ];

// export default function MediaSection() {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-8 text-center">Media & Events</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {mediaArticles.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl text-primary-500 font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-600 mb-4">{item.description}</p>
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline font-medium"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// ProjectsAndMedia.jsx
import React from "react";

const items = [
  // Academic Project
  {
    title: "SoloCademy – AI Course Recommendation System",
    description:
      "Co‑developed an AI/Machine Learning‑based course recommendation system to personalize educational course suggestions.",
    image: "/academic-project.jpeg",
    link: "https://www.aiu.edu.sy/ar/1-13531/book/23725/CCE00105/SoloCademy-Course-recommendation-system",
    type: "Project"
  },
  // Media Article 1
  {
    title: "Syrian Students Explore AI",
    description: "My participation in the High-Tech Exhibition",
    image: "/hitech-aiu.jpg",
    link: "https://sarabic.ae/20230611/%D8%B7%D9%84%D8%A7%D8%A8-%D8%B3%D9%88%D8%B1%D9%8A%D9%88%D9%86-%D9%8A%D8%B7%D8%B1%D9%82%D9%88%D9%86-%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%B5%D9%86%D8%B9%D9%8A-1077996853.html",
    type: "Media"
  },
  // Media Article 2
  {
    title: "AIU Participates in High-Tech Exhibition",
    description: "Official news coverage of my participation with the university",
    image: "/hitech-Arab-International-university.jpg",
    link: "https://www.aiu.edu.sy/ar/news/algamaa-alaarby-aldoly-tshark-fy-maard-haytk-llmaalomaty",
    type: "Media"
  }
];

export default function ProjectsAndMedia() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Academic Project & Media
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    item.type === "Project" ? "text-primary-500" : "text-primary-500"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-medium"
                >
                  {item.type === "Project" ? "View Project" : "Read More"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
