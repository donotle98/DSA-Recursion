let mySmallMaze = [
    [" ", " ", " "],
    [" ", "*", " "],
    [" ", " ", "e"],
];

let maze = [
    [" ", " ", " ", "*", " ", " ", " "],
    ["*", "*", " ", "*", " ", "*", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", "*", "*", "*", "*", "*", " "],
    [" ", " ", " ", " ", " ", " ", "e"],
];

const escapeMaze = (maze, pos, row, col, dir, path) => {
    if (col < 0 || row < 0 || col >= maze[0].length || row >= maze.length) {
        return "nope";
    }
    path[pos] = dir;
    pos++;
    if (maze[row][col] === "e") {
        console.log(path);
        return path;
    }
    if (maze[row][col] === " ") {
        maze[row][col] = "s";
        escapeMaze(maze, pos, row - 1, col, "U", path);
        escapeMaze(maze, pos, row, col + 1, "R", path);
        escapeMaze(maze, pos, row + 1, col, "D", path);
        escapeMaze(maze, pos, row, col - 1, "L", path);
    }
    pos--;
};
escapeMaze(maze, 0, 0, 0, "S", []);
