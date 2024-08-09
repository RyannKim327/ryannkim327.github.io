import Me from './../assets/img/prof.jpg'

const Left = () => {
  return(
    <div
      className="flex flex-col items-center w-1/4 m-3 p-3 rounded-[5px] shadow-[3px_3px_5px_rgba(255,_255,_255,_0.5)]">
      <img
        src={Me}
        className="aspect-square w-1/2"/>
      <h1 className="text-xl font-bold">Ryann Kim Sesgundo</h1>
      <h3>A newbie developer</h3>
    </div>
  )
}

export default Left
