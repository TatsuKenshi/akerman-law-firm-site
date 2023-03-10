import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const form: any = useRef();
  const [messageSent, setMessageSent] = useState<string>("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
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

          setMessageSent(
            "Your message has been sent. You will be redirected to the home page shortly."
          );

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
              Your Name
            </label>
          </div>
          <div>
            <input
              {...register("user_name", {
                required: "This field is required",
                minLength: { value: 4, message: "The name is too short" },
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
              Email
            </label>
          </div>
          <div>
            <input
              type="email"
              id="user_email"
              {...register("user_email", {
                required: "Email Address is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
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
              Your Message
            </label>
          </div>
          <div>
            <textarea
              rows={4}
              cols={50}
              {...register("message", {
                required: "This field is required",
                minLength: { value: 4, message: "The message is too short" },
              })}
              id="message"
              className="border-4 border-sky-900 w-full h-40 h-12 rounded-lg px-2 text-xl"
              name="message"
            />
          </div>
          <p role="alert" className="text-xl font-bold text-sky-900">
            {errors?.message?.message}
          </p>
        </div>

        {/* submit button section */}
        <div className="mb-4 w-full sm:w-10/12 md:w-8/12 mx-auto">
          <input
            type="submit"
            className="border-4 border-sky-900 text-sky-900 font-bold rounded-lg px-2 text-xl w-full lg:w-min"
            disabled={!isValid}
          />
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
