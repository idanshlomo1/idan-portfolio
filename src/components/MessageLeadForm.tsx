import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

// Define a type for the form data

const getformUrl = process.env.NEXT_PUBLIC_GETFORM_URL;

type FormData = {
    name: string;
    phone: string;
    subject: string;
    otherMessage: string;
};

// Define a type for the error object
type Errors = {
    name?: string;
    phone?: string;
};

const MessageLeadForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        subject: 'Website',
        otherMessage: ''
    });
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: Errors = {};
        if (!formData.name) {
            newErrors.name = 'Required field';
        }
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Valid phone number (10 digits)';
        }

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);

            try {
                const response = await fetch(process.env.NEXT_PUBLIC_GETFORM_URL as string, {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    setFormData({
                        name: '',
                        phone: '',
                        subject: 'Digital Marketing',
                        otherMessage: ''
                    });
                    setErrors({});
                    setIsSuccess(true);
                } else {
                    console.error('Error sending data to getform.io');
                }
            } catch (error) {
                console.error('Error sending data to getform.io:', error);
            }

            setIsSubmitting(false);
        } else {
            setErrors(newErrors);
        }
    };

    const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSubject = e.target.value;
        setFormData(prev => ({
            ...prev,
            subject: selectedSubject,
        }));
    };

    return (
        <div className='mt-4'>
            <div className="mx-auto px-8 py-10 pb-10 rounded-xl max-w-[1000px] border-2 border-secondary hover:border-muted-foreground duration-300">
                <div>
                    <div className='mb-8'>
                        <h1 className="text-center text-lg md:text-2xl font-extrabold text-secondary">
                            Lets work together
                        </h1>

                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="w-full  md:w-1/2 md:mr-2 mb-2 md:mb-0">
                                <div className=" h-12">
                                    <Input
                                        type="text"
                                        className='rounded-full duration-300 w-full'
                                        id="messageLeadForm-name"
                                        placeholder='Full name'
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />

                                    {errors.name && <div className="error text-red-400 text-sm mt-1">{errors.name}</div>}
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 md:ml-2">
                                <div className=" h-12">
                                    <Input
                                        type="text"
                                        className='rounded-full duration-300 w-full'
                                        id="messageLeadForm-phone"
                                        placeholder='Phone'
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />

                                    {errors.phone && <div className="error text-red-400 text-sm mt-1">{errors.phone}</div>}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mb-4 md:justify-center max-w-[300px]">
                            <label className="text-main text-lg my-2 font-bold" htmlFor="leadForm-subject">
                                Interested in
                            </label>
                            <select
                                id="leadForm-subject"
                                value={formData.subject}
                                onChange={handleSubjectChange}
                                className="text-main bg-secondary px-2 py-1 rounded-full text-lg cursor-pointer font-bold"
                            >
                                <option value="Full stack project">Full stack project</option>
                                <option value="Full stack project">Frontend project</option>
                                <option value="Website">Website</option>
                                <option value="Landing page">Landing page</option>
                                <option value="Advanced website">Advanced website</option>
                                <option value="Store">Store</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="my-4">
                            <Textarea
                                id="messageLeadForm-otherMessage"
                                value={formData.otherMessage}
                                onChange={(e) => setFormData({ ...formData, otherMessage: e.target.value })}
                                className=" rounded-2xl w-full max-h-32 h-32 duration-200"
                                placeholder="Tell me more about your desired project.."
                            />
                        </div>

                        <Button
                            variant="default"
                            className="w-full text-xl rounded-full "
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Submit
                        </Button>
                    </form>
                </div>

                {isSuccess && (
                    <div className="text-center">
                        <div className="success-message max-w-[400px] mx-auto shadow-2xl shadow-green-400 bg-green-400 p-2 underline text-slate-800 font-bold rounded-full mt-8">
                            Your details have been successfully received
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessageLeadForm;
