import { useEffect, useState } from "react"


const Footer = () => {

  // INFO: Initiation for shifting credits
  const [ credits, setCredits ] = useState("Developed by Ryann Kim Sesgundo")
  const [ toggle, setToggle ] = useState(true)

  // INFO: This is to create an interval for toggle to change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(prevToggle => !prevToggle)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // INFO: This is to create an effect to make changes of credits every 3 seconds
  useEffect(() => {
    if(toggle){
      setCredits("Developed by Ryann Kim Sesgundo")
    }else{
      setCredits("Inspired by the work of Richard Henrick")
    }
  }, [toggle])

  return (
    <div className="footer custom-shadow roboto-slab rounded w-auto text-center h-fit m-2 p-2">
      <h3>{credits}</h3>
    </div>
  )
}

export default Footer
