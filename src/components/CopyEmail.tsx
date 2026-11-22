'use client';

import { useState } from 'react';
import { Icon } from './Icon';

export function CopyEmail({ email }: { email: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {}
  };
  return (
    <button type="button" className="copy-btn" onClick={copy} aria-live="polite">
      <Icon name={done ? 'check' : 'copy'} size={16} />
      {done ? 'Copied' : 'Copy'}
    </button>
  );
}
