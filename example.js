"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Could also do import { FileID, ImageID, TodoID } from './types'; of course!
var File = /** @class */ (function () {
    function File(fileId) {
    }
    return File;
}());
exports.File = File;
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(imageId) {
        return _super.call(this, imageId) || this;
    }
    return Image;
}(File));
exports.Image = Image;
var Todo = /** @class */ (function () {
    function Todo(todoId) {
    }
    return Todo;
}());
exports.Todo = Todo;
var fileId = 'file-id-1';
var imageId = 'image-id-1';
var todoId = 'todo-id-1';
// All valid!
var file1 = new File(fileId);
var file2 = new Image(imageId);
var file3 = new File(imageId);
var todo1 = new Todo(todoId);
// Errors!
// const error1 = new File(todoId); 
// Argument of type 'TodoID' is not assignable to parameter of type 'FileID'.
// const error2 = new Image(fileId); 
// Argument of type 'TodoID' is not assignable to parameter of type 'FileID'.
