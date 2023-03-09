import React from "react";

const PageHero = React.lazy(() => import("../components/PageHero"));
const ContactForm = React.lazy(() => import("../components/ContactForm"));

const Contact = () => {
  return (
    <main>
      <PageHero />
      <ContactForm />
    </main>
  );
};

export default Contact;
