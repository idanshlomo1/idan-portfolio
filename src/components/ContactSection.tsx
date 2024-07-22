import { IoMdCheckmarkCircle } from "react-icons/io"
import MessageLeadForm from "./MessageLeadForm"

const ContactSection = () => {
    return (
        <div id="Contact" className="py-40 min-h-screen">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-5xl textGradient text-center lg:text-7xl  font-light">
                    Contact
                </h1>
                <div className="bgGradient h-[1px] mt-4 rounded-full max-w-md mx-auto"></div>


            </div>

            <MessageLeadForm />


        </div>

    )
}

export default ContactSection
