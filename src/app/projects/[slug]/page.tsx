"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { ArrowLeftCircleIcon } from "lucide-react"
import { useRouter } from "next/navigation"

const singleProjectPage = () => {
    const router = useRouter()

    return (
        <div>
            <MaxWidthWrapper className="pt-40">
                <ArrowLeftCircleIcon
                    className="mx-4 cursor-pointer"
                    onClick={() => router.back()}
                />
                Single project Page
            </MaxWidthWrapper>
        </div>
    )
}

export default singleProjectPage
