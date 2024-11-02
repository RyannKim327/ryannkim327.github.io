import ai_haibara from "./ai-haibara.png";
import ariabot from "./aria-bot.png";
import avdext from "./avd-ext.png";
import baybayin from "./baybayin-keyboard.png";
import chatapp from "./chatapp.png";
import websamples from "./web-samples.png";

export default function Images() {
  const images = [
    {
      src: ai_haibara,
      name: "AI Haibara",
    },
    {
      src: ariabot,
      name: "Aria Bot",
    },
    {
      src: avdext,
      name: "Audio Video Downloader",
    },
    {
      src: baybayin,
      name: "Baybayin Keyboard",
    },
    {
      src: chatapp,
      name: "Chat App",
    },
    {
      src: websamples,
      name: "Web Samples for Newbies",
    },
  ];
  return images;
}
