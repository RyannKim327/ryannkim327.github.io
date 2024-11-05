import ai_haibara from "./ai-haibara.png";
import ariabot from "./aria-bot.png";
import avdext from "./avd-ext.png";
import baybayin from "./baybayin-keyboard.png";
import chatapp from "./chatapp.png";
import websamples from "./web-samples.png";

interface Image {
  src: string;
  name: string;
  description: string;
  link: string;
}

export default function Images() {
  const images: Image[] = [
    {
      src: ai_haibara,
      name: "AI Haibara",
      description:
        "An android application with a minimal interface focuses on AI chat application",
      link: "https://github.com/RyannKim327/Ai-Haibara/raw/main/app.apk",
    },
    {
      src: ariabot,
      name: "Aria Bot",
      description:
        "A facebook bot where it sends something based on the command requested",
      link: "https://ryannkim327.is-a.dev/FacebookBot",
    },
    {
      src: avdext,
      name: "Audio Video Downloader",
      description:
        "A chrome extension where you can download some videos/audios from selected platforms",
      link: "https://github.com/RyannKim327/video-downloader-extension/releases/tag/Chrome-0.0.3",
    },
    {
      src: baybayin,
      name: "Baybayin Keyboard",
      description:
        "A web based keyboard focuses on baybayin (developed for desktop and non-baybayin character)",
      link: "https://ryannkim327.is-a.dev/Baybayin-Keyboard",
    },
    {
      src: chatapp,
      name: "Chat App",
      description: "A real-time web-based chat application",
      link: "https://chat-app-y7a7.onrender.com",
    },
    {
      src: websamples,
      name: "Web Samples for Newbies",
      description: "A compilation of web based simple projects for newbies",
      link: "https://ryannkim327.is-a.dev/Web-Challenges-for-Newbie",
    },
  ];
  return images;
}
