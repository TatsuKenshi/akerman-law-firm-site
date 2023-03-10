// import { useRef } from "react";
// import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  return (
    <section
      className="max-w-[1200px] mx-auto p-8 my-4"
      // onSubmit={sendEmail}
    >
      <form action="">
        {/* name div */}
        <div className="mb-4 w-full sm:w-10/12 md:w-8/12 mx-auto">
          <div>
            <label htmlFor="name" className="text-xl font-bold text-sky-900">
              Name
            </label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Your name..."
              className="border-4 border-sky-900 w-full h-12 rounded-lg px-2 text-xl"
              id="name"
              name="name"
            />
          </div>
        </div>

        {/* email address div */}
        <div className="mb-4 w-full sm:w-10/12 md:w-8/12 mx-auto">
          <div>
            <label htmlFor="email" className="text-xl font-bold text-sky-900">
              Email
            </label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Your email..."
              className="border-4 border-sky-900 w-full h-12 rounded-lg px-2 text-xl"
              id="email"
              name="email"
            />
          </div>
        </div>

        {/* message div */}
        <div className="mb-4 w-full sm:w-10/12 md:w-8/12 mx-auto">
          <div>
            <label htmlFor="message" className="text-xl font-bold text-sky-900">
              Message
            </label>
          </div>
          <div>
            <textarea
              name=""
              id=""
              className="border-4 border-sky-900 w-full h-40 h-12 rounded-lg px-2 text-xl"
              placeholder="Your message..."
            ></textarea>
          </div>
        </div>

        {/* send button div */}
        <div className="mb-4 w-full sm:w-10/12 md:w-8/12 mx-auto">
          <button
            type="submit"
            className="border-4 border-sky-900 text-sky-900 font-bold rounded-lg px-2 text-xl w-full lg:w-min"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
