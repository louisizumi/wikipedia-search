import logo from '../logo.png'
import { useState } from "react"

function Search() {
  const [result, setResult] = useState({})

  async function fetchData(val) {
    const trimVal = val.trim().toLowerCase()
    if (trimVal.length > 0) {
      const api = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${trimVal}`;
      const response = await fetch(api)
      if (!response.ok) {
         throw Error(response.statusText)
      }
      return await response.json()
    }
  }

  async function handleSearch(e) {
    const { value } = e.target
    setResult({ result: await fetchData(value) })
  }

  return (
    <div className="container">
      <div className="header">
        <div className="caption">
          <h4>WIKIPEDIA</h4>
          <p>The Free Encyclopedia</p>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="content">
        <form action="">
          <input type="text" className="search" onKeyUp={handleSearch} />
        </form>
      </div>
      <div className="word">
        <ul>
          {result.result
            && result.result.query
            && result.result.query.search.map(data =>
              <Word key={data.id} data={data} />
            )
          }
        </ul>
      </div>
    </div>
  )
}

function Word(props) {
  const searchList = document.querySelector(".listData")

  return (
    <div className="listData">
      {searchList && searchList.insertAdjacentHTML("afterbegin",
        `<li>
          <h4>${props.data.title}</h4>
          ${props.data.snippet}
        </li>`
      )}
    </div>
  )
}

export default Search
