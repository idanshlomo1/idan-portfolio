import { Button } from "@/components/ui/button"
import { ArrowRightCircle } from "lucide-react"
import Link from "next/link"

const notFound = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            <div className="terminal-loader">
                <div className="terminal-header">
                    <div className="terminal-title">Page not found</div>
                    <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                    </div>
                </div>
                <div className="text">404 Error...</div>
            </div>
            <div>
                <Link href="/"><Button className="text-primary hover:text-muted-foreground duration-300 underline" variant="link"> Jump back to Home page<ArrowRightCircle className="ml-2" /></Button></Link>
            </div>
        </div>
    )
}

export default notFound
