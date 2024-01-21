import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { jsonplaceholderApi } from "../api";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostBody, setNewPostBody] = useState("");

    useEffect(() => {
        let url;
        const userId = searchParams.get("user");
        if (userId) {
            url = `/posts?userId=${userId}`;
        } else {
            url = "/posts";
        }
        const getPosts = async () => {
            const response = await jsonplaceholderApi.get(url);
            setPosts(response.data);
        };
        getPosts();
    }, []);

    const addNewPost = async () => {
        try {
            await jsonplaceholderApi.post("/posts", {
                title: newPostTitle,
                body: newPostBody,
                userId: 1, // Замените на актуальный userId
            });

            // Не обновляем список постов после добавления
            setNewPostTitle("");
            setNewPostBody("");
        } catch (error) {
            console.error("Ошибка при добавлении поста", error);
        }
    };

    return (
        <div>
            <h2>Добавить новый пост</h2>
            <input
                type="text"
                placeholder="Заголовок"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
            />
            <textarea
                placeholder="Текст поста"
                value={newPostBody}
                onChange={(e) => setNewPostBody(e.target.value)}
            />
            <button onClick={addNewPost}>Добавить пост</button>
        </div>
    );
};

export default PostsPage;
