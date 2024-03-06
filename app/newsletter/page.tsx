import { fetchSubstackRSS } from '../_utils/fetchSubstackRSS.server';
import Image from 'next/image'

export default async function Newsletter() {

    const articles = await fetchSubstackRSS("https://huntgathertrade.substack.com/feed")

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="">
                {articles.map((article, index: number) => (
                    <div className="relative flex grid lg:grid-cols-2 place-items-center" key={index} style={{ display: 'flex', marginBottom: '20px' }}>
                        <div className="mr-4">
                            {article.thumbnail && (
                                <Image 
                                    src={article.thumbnail} 
                                    width={150}
                                    height={150}
                                    alt="Thumbnail" 
                                    style={{ marginRight: '10px' }} 
                                />
                            )}
                        </div>
                        <div className="max-w-prose">
                            <a href={article.link} target="_blank" rel="noopener noreferrer">
                                <h2 className="mb-3 text-2xl font-semibold p-2">{article.title}</h2>
                            </a>
                            <p>{article.description}</p>
                            <p>{article.content}...</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
  );
}

