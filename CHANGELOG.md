# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.1] - 08/09/2024

### Added

- Installed `express` and set up a basic server configuration in the `api` workspace.
  - Set the `index.js` as the server entry point.
  - Installed `nodemon` to streamline the development process with automatic server restarts on file changes.
  - Installed `dotenv` to manage environment variables securely across different environments.
- Server start command in the root `package.json` file, and the `api` workspaces' `package.json` file.
- "Built With" section to the README.md file, which contains list of packages and dependencies used to develop the project.
  - Added Node and Express to list.

## [0.1.0] - 08/08/2024

### Added

- **Workspaces**: Integrated `npm` workspaces for improved project structure and dependency management. Workspaces are found in the added `apps/` folder.
  - `api`: Workspace for the API server, contains `package.json` file.
  - `api-e2e`: Workspace for API end-to-end tests, contains `package.json` file.
  - `client`: Workspace for the client application, contains `package.json` file.
  - `client-e2e`: Workspace for client end-to-end tests, contains `package.json` file.
  - `shared`: Workspace for shared utilities and components, contains `package.json` file.
- `tag-message.txt` ignore pattern in the `.gitignore` file.

### Updated

- `README.md` project structure tree to reflect the `apps/` folder and the project workspaces contained within.

## [0.0.7] - 08/08/2024

### Added

- `plopfile.js` file containing initial plop configuration with a hello generator, file serves as the Plop entry point.
- Plop command in the scripts of the `package.json` file.

### Updated

- `README.md` project structure tree to reflect the addition of the Plop configuration file.

## [0.0.6] - 08/08/2024

### Added

- `.eslintignore` file with ESLint file and folder ignore patterns.
- `.eslintrc.js` file with ESLint configurations and options.
- `.prettierignore` file with Prettier file and folder ignore patterns.
- `.prettierrc` file with Prettier configurations and options.
- Linting and formatting commands in the scripts of the `package.json` file.

### Updated

- `README.md` project structure tree to reflect the addition of the ESLint and Prettier configuration files and their respective ignore files.

## [0.0.5] - 08/08/2024

### Added

- `.github/ISSUE_TEMPLATE` folder containing bug report and feature request templates.

## [0.0.4] - 08/08/2024

### Added

- `.vscode/` folder containing an `extensions.json` file with a list of recommended VSCode extensions for contributors to have to maintain project consistency.
- `.vscode/settings.json` ignore pattern in the `.gitignore` file.

### Updated

- `README.md` project structure tree to list the `.vscode/` folder.

## [0.0.3] - 08/08/2024

### Added

- `.github/` folder with a `stale.yml` configuration file for the stale bot to close dormant PR requests, and a `workflows` subdirectory containing the `commitlint.yml` CI workflow to run commitlint.

### Updated

- `README.md` project structure tree to list the `docs/` and `.github/` folders.

## [0.0.2] - 08/08/2024

### Added

- `docs/` folder containing the code of conduct, security guidelines, contribution guidelines, and pull request template documents.

### Updated

- `.husky/pre-commit` file to run npx commitlint before each commit.

## [0.0.1] - 08/08/2024

### Added

- This `CHANGELOG.md` file to track source code and overall project evolution.
- `assets/` directory that contains images and files for supporting project documents.
- `README.md` with initial project and repository details.
- `commitlint.config.js` configuration file to enforce standardization of conventionally formatted Git commit messages.
- `LICENSE` file with GNU GPL-3.0 license information.
- `package-lock.json` (initial).
- `package.json` (initial).
- `.gitattributes` file with attributes patterns.
- `.gitignore` file with ignore patterns.
- `.editorconfig` file with IDE level text, code, and file formatting configurations.
- `.husky` directory with Git pre-commit and commit-msg hooks.

[unreleased]: https://github.com/mister-fix/threadfork/compare/v0.1.1...HEAD
[0.1.1]: https://github.com/mister-fix/threadfork/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/mister-fix/threadfork/compare/v0.0.7...v0.1.0
[0.0.7]: https://github.com/mister-fix/threadfork/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/mister-fix/threadfork/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/mister-fix/threadfork/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/mister-fix/threadfork/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/mister-fix/threadfork/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/mister-fix/threadfork/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/mister-fix/threadfork/releases/tag/v0.0.1
