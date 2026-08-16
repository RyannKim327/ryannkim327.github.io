export default function Footer() {
  return (
    <div id="footer" className="flex flex-col justify-center bg-bg w-full h-[50%] px-5 gap-3 border-t border-t-solid border-t-fg">
      <div className="flex items-start w-full">
        <div className="flex flex-col gap-2 w-[calc(50%-0.5rem)]">
          <span>Socials</span>
          <div className="flex flex-col">
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
        <div className="flex flex-col gap-1 w-[calc(50%-0.5rem)]">
          <span>Direct Contact Here</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Message"></textarea>
          <input type="button" value="Send Message" className="card" />
        </div>
      </div>
      <span className="w-full text-center font-mono py-3">All rights reserved ©{new Date().getFullYear()}</span>
    </div>
  )
}
