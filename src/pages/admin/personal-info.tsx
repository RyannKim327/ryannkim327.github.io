import { useState } from "react";
import Resume from "../../components/resume";
import Input from "../../widgets/input";

const experiences = [
  {
    year: 2018,
    title: "Android Development",
  },
  {
    year: 2018,
    title: "Front-end Development",
  },
  {
    year: 2019,
    title: "Database Management",
  },
  {
    year: 2019,
    title: "Back-end Development",
  },
  {
    year: 2019,
    title: "Desktop Development",
  },
  {
    year: 2022,
    title: "Automation and Chatbots",
  },
  {
    year: 2022,
    title: "API Development",
  },
  {
    year: 2023,
    title: "Adopting AI to field of Development",
  },
  {
    year: 2023,
    title: "Cybersecurity Team Leader",
  },
  {
    year: 2023,
    title: "Student Assistant (IT Department)",
  },
];

export default function PersonalInfo() {
  const [user, setUser] = useState({
    first_name: "Ryann Kim",
    middle_name: "Malabanan",
    last_name: "Sesgundo",
    position: "Multi-Stack Developer",
    phone: "+63912 345 6789",
    email: "weryses19@gmail.com",
    address: "Lucena City",
    about:
      "A full-stack developer with years of experience in different field such as Web Development and Mobile Development. With full compassion and dedication on work gained from being student assistant.",
  });

  return (
    <div className="flex flex-col md:flex-row gap-2 w-full h-full overflow-y-auto">
      <div className="flex flex-col w-full md:w-[calc(40%-0.5rem)] gap-2">
        {Object.keys(user).map((key) => {
          return (
            <Input value={user} onChange={setUser} name={key}>
              {key.toUpperCase().replace(/_/g, " ")}
            </Input>
          );
        })}
      </div>
      <div className="w-fullmd:w-[calc(60%-0.5rem)]">
        <Resume user={user} data={experiences} />
      </div>
    </div>
  );
}
