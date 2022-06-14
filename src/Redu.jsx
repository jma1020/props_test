import React from "react"

function Redu({dispatch}) {

    const onClickBtn = () => {
      dispatch({type:'UP'})
    }

    const onClickDown = () =>{
      dispatch({type:'DOWN'})
    }
  console.log('Redu 리렌더')
  return (
    <div>
      <button onClick={onClickBtn}>업클릭미</button>
      <button onClick={onClickDown}>업클릭미</button>
    </div>
  )
}


export default React.memo(Redu)