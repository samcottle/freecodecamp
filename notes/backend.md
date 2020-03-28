# APIs and Microservices

## Node Package Manager (NPM)

Node.js uses a command line tool called NPM to manage packages.

Standard node.js files and folders:

- `package.json`: When building a new project, NPM generates a `package.json` file. This lists all the dependencies for the project.

- `node_modules`: Packages are saved in a folder called `node_modules`. This folder is either located in a root `node_modules` folder (if the modules are globally accessible), or a project's own `node_modules` folder (if accessible only to that project).

    Usually, packages are only made available on a per project basis. This creates separation between dependencies for different projects.

### package.json

The `package.json` file is the center of any node.js project or NPM package. It is analogous to the `<head>` of an HTML document, and how this describes the content of a webpage.

It is a single JSON object, with key-value pairs. The only required fields are `"name"` and `"version"`, but including other information in here (such as additional information about your project) is standard practice.

