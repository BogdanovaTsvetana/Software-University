function solve(path) {

    let indexPoint = path.lastIndexOf('.');
    let extention = path.substring(indexPoint + 1);

    let indexBackSlash = path.lastIndexOf('\\');
    let fileName = path.substring(indexBackSlash + 1, indexPoint)

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extention}`);
}

solve('C:\\Projects\\Data-Structures\\LinkedList.cs')