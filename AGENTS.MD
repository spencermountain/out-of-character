# Development

Unless given specific instruction:

- Do not edit README or add documentation
- do not install or change dependencies
- do not change existing tests
- do not make a commit or PR

Work on the current branch. The user may make simultaneous changes, and may make commits when they choose. Ask permission before any destructive git changes to verify this work is not disrupted.

If you are generating tests, do so blindly and without research on the codebase.

### Code style

- Write maintainable javascript, using esmodules
- Write portable ES2022+ for browers and Node>=18
- Typescript and jsdoc are not required
- Add terse comments for maintainability
- Prefer functions assigned with const, over declarations
- Do not use unbracketed if statements
- Do not use complex, multi-line, or nested ternary operators
- Avoid while loops when possible
- Prefer older for loops, unless an await is required
- File-size is always important
- Defensive try/catch blocks are not required

### Project structure

- Prefer pnpm over npm
- eslint is always configured
- Prefer small maintainable files with one purpose
- Split out utility functions into a _lib.js file or ./_lib dir
- Prefer `export default` on files with one export
- Prefer clear exports at the bottom of files
- If workflow is sequential, prefix filenames with 01-, 02-, ...
- Prefer tape-formatted tests
- Use process.env for any secrets, tokens, or keys
