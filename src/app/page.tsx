'use client';

import { menuSuggestionFlow } from './genkit';
import { useState } from 'react';

export default function Home() {
  const [menuItem, setMenuItem] = useState<string>('');

  async function getMenuItem(formData: FormData) {
    const theme = formData.get('theme')?.toString() ?? '';
    const suggestion = await menuSuggestionFlow(theme);
    setMenuItem(suggestion);
  }

  return (
    <main>
      <form action={getMenuItem}>
        <label htmlFor="theme">
          Suggest a menu item for a restaurant with this theme:{' '}
        </label>
        <input type="text" name="theme" id="theme" />
        <br />
        <br />
        <button type="submit">Generate</button>
      </form>
      <br />
      <pre>{menuItem}</pre>
    </main>
  );
}