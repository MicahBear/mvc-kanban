// const deleteBtn = document.querySelectorAll('.del')
// const todoItem = document.querySelectorAll('span.not')
// const todoComplete = document.querySelectorAll('span.completed')
// const todoList = document.getElementById('todo-board')
// const progessList = document.getElementById('progress-board')
// const completedList = document.getElementById('completed-board')

// Array.from(deleteBtn).forEach((el) => {
//     el.addEventListener('click', deleteTodo)
// })

// Array.from(todoItem).forEach((el) => {
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el) => {
//     el.addEventListener('click', markIncomplete)
// })

// async function deleteTodo() {
//     const todoId = this.parentNode.dataset.id
//     try {
//         const response = await fetch('todos/deleteTodo', {
//             method: 'delete',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     } catch (err) {
//         console.log(err)
//     }
// }

// async function markComplete() {
//     const todoId = this.parentNode.dataset.id
//     try {
//         const response = await fetch('todos/markComplete', {
//             method: 'put',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()


//         console.log(data)
//         location.reload()
//     } catch (err) {
//         console.log(err)
//     }
// }

// async function markIncomplete() {
//     const todoId = this.parentNode.dataset.id
//     try {
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     } catch (err) {
//         console.log(err)
//     }
// }

// function init() {
//     return dragula([
//         document.getElementById('uL1'), //parent container:todo
//         document.getElementById('uL2'), //parent container: inprogress
//         document.getElementById('uL3'), // parent container: completed
//         //document.getElementById('4'),
//         //document.getElementById('5')
//     ])
// }

const btn = document.getElementById('displayandhide').addEventListener('click', displayOrHide); // button to hide the input 

const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
// const dragulaProgress = document.querySelectorAll('')



function displayOrHide() {    // function to hide inputs when adding a new task
    const form = document.getElementById('form');
    if (form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'block';
    } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
    }
}

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el) => {
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el) => {
    el.addEventListener('click', markIncomplete)
})

async function deleteTodo() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function markComplete() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function markIncomplete() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}