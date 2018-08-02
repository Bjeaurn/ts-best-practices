import * as types from './types';
// Could also do import { FileID, ImageID, TodoID } from './types'; of course!

export class File {
    constructor(fileId: types.FileID) {}
}

export class Image extends File {
    constructor(imageId: types.ImageID) {
        super(imageId);
    }
}

export class Todo {
    constructor(todoId: types.TodoID) {}
}

const fileId: types.FileID = 'file-id-1' as types.FileID;
const imageId: types.ImageID = 'image-id-1' as types.ImageID;
const todoId: types.TodoID = 'todo-id-1' as types.TodoID;

// All valid!
const file1 = new File(fileId);
const file2 = new Image(imageId);
const file3 = new File(imageId);
const todo1 = new Todo(todoId);

// Errors!
// const error1 = new File(todoId); 
// Argument of type 'TodoID' is not assignable to parameter of type 'FileID'.


// const error2 = new Image(fileId); 
// Argument of type 'TodoID' is not assignable to parameter of type 'FileID'.
