export default function Footer() {
  return (
    <div id="footer" className="flex flex-col justify-center bg-bg w-full h-[50%] px-5 gap-3 border-t border-t-solid border-t-fg">
      <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 justify-center items-center lg:items-start w-full">
        <div className="flex flex-col gap-2 items-center lg:items-start w-[calc(100%-1rem)] lg:w-[calc(50%-0.5rem)]">
          <span>Socials</span>
          <div className="flex lg:flex-col gap-2">
            <span
              className="cursor-pointer"
              onClick={() => {
                window.open("https://github.com/RyannKim327", "_blank")
              }}>Github</span>
            <span
              className="cursor-pointer"
              onClick={() => {
                window.open("https://linkedin.com/in/RyannKim327", "_blank")
              }}>LinkedIn</span>
            <span
              className="cursor-pointer"
              onClick={() => {
                window.open("https://wakatime.com/@RyannKim327", "_blank")
              }}>Wakatime</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[calc(100%-1rem)] lg:w-[calc(50%-0.5rem)]">
          <span>Direct Contact Here</span>
          <div className="flex flex-wrap gap-2">
            <input className="flex-1 w-full bg-input p-2 rounded" type="text" placeholder="Name" />
            <input className="flex-1 w-full bg-input p-2 rounded" type="email" placeholder="Email Address" />
            <textarea className="fex-1 w-full bg-input p-2 rounded" placeholder="Message"></textarea>
          </div>
          <input type="button" value="Send Message" className="card" />

        </div>
      </div>
      <span className="w-full text-center font-mono py-3">All rights reserved ©{new Date().getFullYear()}</span>
    </div>
  )
}
