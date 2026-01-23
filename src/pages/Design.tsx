const designProjects = [
  {
    id: 1,
    title: "Identidad corporativa",
    image: "/design/design1.jpg",
  },
  {
    id: 2,
    title: "Editorial",
    image: "/design/design2.jpg",
  },
  {
    id: 3,
    title: "Branding digital",
    image: "/design/design3.jpg",
  },
  {
    id: 4,
    title: "Packaging",
    image: "/design/design4.jpg",
  },
];

const Design = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <h1 className="text-4xl font-bold mb-12">
        Proyectos de diseño
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {designProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition"></div>

            {/* texto hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h2 className="text-white text-xl font-semibold">
                {project.title}
              </h2>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Design;
