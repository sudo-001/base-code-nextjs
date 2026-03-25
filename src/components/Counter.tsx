"use client";

import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  selectCount,
} from "@/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md dark:bg-zinc-900">
      <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
        Redux Counter
      </h2>
      <div className="text-5xl font-bold text-zinc-900 dark:text-zinc-50">
        {count}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
        >
          −
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition-colors"
        >
          +
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 text-white bg-zinc-500 rounded hover:bg-zinc-600 transition-colors"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
        >
          +5
        </button>
      </div>
    </div>
  );
}
