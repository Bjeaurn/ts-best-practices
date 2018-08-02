export type ID = string;

export type FileID = ID & { file: '' };
export type TodoID = ID & { todo: '' };

export type ImageID = FileID & { file: 'image' };

// Check out `types.js` to see what this compiles to! It's superclean!
// It does not leave or bring on additional runtime overhead for the browser to check.