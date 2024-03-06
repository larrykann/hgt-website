import Link from 'next/link'

const Contact: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="max-w-xl mx-auto p-4 flex-1">
                <h2 className="text-2xl font-semibold text-center mb-4">
                    Contact Me via Email
                </h2>
                <p className="text-center mb-4">
                    kanndide@gmail.com
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

export default Contact;
