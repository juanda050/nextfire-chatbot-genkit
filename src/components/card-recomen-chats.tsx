import { MessageSquareIcon, ZapIcon } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'

const CardRecomendedPrompt = () => {
    const cards = [
        {
            id: 1,
            icon: MessageSquareIcon,
            title: "Natural Convertions",
            description: "Engeage in human-like convertion  with our advanced lenguage model"
        },
        {
            id: 2,
            icon: ZapIcon,
            title: "Instance Response",
            description: "Get instant responses to your questions with our real-time chat feature"
        }
    ]
    return (
        <>
            <section className='w-full flex flex-col justify-center items-center'>
                <div className='container px-4 md:px-6'>
                    <div className='flex flex-col items-center space-y-4 text-center'>
                        <div className='w-full max-w-sm relative'>
                            <div className='relative w-full h-32 mt-2 border rounded-lg'>
                                <Image src="/owl.png" alt="XAI Logo" layout='fill' className='object-contain aspect-square dark:invert rounded-full' />
                            </div>
                            <div className='absolute bottom-0 right-0 left-0 bg-black/90 text-white p-2 rounded-b-lg font-bold uppercase'>
                                Powered By NightOwlBot</div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl/none'>
                                Welcome chats
                            </h1>
                            <p className='mx-auto mx-w-[700px] text-gray-600 md:text-lg dark:text-gray-400'>
                                NightOwlBot is a chatbot designed to assist you with your queries and provide insightful information, all while keeping a watchful eye like a wise owl
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full flex items-center justify-center mt-4'>
                <div className='container px-4 md:px-6'>
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-2'>
                        {cards.map((card) => (
                            <Card key={card.id}>
                                <CardHeader>
                                    <CardTitle className='flex items-center space-x-2'>
                                        <card.icon className='size-6' />
                                        <span>{card.title}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-gray-600 dark:text-gray-400'>
                                        {card.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardRecomendedPrompt
