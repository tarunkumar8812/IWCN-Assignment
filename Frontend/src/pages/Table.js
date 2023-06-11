import React, { useEffect, useState } from 'react'
import "./table.css"
const Table = () => {

  const [data, setData] = useState({})

  const headings = ["Onboading Call", "Google Search Console Access", "Google Analitics Access", "Website Access", "Technical Audit", "Anchor Text and Semantic Analysis", "Competitor Analysis", "Anchor Text / URL Mapping", "Google Data Studio Report + Local Reporting Suite", "Site Level Optimization", "On Page Optimization", "Content Creation", "Content Publication", "Premium Press Release", "Authority Niche Placements", "Review Management", "Index Links", "Video Recap"]

  const col = ["A", "B", "C", "D", "E", "F"]

  useEffect(() => {
    for (let i = 0; i < headings.length; i++) {
      for (let j = 0; j < col.length; j++) {
        data[col[j] + (i + 1)] = ""
      }
    }
  }, [])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <div></div>

      <form action='/table'>
        <h2>Table</h2>

        <table>
          <thead className="header">
            <tr>
              <th>Month 1</th>
            </tr>
          </thead>

          <tbody className="body">
            {headings.map((item, ind) => {
              return (<>
                <tr key={ind}>
                  {/* <th id={ind + "-" + "0"}> {item}</th> */}
                  <th id={`${ind}-0`} > {item}</th>
                  {col.map((column, i) => {
                    return (<>
                      <td key={i}>
                        <input name={column + (ind + 1)} value={data[column + (ind + 1)]} onChange={handleChange} autoComplete='off'>

                        </input>
                      </td>
                    </>)
                  })}
                </tr>
              </>)
            })}
          </tbody>
        </table>
        <button type='submit' >Submit Now</button>
      </form>
    </div>
  );
}

export default Table