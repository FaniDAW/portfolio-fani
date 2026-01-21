export const getProjects = (req, res) => {
  res.json([
    {
      id: 1,
      title: "Portfolio personal",
      description: "Portfolio desarrollado con React, Tailwind y Express",
      technologies: "React, Tailwind, Express",
      url: "https://portfolio-fani.com"
    }
  ]);
};
