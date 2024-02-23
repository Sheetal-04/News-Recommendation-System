export async function getNews(category){
    // const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category||'general'}&page=1&pagesize=100&apiKey=9e8fa0d6b8554ed79d67b7d76a741bbc`);
    const res = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category||'general'}&lang=en&country=in&max=10&apikey=10ae31b43263fa2560e568f4ed47e9c1`);
    if(!res.ok){
        throw new Error(`ERROR:${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    return data.articles;
}

// apiKey=9e8fa0d6b8554ed79d67b7d76a741bbc
