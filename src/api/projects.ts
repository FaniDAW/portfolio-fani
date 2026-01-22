import { api } from "./api";

export const getProjects = async () => {
  const res = await api.get("/projects");
  return res.data;
};

export const createProject = async (project: {
  title: string;
  description: string;
  technologies: string;
  url: string;
}) => {
  const res = await api.post("/projects", project);
  return res.data;
};
