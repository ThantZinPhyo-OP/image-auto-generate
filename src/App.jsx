import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'


function App() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')

  const configuration = new Configuration ({
    apiKey: import.meta.env.VITE_Open_AI_Key
  })

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: '512x512'
    })

    setResult(res.data.data[0].url)
  }


  return (
    <div className="App">
       <div className="header-title">
          <h3>API & React.JS</h3>
       </div>
      <h3>Generate Image With Open AI </h3>
      <div className="prompt-container">
      <textarea 
        placeholder='Write Here(Example- Chicken Driving the Car)'
        className="prompt-box"
        onChange={ (e) => setPrompt(e.target.value)}
      />
      </div>
      <br />
        <button onClick={generateImage}>Generate Image</button>
      <hr />
      {result.length > 0 ? (
        <img src={result} alt="result" />
      ) : (
        <p>No data!</p>
      )} 
    </div>
  )
}

export default App
