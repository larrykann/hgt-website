import { fetchSubstackRSS } from '../_utils/fetchSubstackRSS.server';
import Image from 'next/image'
import Link from 'next/link'

export default async function Newsletter() {

    const articles = await fetchSubstackRSS("https://huntgathertrade.substack.com/feed")

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="max-w-screen-md">
                {articles.map((article, index: number) => (
                    <div key={index}>
                        <Link 
                            href={article.link}
                            className="border border-transparent rounded-lg px-5 hover:border-gray-300 flex grid lg:grid-cols-2 place-items-center p-4"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {article.thumbnail && (
                                <Image 
                                    src={article.thumbnail} 
                                    width={150}
                                    height={150}
                                    alt="Thumbnail" 
                                    style={{ marginRight: '10px' }} 
                                />
                            )}
                            <div className="max-w-prose">
                                <a href={article.link} target="_blank" rel="noopener noreferrer">
                                    <h2 className="mb-3 text-xl font-semibold p-2">{article.title}</h2>
                                </a>
                                <p className="text-sm">{article.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
  );
}

