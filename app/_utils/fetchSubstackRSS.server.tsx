import { parseStringPromise } from 'xml2js'
import he from 'he'

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
        const title = he.decode(article.title[0]);
        const description = he.decode(article.description[0]);
        const content = article['content:encoded'] ? he.decode(article['content:encoded'][0].substring(0, 200)) : '';
        const thumbnailUrl = article.enclosure ? article.enclosure[0].$.url : undefined;

        return {
            title,
            description,
            publicationDate: article.pubDate[0],
            content,
            thumbnail: thumbnailUrl, // Use the extracted URL
            link: article.link[0],
        };
    });
    return articles;
}

