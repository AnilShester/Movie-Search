import React from 'react'

function WatchList({ watchList }) {
  console.log(watchList)
  return (
    <div className="pt-20">
      <h1>My WatchList</h1>
      {watchList.length > 0 ? (
        <div>there is a watchlist</div>
      ) : (
        <div>
          <h1>No watchlist.</h1>
        </div>
      )}
    </div>
  )
}

export default WatchList
