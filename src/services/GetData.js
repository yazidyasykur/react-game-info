import axios from "axios";

export async function gameDetails(params_id) {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id: params_id },
        headers: {
            'X-RapidAPI-Key': '86af53db1bmsh17575dd1549dfb1p12d978jsn1cebfdd6073b',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const {data} = await axios.request(options)
        return(data)
    } catch(err) {
        return(err)
    }
}

export async function byCategory(params_category) {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {category: params_category},
        headers: {
            'X-RapidAPI-Key': '86af53db1bmsh17575dd1549dfb1p12d978jsn1cebfdd6073b',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const {data} = await axios.request(options)
        return(data)
    } catch(err) {
        return(err)
    }
}

export async function byPlatform(params_platform) {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {platform: params_platform},
        headers: {
            'X-RapidAPI-Key': '86af53db1bmsh17575dd1549dfb1p12d978jsn1cebfdd6073b',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const {data} = await axios.request(options)
        return(data)
    } catch(err) {
        return(err)
    }
}

export async function byPlatformCategorySorted(params_platform,params_category,params_sortBy) {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {platform: params_platform, category: params_category, 'sort-by': params_sortBy},
        headers: {
            'X-RapidAPI-Key': '86af53db1bmsh17575dd1549dfb1p12d978jsn1cebfdd6073b',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const {data} = await axios.request(options)
        return(data)
    } catch(err) {
        return(err)
    }
}

export async function sortGames(params_sortBy) {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {'sort-by': params_sortBy},
        headers: {
            'X-RapidAPI-Key': '86af53db1bmsh17575dd1549dfb1p12d978jsn1cebfdd6073b',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const {data} = await axios.request(options)
        return(data)
    } catch(err) {
        return(err)
    }
}

export async function filterbyTags(params_tags, params_platform) {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {tag: params_tags, platform: params_platform},
        headers: {
            'X-RapidAPI-Key': '86af53db1bmsh17575dd1549dfb1p12d978jsn1cebfdd6073b',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const {data} = await axios.request(options)
        return(data)
    } catch(err) {
        return(err)
    }
}

export async function listGames() {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
            'X-RapidAPI-Key': '86af53db1bmsh17575dd1549dfb1p12d978jsn1cebfdd6073b',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const {data} = await axios.request(options)
        return(data)
    } catch(err) {
        return(err)
    }
}

