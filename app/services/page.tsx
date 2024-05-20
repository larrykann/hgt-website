import Link from 'next/link'
import Image from 'next/image'

const Services: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="max-w-xl mx-auto p-4 flex-1">
                <h2 className="text-4xl font-semibold text-center mb-4">
                    Services
                </h2>
                <p className="text-center mb-4 text-base max-w-prose">
                    I am a freelance developer that focuses on automated trade systems and trade strategy research. I have experience in C# and Python and have used several platforms for strategy reseach and development. Contact me to discuss your needs.
                </p>
                <div className="flex justify-center">
                    <Link href="mailto:kanndide@gmail.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Send Me an Email
                    </Link>
                </div>
            </div>
            <div className="w-full mx-auto max-w-screen-xl p-1 flex items-center justify-center">
                <hr className="border-gray-200 dark:border-gray-700 my-1 w-1/2"/>
            </div>
            <div className="max-w-screen-xl mx-auto p-6">
                <h2 className="text-3xl font-semibold text-center mb-4">
                    Recommended Platforms and Data Providers
                </h2>
                <div className="grid gap-8 lg:grid-cols-2 lg:text-left">
                    <Link
                        href="https://ninjatrader.com/"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ maxWidth: '500px' }}  // Set the max width of the card
                    >
                        <Image
                                src="/images/NinjaTrader_Wordmark_color_RGB.png"
                                width={500}
                                height={100}
                                alt="NinjaTrader Logo"
                                className="mb-4"
                                loading="eager"
                        />
                        <p className="m-0 text-md opacity-75 p-1">
                                NinjaTrader® is our #1 recommended trading platform preferred by traders worldwide including our clients.
                        </p>
                        <p className="m-0 text-md opacity-75 p-1">
                            Download NinjaTrader & receive immediate FREE access to:
                        </p>
                        <ul className="list-disc ml-5 p-1 opacity-75">
                            <li>Real-time futures data</li>
                            <li>Advanced charting</li>
                            <li>Trade simulator</li>
                            <li>Strategy development and backtesting</li>
                        </ul>
                        <p className="m-0 text-md opacity-75 p-1">
                            NinjaTrader’s award-winning trading software is consistently voted an industry leader by the trading community. Featuring 1000s of Apps & Add-Ons for unlimited customization, NinjaTrader is used by over 500,000 traders for advanced market analysis, professional charting and fast order execution.
                            For new traders, start preparing for the live markets with a free trading simulator featuring real-time market data.
                        </p>
                    </Link>
                    <Link
                        href="https://kinetick.com/"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ maxWidth: '500px' }}  // Set the max width of the card
                    >
                        <Image
                                src="/images/Kinetick_Logo.png"
                                width={500}
                                height={200}
                                alt="Kinetick Logo"
                                className="mb-4"
                                loading="eager"
                        />
                        <p className="m-0 text-md opacity-75">
                            Our Recommended Market Data Feed
                            Kinetick® delivers reliable, fast and cost-effective market data to help level the playing 
                            field for active traders. Take advantage of unfiltered, real time quotes for stocks, futures
                            and forex that exceed the expectations of the world’s most demanding traders, like us!
                            <br /><br />
                            Get started with FREE end-of-day historical market data directly through the 
                            NinjaTrader platform and learn how you can significantly reduce CME Group Globex 
                            exchange fees on real-time market data with Kinetick. 
                        </p>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Services;
