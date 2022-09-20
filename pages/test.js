import {useEffect, useState} from 'react';

export default function Test() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(()=> {
    console.log(window.innerHeight, window.innerWidth)
    // window.addEventListener('load', ()=> {
    //   console.log(window.innerHeight, window.innerWidth)
    // })

    window.addEventListener('resize', ()=> {
      console.log(window.innerHeight, window.innerWidth)
    })
  }, [])

  return (
    <div>
      {/* <h2>Width: {window.innerWidth}</h2>

      <h2>Height: {window.innerHeight}</h2> */}
    </div>
  );
}

function getWindowSize() {
  if (typeof window !== "undefined") {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
}