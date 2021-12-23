import { useState } from "react"

type ButtonProps = {
     text?: string
}

export function Button(props: ButtonProps) {
     let [counter, setCounter] = useState(0)

     function increment() {
          //counter += 1;
          setCounter(5)
     }

     return (
          <button onClick={increment}>
               {counter}
          </button>
     )
}