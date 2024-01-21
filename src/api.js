import axios from "axios";

export const jsonplaceholderApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

// CRUD:

// Read
// GET = получение данных
// axios.get("https://dummyjson.com/posts")
// axios.get("https://dummyjson.com/posts/18")

// Create
// POST = создание новой сущности
// axios.post("https://dummyjson.com/posts/add", {
//     title: "foo",
//     body: "bar",
//     userId: 1
// })

// Update
// PUT + PATCH = изменение уже существующей сущности
// axios.put("https://dummyjson.com/posts/17", {
//     title: 'I think I should shift to the moon'
// })

// Delete
// DELETE = удаление существующей сущности
// axios.delete("https://dummyjson.com/posts/12")