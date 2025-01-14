let todo = [];
while(true){
    let req = prompt("Enter your query");
    if(req === "quit"){
        console.log("Quitting");
        break;
    }
    switch (req) {
        case "add":
            let task = prompt("Enter task to add");
            todo.push(task);
            console.log("Task added");
            break;
        case "show" : 
            for (const i of todo) {
                console.log(i);
            }
            break;
        case "delete" :
            let idx = prompt("Enter index to delete");
            todo.splice(idx, 1);
            break;
        default:
            console.log("Enter a valid query");
            break;
    }
}