import React, { useState } from "react"

export default function Home() {
  const [hello, setHello] = useState("Hello...")

  const fetchHello = async () => {
    const helloWorldApi = await fetch(
      "/.netlify/functions/hello-world?name=Grigor"
    ).then(resp => resp.json())

    setHello(helloWorldApi.message)
  }

  return (
    <div>
      <p>{hello}</p>
      <button type="button" onClick={() => fetchHello()}>
        Hello ?
      </button>
    </div>
  )
}
