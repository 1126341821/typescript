var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction[0]); // UP
console.log(Direction.Up); // 0
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 1] = "Read";
    FileAccess[FileAccess["Write"] = 3] = "Write";
    FileAccess[FileAccess["G"] = "123".length] = "G";
    FileAccess[FileAccess["H"] = void 0] = "H";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess);
