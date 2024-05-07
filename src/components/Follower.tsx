
"use client"

import Link from 'next/link';
interface FollowerProps {
    image: string;
    name: string;
    userName: string;
    number: number;
}

const Follower = ({ image, name, userName, number }: FollowerProps) => {
    return (
        <div className="p-6 bg-blue-200 shadow-lg rounded-3xl">
            <div className="flex items-center justify-between">
                <img src={image} alt={`Profile of ${name}`} className="w-50 h-50 rounded-full" />
                <div className="flex flex-col items-end">
                    <h2 dir="rtl" className="font-bold text-2xl">עוקב מספר {number}</h2>
                    <Link href={`/instagram/${userName}`}>
                        <p className="mt-2 bg-[#333] text-white py-2 px-4 rounded-2xl hover:opacity-90 duration-300">
                            לחץ כאן לפרטים נוספים
                        </p>
                    </Link>

                </div>
            </div>
            <div className="mt-2">
                <h2 className="font-bold text-2xl">{name}</h2>
                <h2 className="text-muted-foreground">{userName}</h2>
            </div>
        </div>
    );
};

export default Follower;
