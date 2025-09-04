import React from "react";

function Projects() {
  const projects = [
    { title: "Todo App", description: "A CRUD app with Node.js backend" },
    { title: "Notes App", description: "Full-stack notes keeping app" },
    { title: "Weather App", description: "React app with weather API" },
  ];

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <div key={i} className="p-4 border rounded shadow bg-white">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
