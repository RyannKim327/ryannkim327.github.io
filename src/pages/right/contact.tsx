interface input_interface {
  placeholder: string;
  type: string;
  minLength: number;
  className: string | unknown;
}

const Input = (props: input_interface) => {
  return (
    <label className={`${props.className} custom-input`}>
      <input
        type={props.type}
        placeholder=" "
        minLength={props.minLength}
        required
      />
      <span>{props.placeholder}</span>
    </label>
  );
};

export default function RightContact(){
    return (
        <div className="flex flex-col w-full h-full p-2 gap-4">
            <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Ibabang+Iyam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                title="Location"
                loading="lazy"
                allowFullScreen={false}
                className="h-1/3 lg:h-1/2 w-full dark:grayscale dark:invert transition ease-in delay-100 rounded"
            />
            <form
                action="https://formsubmit.co/weryses19@gmail.com"
                method="POST"
                className="flex flex-col w-full box-border gap-2"
            >
                <div className="flex flex-row gap-2 w-full box-border">
                    <Input
                        className={`w-full rounded border-black dark:border-white`}
                        type="name"
                        minLength={20}
                        placeholder="Name/Company name"
                    />
                    <Input
                        className={`w-full rounded border-black dark:border-white`}
                        type="email"
                        minLength={10}
                        placeholder="Email Address"
                    />
                </div>

                <textarea
                    style={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                    }}
                    placeholder="Enter your message"
                    minLength={20}
                    required
                    className="resize-none p-2 outline-none rounded h-20 bg-transparent border-black dark:border-white"
                ></textarea>
                <input
                    style={{ borderWidth: "1px", borderStyle: "solid" }}
                    className="rounded px-2 border-black dark:border-white"
                    type="submit"
                    value="Send email"
                />
            </form>
        </div>
    )
}