import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

type Article = {
    title: string;
    description: string;
    publicationDate: string;
    content: string;
    thumbnail?: string; // Optional because it might not be present
    link: string;
};

export async function fetchSubstackRSS(rssUrl: string): Promise<Article[]> {
    const response = await fetch(rssUrl);
    const rssText = await response.text();
    const rssObject = await parseStringPromise(rssText);

    const articles: Article[] = rssObject.rss.channel[0].item.map((article: any) => {

        const thumbnailUrl = article.enclosure ? article.enclosure[0].$.url : undefined;

        return {
            title: article.title[0],
            description: article.description[0],
            publicationDate: article.pubDate[0],
            content: article['content:encoded'][0].substring(0, 200),
            thumbnail: thumbnailUrl, // Use the extracted URL
            link: article.link[0],
        };
    });
    return articles;
}

