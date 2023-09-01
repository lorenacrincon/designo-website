import PageTitle from "../../common/PageTitle";
import Countries from "../locations/Countries";
import ContactForm from "./ContactForm";
import { Reveal } from "../../common/Animations";

function Contact() {
  const pageTitle = "Designo / Contact Us";

  return (
    <>
      <PageTitle title={pageTitle} />
      <section className="max-w-6xl mx-auto relative z-10 font-jost">
        <Reveal>
          <div className="relative home-header py-16 px-6 md:px-14 md:mx-10 md:rounded-[15px] xl:px-24">
            <ContactForm />
          </div>
        </Reveal>
      </section>
      <Countries />
    </>
  );
}

export default Contact;
