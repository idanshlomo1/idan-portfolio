"use client"

import { useState } from 'react';
import { IoLogoInstagram } from "react-icons/io";
import Follower from '../../components/Follower';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

interface Client {
    name: string;
    userName: string;
    imgSrc: string;
}

const Page: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const clientsData: Client[] = [
        {
            name: "Idan",
            userName: "idan1213",
            imgSrc: "https://via.placeholder.com/150"
        },
        {
            name: "Bobo",
            userName: "bobo3",
            imgSrc: "https://via.placeholder.com/150"
        },

    ];

    const filteredClients = clientsData.filter(
        client => client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <MaxWidthWrapper>
            <main className="flex min-h-screen flex-col items-center pt-16">
                <Link
                    className='bg-gradient-to-tr from-black to-[#333] rounded-full text-white p-4 m-4 hover:opacity-80 duration-300'
                    href="https://www.instagram.com/idan_shlomo1/"
                >
                    <IoLogoInstagram size={40} />
                </Link>

                <h1 className="text-2xl font-bold text-center">
                    יום 1 שאני שם כל עוקב באתר שלי
                </h1>
                <p className="text-gray-500 text-center">מטרה : 2500 עוקבים</p>
                <input
                    dir='rtl'
                    type="text"
                    placeholder="חפש את עצמך כאן"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mt-4 p-2 border rounded"
                />
                <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredClients.map((client, index) => (
                        <Follower key={client.userName} image={client.imgSrc} name={client.name} userName={client.userName} number={index + 1} />
                    ))}
                </div>

            </main>
        </MaxWidthWrapper>
    );
};

export default Page;
