import Link from 'next/link'

const Services: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="max-w-xl mx-auto p-4 flex-1">
                <h2 className="text-2xl font-semibold text-center mb-4">
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
        </main>
    );
}

export default Services;
