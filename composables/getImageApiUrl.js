import { joinURL } from "ufo";

const getImageApiUrl = (path)=>{
    const base_url = 'https://pub-f9a129ce37b8446bafc8a9b4ca2c4bdb.r2.dev';
    return joinURL(base_url, path);
}

export default getImageApiUrl;