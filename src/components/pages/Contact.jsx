import PageTitle from "../common/PageTitle";
import Countries from "../common/Countries";
import ContactForm from "../common/ContactForm";

function Contact() {
  const pageTitle = "Designo / Contact Us";

  return (
    <>
      <PageTitle title={pageTitle} />
      <section className="max-w-6xl mx-auto relative z-10 font-jost">
        <div className="relative home-header py-16 px-6 md:px-14 md:mx-10 md:rounded-[15px] xl:px-24">
          <ContactForm />
        </div>
      </section>
      <Countries />
    </>
  );
}

export default Contact;
