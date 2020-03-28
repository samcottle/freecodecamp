# APIs and Microservices

## Node Package Manager (NPM)

Node.js uses a command line tool called NPM to manage packages.

Standard node.js files and folders:

- `package.json`: When building a new project, NPM generates a `package.json` file. This lists all the dependencies for the project.

- `node_modules`: Packages are saved in a folder called `node_modules`. This folder is either located in a root `node_modules` folder (if the modules are globally accessible), or a project's own `node_modules` folder (if accessible only to that project).

    Usually, packages are only made available on a per project basis. This creates separation between dependencies for different projects.

### package.json

The `package.json` file is the center of any node.js project or NPM package. It is analogous to the `<head>` of an HTML document, and how this describes the content of a webpage.

It is a single JSON object, with key-value pairs. The only required fields are `"name"` and `"version"`, but including other information in here (such as additional information about your project, like a `description` or `keywords`) is standard practice.

It is also where you list all the `dependencies` for your project (in an object). This ensures that NPM gets the correct dependencies for your project when the project is set up on a computer. Here's an example, containing the popular `express` package:

```json
"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}
```

#### Versioning

Packages use semantic versioning, with the version format: `"package": "MAJOR.MINOR.PATCH"`. **MAJOR** versions increment when changes are made that cause API incompatibilities. **MINOR** are for when functionality is added in a backwards-compatible manner. **PATCH**es are generally for bugfixes.

You would often want to allow an NPM dependency to update to the latest **PATCH** version (i.e. bugfixes). You can do this by using a `~` character before the version number. For example, to allow for any 1.3.x version of `package` you would use:

```json
"package": "~1.3.8"
```

Similarly, you can use the `^` to allow a package to update to the latest **MINOR** version. For example, to allow for any 1.x.x version of `package` you would use:

```json
"package": "^1.3.8"
```

## Basic Node and Express

