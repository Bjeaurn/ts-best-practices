"use strict";
exports.__esModule = true;
// The bad examples all compile fine, and work when used in classes; but the compiler doesn't complain
// when you exchange types with eachother in, let's say, constructors. They're all strings in the end,
// so the compiler doesn't care! (which is bad!)
