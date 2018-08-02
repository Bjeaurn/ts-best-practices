export type ID = string;

export type FileID = ID & { file: '' };
export type TodoID = ID & { todo: '' };

export type ImageID = FileID & { file: 'image' };

// Check out `types.js` to see what this compiles to! It's superclean!
// It does not leave or bring on additional runtime overhead for the browser to check.


// Bad examples.
export type BadType = string;
export type AnotherBadType = BadType;
export type IncompatibleBadType = BadType;

// The bad examples all compile fine, and work when used in classes; but the compiler doesn't complain
// when you exchange types with eachother in, let's say, constructors. They're all strings in the end,
// so the compiler doesn't care!