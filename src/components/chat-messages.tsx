"use client"
import { SuggestionFlow } from '@/app/genkit';
import React, { useState } from 'react'
import { Button } from './ui/button';
import { PaperclipIcon, SendIcon } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { Input } from './ui/input';
import Markdown from 'react-markdown';
import CardRecomendedPrompt from './card-recomen-chats';

const ChatMessages = () => {
    const [message, setMessage] = useState<string>('');

    async function sendMessage(formData: FormData) {
        const theme = formData.get('theme')?.toString() ?? '';
        const suggestion = await SuggestionFlow(theme);
        setMessage(suggestion);
    }

    return (
        <div className='flex flex-col justify-between h-[85vh] md:mx-20 '>
            <ScrollArea className='space-x-2 mb-5'>
                {message ? <Markdown>{message}</Markdown> : <CardRecomendedPrompt />}
            </ScrollArea>
            <form action={sendMessage} className='flex space-x-2'>
                <label className='hidden' htmlFor="theme">
                    Input your prompt:{''}
                </label>
                <Button type='button' size='icon' variant='outline' className='rounded-full'>
                    <PaperclipIcon />
                </Button>
                <Input type="text" name="theme" id="theme" autoComplete="off" />
                <Button type="submit" size="icon">
                    <SendIcon className="size-4" />
                </Button>
            </form>
        </div>
    )
}

export default ChatMessages
