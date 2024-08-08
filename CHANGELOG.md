# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[unreleased]: https://github.com/mister-fix/threadfork/compare/v0.0.3...HEAD
[0.0.3]: https://github.com/mister-fix/threadfork/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/mister-fix/threadfork/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/mister-fix/threadfork/releases/tag/v0.0.1
