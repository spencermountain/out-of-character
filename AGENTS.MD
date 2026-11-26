### Code style

- Write portable ES2022+ for browers and Node>=18
- Typescript and jsdoc are not required
- Add terse comments for maintainability
- Prefer functions assigned with const, over declarations
- Prefer small maintainable files with one purpose
- Do not use unbracketed if statements
- Do not use complex, multi-line, or nested ternary operators
- Avoid while loops when possible
- Prefer older for loops, unless an await is required
- File-size is always important
- Defensive try/catch blocks are not required
- Prefer `export default` on files with one export
- Prefer clear exports at the bottom of files
- Split out utility functions into a _lib.js file or ./_lib dir
- If workflow is sequential, prefix filenames with 01-, 02-, ...
- Use process.env for any secrets, tokens, or keys
