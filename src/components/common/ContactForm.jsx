import { Formik, Form, Field, ErrorMessage } from "formik";
import { SubmitBtn } from "./Buttons";
import errorIcon from "../../assets/images/contact/desktop/icon-error.svg";
import * as Yup from "yup";

const initialValues = { name: "", email: "", phone: "", message: "" };

const onSubmit = (values, { resetForm }) => {
  console.log("Form data", values);
  resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Can't be empty"),
  email: Yup.string()
    .required("Can't be empty")
    .email("Please use a valid email address"),
  phone: Yup.string().required("Can't be empty"),
  message: Yup.string().required("Can't be empty"),
});

function ContactForm() {
  return (
    <div className=" text-white text-center flex flex-col  gap-6 md:text-start xl:flex-row xl:gap-14">
      <div className="space-y-5 xl:basis-1/2 self-center">
        <h1 className="home-title font-medium">Contact Us</h1>
        <p className="paragraph-text md:pe-20 xl:pe-0">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="w-full xl:basis-1/2 xl:ps-8">
          <div className="flex flex-col items-center justify-center gap-6 font-jost">
            <div className="relative z-0 w-full mb-6 border-b border-white focus:border-b-2 flex justify-between">
              <Field
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 text-[15px] text-white bg-transparent border-0  appearance-none  focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <div className="self-end pb-2.5 error-message">
                <ErrorMessage name="name">
                  {(errorMsg) => (
                    <div>
                      {errorMsg}{" "}
                      <img
                        src={errorIcon}
                        alt="error"
                        className="inline ps-2"
                      />
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-red-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6"
              >
                <p className="text-[15px]">Name</p>
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 border-b border-white focus:border-b-2 flex justify-between">
              <Field
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 text-[15px] text-white bg-transparent border-0 appearance-none  focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <div className="self-end pb-2.5 error-message">
                <ErrorMessage name="email">
                  {(errorMsg) => (
                    <div>
                      {errorMsg}{" "}
                      <img
                        src={errorIcon}
                        alt="error"
                        className="inline ps-2"
                      />
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-[15px] text-red-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 border-b border-white focus:border-b-2 flex justify-between">
              <Field
                type="number"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 text-[15px] text-white bg-transparent border-0  appearance-none  focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <div className="self-end pb-2.5 error-message">
                <ErrorMessage name="phone">
                  {(errorMsg) => (
                    <div>
                      {errorMsg}{" "}
                      <img
                        src={errorIcon}
                        alt="error"
                        className="inline ps-2"
                      />
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-[15px] text-red-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6"
              >
                Phone
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 border-b border-white focus:border-b-2 flex justify-between">
              <Field
                type="text"
                name="message"
                id="message"
                className="block pt-2.5 pb-20 px-0 text-[15px] text-white bg-transparent border-0  appearance-none  focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <div className="self-end pb-2.5 error-message">
                <ErrorMessage name="message">
                  {(errorMsg) => (
                    <div>
                      {errorMsg}{" "}
                      <img
                        src={errorIcon}
                        alt="error"
                        className="inline ps-2"
                      />
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <label
                htmlFor="message"
                className="peer-focus:font-medium absolute text-[15px] text-red-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6"
              >
                Your Message
              </label>
            </div>
            <SubmitBtn />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
