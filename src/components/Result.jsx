import "./Result.css"

export default function Result({ items }){



      const avg =
    items.reduce((acc, item) => acc + item.score, 0) / items.length;

  const roundedAvg = Math.round(avg);


     console.log("Average score:", avg);
    return (
        <div className="result">
            <h2>Your Result</h2>
            <div className="final-score">
                <h1>{roundedAvg}</h1>
                <p>of 100</p>
            </div>
            <h2>Great</h2>
            <p>
                You scored higher than 65% of the people
                who have taken these tests.
            </p>
            
        </div>
    )
}