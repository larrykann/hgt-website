const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 w-full border-t border-gray-200 dark:border-gray-600">
            <div className="w-full mx-auto max-w-screen-xl p-1 flex items-center justify-center">
                <span className="text-md text-white sm:text-center dark:text-gray-400">
                    Risk Disclaimer:
                </span>
            </div>
            <div className="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 italic">
                    Futures and forex trading contains substantial risk and is not for every investor. An investor could potentially lose all or more than the initial investment. Risk capital is money that can be lost without jeopardizing ones’ financial security or life style. Only risk capital should be used for trading and only those with sufficient risk capital should consider trading. Past performance is not necessarily indicative of future results.
                </span>
            </div>
            <div className="w-full mx-auto max-w-screen-xl p-1 flex items-center justify-center">
                <hr className="border-gray-200 dark:border-gray-700 my-1 w-1/2"/>
            </div>
            <div className="w-full mx-auto max-w-screen-xl p-2 flex items-center justify-center">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023 Hunt Gather Trade. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;
