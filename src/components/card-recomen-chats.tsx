import { ClockIcon, MessageSquareIcon, ZapIcon } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

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
        },
        {
            id: 3,
            icon: ClockIcon,
            title: "Real Time Updates",
            description: "Experience seamless communication with our intuitive interface"
        }
    ]
    return (
        <section className='w-full flex items-center justify-center'>
            <div className='container px-4 md:px-6'>
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
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
    )
}

export default CardRecomendedPrompt
