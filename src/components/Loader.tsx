import { usePathname } from 'next/navigation';

const Loader = () => {
    const pathname = usePathname();

    return (
        <div className="h-screen w-full flex items-center bg-black-1 justify-center">
            <div className="terminal-loader">
                <div className="terminal-header">
                    <div className="terminal-title">{pathname}</div>
                    <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                    </div>
                </div>
                <div className="text">Loading...</div>
            </div>
        </div>
    );
}

export default Loader;
