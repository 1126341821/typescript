enum Direction {
	Up,
	Down = 2,
	Left,
	Right
}
console.log(Direction[0]); // UP
console.log(Direction.Up); // 0

enum FileAccess {
	// constant members
	None,
	Read = 1 + 0,
	Write = 1 + 2,
	G = "123".length,
	H
}
console.log(FileAccess);