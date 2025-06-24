console.log("Hello from cbs-test TypeScript project!");

interface Project {
  name: string;
  version: string;
  language: string;
}

const project: Project = {
  name: "cbs-test",
  version: "1.0.0",
  language: "TypeScript"
};

function displayProject(proj: Project): void {
  console.log(`Project: ${proj.name}`);
  console.log(`Version: ${proj.version}`);
  console.log(`Language: ${proj.language}`);
}

displayProject(project);

export { Project, displayProject };
