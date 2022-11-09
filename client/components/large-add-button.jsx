import React from 'react';
import { PlusSmIcon } from '@heroicons/react/outline';

export default function LargeButton(props) {
  return (
    <>
      <button className="inline-flex aspect-square cursor-pointer items-center justify-center rounded-full border-none border-primary bg-primary p-2 font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white child-svg:h-4 child-svg:w-4 dark:focus:ring-white/80">
        <PlusSmIcon className="h-4 w-4" />
      </button>
      <button className="inline-flex aspect-square cursor-pointer items-center justify-center rounded-full border-none border-primary bg-primary p-2 font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white child-svg:h-5 child-svg:w-5 dark:focus:ring-white/80">
        <PlusSmIcon className="h-5 w-5" />
      </button>
      <button className="inline-flex aspect-square cursor-pointer items-center justify-center rounded-full border-none border-primary bg-primary p-2.5 font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white child-svg:h-6 child-svg:w-6 dark:focus:ring-white/80">
        <PlusSmIcon className="h-6 w-6" />
      </button>
    </>
  );
}
