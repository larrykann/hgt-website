import Image from 'next/image'
import Link from 'next/link'
import { fetchImageNames } from './_utils/fetchImageNames.server'

export default async function Home() {
    const imageNames: string[] = await fetchImageNames();
    const randomIndex: number = Math.floor(Math.random() * imageNames.length);
    const randomImageName: string = imageNames[randomIndex];
    const imageUrl: string = `https://ik.imagekit.io/atariaf/hgt_website/${randomImageName}`;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="mb-2 flex text-center">
                <h1 className="mb-3 text-4xl font-semibold p-2">
                    Hunt Gather Trade
                </h1>
            </div>
            <div className="relative flex grid lg:grid-cols-2 place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <Image
                    src={imageUrl}
                    width={500}
                    height={500}
                    alt="Random AI generated art"
                />
                <div id="welcome-section">
                    <p className="p-2 text-base max-w-prose">
                        {`Welcome to Hunt Gather Trade! My name is Larry, and I am a freelance developer and the author of the Hunt Gather Trade Substack newsletter. This platform is my passion project, born from a fascination with automated trading systems and day trading. Here, I dedicate myself to sharing knowledge, experiences, and monthly strategies with a community that's eager to learn.`}
                    </p>
                    <p className="p-2 text-base max-w-prose">
                        {`Every month, I dive into the complexities of automated trading systems, offering you insights and research that are both accessible and designed to help you with your daily trading. Whether your interest lies in understanding the algorithms that fuel trading bots or honing your manual trading techniques, my newsletter is tailored to equip you with practical knowledge and researched strategies.`}
                    </p>
                    <p className="p-2 text-base max-w-prose">
                        {`If you have any developer or research needs, check out the services page and feel free to contact me.`}
                    </p>
                </div>

            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <Link
                    href="https://github.com/Hunt-Gather-Trade"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        GitHub{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Check out the HGT GitHub repositories. Some projects are open publicly.
                    </p>
                </Link>

                <Link
                    href="/services"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    // target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Services{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Freelance developer services for researching and coding trade systems
                    </p>
                </Link>

                <Link
                    href="https://newsletter.huntgathertrade.com/"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Substack{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                        The Hunt Gather Trade newsletter lives in Substack. Check it out and sign up today.
                    </p>
                </Link>

                <Link
                    href="https://trello.com/b/o71Tuxb3"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Roadmap{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                        Check out the HGT project roadmap.
                    </p>
                </Link>

            </div>

        </main>
    );
}
