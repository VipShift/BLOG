import { transformPost } from "../transformers/transform-post";

export const getPosts = async (searchPhrase, page, perPage) => {
    // Загружаем все посты без пагинации
    const res = await fetch(`http://localhost:3004/posts`);
    const loadedData = await res.json();

    // Массив постов (BFF может отдавать в data или сразу массив)
    const allPosts = loadedData.data ?? loadedData;

    // Фильтруем по searchPhrase
    const filteredPosts = searchPhrase
        ? allPosts.filter((post) =>
              post.title.toLowerCase().includes(searchPhrase.toLowerCase())
          )
        : allPosts;

    // Пагинация на клиенте
    const startIndex = (page - 1) * perPage;
    const paginatedPosts = filteredPosts.slice(
        startIndex,
        startIndex + perPage
    );

    return {
        posts: paginatedPosts.map(transformPost),
        total: filteredPosts.length, // total после фильтра
    };
};
