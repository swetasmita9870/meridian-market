export function IconSearch({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

export function IconBag({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.25 10.5V6a2.25 2.25 0 1 1 4.5 0v4.5" />
    </svg>
  );
}

export function IconSparkle({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l1.2 4.2L17.5 7.5l-4.2 1.2L12 13l-1.2-4.2L6.5 7.5l4.2-1.2L12 2zm7 9l.8 2.8L22.5 14l-2.8.8L19 17.5l-.8-2.8L15.5 14l2.8-.8L19 11zm-14 0l.8 2.8L8.5 14l-2.8.8L5 17.5l-.8-2.8L1.5 14l2.8-.8L5 11z" />
    </svg>
  );
}
