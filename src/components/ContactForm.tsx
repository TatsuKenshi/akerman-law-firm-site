import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import i18next from "i18next";

const ContactForm = () => {
  const form: any = useRef();
  const [messageSent, setMessageSent] = useState<string>("");
  const navigate = useNavigate();
  const language = i18next.language;

  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    delayError: 500,
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_umggq1l",
        "template_cf12iib",
        form.current,
        "bUQ3y_ETcXqGMoY73"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="max-w-[1200px] mx-auto p-8 my-4">
      <form
        ref={form}
        onSubmit={(e) => {
          sendEmail(e);

          setMessageSent(`
            ${
              language === "en"
                ? "Your message has been sent. You will be redirected to the home page shortly."
                : "Vaša poruka je poslata. Ubrzo ćete biti prebačeni na naslovnu stranu."
            }
          `);

          setTimeout(() => {
            setMessageSent("");
            navigate("/");
          }, 5000);
        }}
      >
        {/* name input section */}
        <div className="mb-4 w-full sm:w-10/12 md:w-8/12 mx-auto">
          <div>
            <label
              htmlFor="user_name"
              className="text-xl font-bold text-sky-900"
            >
              {language === "en" ? "Your full name" : "Vaše ime i prezime"}
            </label>
          </div>
          <div>
            <input
              {...register("user_name", {
                required: `${
                  language === "en"
                    ? "This field is required."
                    : "Ime je obavezno polje."
                }`,
                minLength: {
                  value: 4,
                  message: `${
                    language === "en"
                      ? "The name is too short."
                      : "Ime je prekratko."
                  }`,
                },
              })}
              id="user_name"
              name="user_name"
              className="border-4 border-sky-900 w-full h-12 rounded-lg px-2 text-xl"
            />
          </div>
          {/* error message paragraph */}
          <p role="alert" className="text-xl font-bold text-sky-900">
            {errors?.user_name?.message}
          </p>
        </div>

        {/* email input section */}
        <div className="mb-4 w-full sm:w-10/12 md:w-8/12 mx-auto">
          <div>
            <label
              htmlFor="user_email"
              className="text-xl font-bold text-sky-900"
            >
              {language === "en" ? "Your email address" : "Vaša email adresa"}
            </label>
          </div>
          <div>
            <input
              type="email"
              id="user_email"
              {...register("user_email", {
                required: `${
                  language === "en"
                    ? "Email address is required."
                    : "Imejl adresa je obavezno polje."
                }`,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: `${
                    language === "en"
                      ? "Entered value does not match the email format."
                      : "Unesena vrednost nije u validnom imejl formatu."
                  }`,
                },
              })}
              aria-invalid={errors.user_email ? "true" : "false"}
              className="border-4 border-sky-900 w-full h-12 rounded-lg px-2 text-xl"
              name="user_email"
            />
          </div>
          {/* error message paragraph */}
          <p role="alert" className="text-xl font-bold text-sky-900">
            {errors.user_email?.message}
          </p>
        </div>

        {/* message input section */}
        <div className="mb-4 w-full sm:w-10/12 md:w-8/12 mx-auto">
          <div>
            <label htmlFor="message" className="text-xl font-bold text-sky-900">
              {language === "en" ? "Your message" : "Vaša poruka"}
            </label>
          </div>
          <div>
            <textarea
              rows={4}
              cols={50}
              {...register("message", {
                required: `${
                  language === "en"
                    ? "Message field is required."
                    : "Poruka je obavezno polje."
                }`,
                minLength: {
                  value: 4,
                  message: `${
                    language === "en"
                      ? "The message is too short."
                      : "Poruka je prekratka."
                  }`,
                },
              })}
              id="message"
              className="border-4 border-sky-900 w-full h-40 h-12 rounded-lg px-2 text-xl"
              name="message"
            />
          </div>
          {/* error message paragraph */}
          <p role="alert" className="text-xl font-bold text-sky-900">
            {errors?.message?.message}
          </p>
        </div>

        {/* submit button section */}
        <div className="mb-4 w-full sm:w-10/12 md:w-8/12 mx-auto">
          <button
            type="submit"
            className="border-4 border-sky-900 text-sky-900 font-bold rounded-lg px-2 text-xl w-full lg:w-min"
            disabled={!isValid}
          >
            {language === "en" ? "Send" : "Pošalji"}
          </button>
        </div>

        {/* message sent section */}
        <div className="mb-4 w-full sm:w-10/12 md:w-8/12 mx-auto">
          <p className="text-xl font-bold text-sky-900">{messageSent}</p>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
