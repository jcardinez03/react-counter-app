import { useState } from 'react'
import { Button } from "@/components/Button";
import { Plus, Minus } from "lucide-react";
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  }

  const decrement = () => {
    setCount((prev) => prev - 1);
  }

  const reset = () => {
    setCount(0);
  }
  return (
    <>
    <div className='border border p-5 text-center mx-auto max-w-md mt-12 rounded-md bg-background text-foreground'>
      {/* Header */}
      <div>
        <h1 className='text-5xl font-bold'>Counter  App</h1>
      </div>

      {/* Count */}
      <div className='space-y-12'>
        <div className='text-4xl'>{count}</div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-5">
        <div>
          <Button className="hover:text-crimson-foreground hover:bg-crimson hover:ring-crimson" onClick={decrement}>
            <Minus />
          </Button>
        </div>
        <div>
          <button onClick={reset}>Reset</button>
        </div>
        <div>
          <Button className="hover:text-crimson-foreground hover:bg-success hover:ring-success" onClick={increment}>
            <Plus />
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
