export async function getNews(category){
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category||'general'}&page=1&pagesize=100&apiKey=dbe57b028aeb41e285a226a94865f7a7`);
    if(!res.ok){
        throw new Error(`ERROR:${res.status}`);
    }
    const data = await res.json();
    return data.articles;
}

// apiKey=9e8fa0d6b8554ed79d67b7d76a741bbc
