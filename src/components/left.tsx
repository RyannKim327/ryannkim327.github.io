import Me from './../assets/img/prof.jpg'

const Left = () => {
  return(
    <div
      className="left flex flex-col items-center m-3 p-3 rounded-[5px] custom-shadow rounded">
      <img
        src={Me}
        className="aspect-square w-5/12 mt-10 rounded mb-6 font-xl"
        alt="Ryann Kim Sesgundo"/>
      <h1 className="text-xl font-bold">Ryann Kim Sesgundo</h1>
      <h3>A newbie developer</h3>
    </div>
  )
}

export default Left
