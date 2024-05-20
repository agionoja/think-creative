import { useFetcher } from "react-router-dom";
import { useState } from "react";

const ContactForm = () => {
  const fetcher = useFetcher();
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    setEmail("");
    setText("");
  };

  return (
    <fetcher.Form
      method={"post"}
      onSubmit={handleSubmit}
      className={"flex w-60 flex-col justify-center gap-5 lg:w-72"}
    >
      <input
        className={"form-input"}
        type="email"
        name="email"
        placeholder="Enter your email"
        required={true}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        required={true}
        cols={1}
        rows={1}
        name="message"
        id="guest-message"
        className={"form-input"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type={"submit"}
        className={"mx-auto w-fit bg-Orange p-2.5 text-white"}
      >
        Contact Us
      </button>
    </fetcher.Form>
  );
};

export default ContactForm;
