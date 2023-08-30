import { useFormik } from "formik";
import { SubmitBtn } from "./Buttons";
import * as Yup from "yup";

const initialValues = { name: "", email: "", phone: "", message: "" };

const onSubmit = (values) => {
  console.log("Form data", values);
};

// const validate = (values) => {
//   let errors = {};

//   if (!values.name) {
//     errors.name = "Can't be empty";
//   }
//   if (!values.email) {
//     errors.email = "Can't be empty";
//   } else if (
//     !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/i.test(values.email)
//   ) {
//     errors.email = "Please use a valid email address";
//   }
//   if (!values.phone) {
//     errors.phone = "Can't be empty";
//   }
//   if (!values.message) {
//     errors.message = "Can't be empty";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Can't be empty"),
  email: Yup.string()
    .required("Can't be empty")
    .email("Please use a valid email address"),
  phone: Yup.string().required("Can't be empty"),
  message: Yup.string().required("Can't be empty"),
});

function ContactForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

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
      {/* FORM */}
      <form
        className="w-full xl:basis-1/2 xl:ps-8"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col items-center justify-center gap-6 font-jost">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-[15px] text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-b-2 peer"
              placeholder=" "
              required
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-red-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
            >
              <p className="text-[15px]">Name</p>
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-[15px] text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-b-2 peer"
              placeholder=" "
              required
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-[15px] text-red-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-[15px] text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-b-2 peer"
              placeholder=" "
              required
              onChange={formik.handleChange}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.name ? (
              <div>{formik.errors.phone}</div>
            ) : null}
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-[15px] text-red-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
            >
              Phone
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="message"
              id="message"
              className="block pt-2.5 pb-20 px-0 w-full text-[15px] text-white bg-transparent border-0 border-b border-white appearance-none  focus:outline-none focus:ring-0 focus:border-b-2 peer"
              placeholder=" "
              required
              onChange={formik.handleChange}
              value={formik.values.message}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message ? (
              <div>{formik.errors.message}</div>
            ) : null}
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-[15px] text-red-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
            >
              Your Message
            </label>
          </div>
          <SubmitBtn />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
