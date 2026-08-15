export default function Footer() {
  return (
    <div className="flex flex-col justify-center bg-bg w-full h-[40%] px-5 gap-3">
      <div className="flex items-start w-full">
        <div className="flex flex-col gap-2 w-[calc(50%-0.5rem)]">
          <span>Socials</span>
          <div className="flex flex-col">
            <span>Github</span>
            <span>LinkedIn</span>
            <span>Wakatime</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-[calc(50%-0.5rem)]">
          <span>Direct Contact Here</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Message"></textarea>
          <input type="button" value="Send Message" />
        </div>
      </div>
      <span className="w-full text-center font-mono">All rights reserved ©{new Date().getFullYear()}</span>
    </div>
  )
}
