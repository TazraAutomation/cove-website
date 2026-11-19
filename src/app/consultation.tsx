export default function Consultation() {
  const fieldClass =
    "w-full border border-[#B8C8BE] bg-white rounded-sm px-4 py-3 outline-none focus:border-[#29463D]";

  return (
    <section
      id="contact"
      className="bg-[#F9F6F3] py-20 md:py-28"
    >
      <div className="mx-auto w-[86%] max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

        <div>
          <p className="text-sm tracking-widest uppercase text-[#5B8277] mb-6">
            Start a conversation
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#29463D]">
            Make your next purchase count.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#52615A]">
            Whether you are approaching a renewal,
            evaluating a new supplier or reviewing
            your technology spend, we would like
            to hear from you.
          </p>

          <div className="mt-10 border-t border-[#B8C8BE] pt-6">
            <p className="font-semibold text-[#29463D]">
              Cove
            </p>
            
          
            <p className="text-[#52615A] mt-2">
              Technology Procurement & Commercial Advisory
            </p>
          </div>
        </div>

        <form className="flex flex-col gap-5">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2 text-sm">
              First name
              <input
                name="firstName"
                className={fieldClass}
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm">
              Last name
              <input
                name="lastName"
                className={fieldClass}
                required
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm">
            Work email
            <input
              type="email"
              name="email"
              className={fieldClass}
              required
            />
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2 text-sm">
              Company
              <input
                name="company"
                className={fieldClass}
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm">
              Job title
              <input
                name="jobTitle"
                className={fieldClass}
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm">
            How can we help?
            <select
              name="service"
              className={fieldClass}
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Strategic sourcing</option>
              <option>Commercial negotiations</option>
              <option>Technology spend optimization</option>
              <option>Contract and renewal advisory</option>
              <option>General consultation</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm">
            Tell us about your requirements
            <textarea
              name="message"
              rows={5}
              className={fieldClass}
              placeholder="Upcoming renewals, purchasing requirements or business objectives..."
              required
            />
          </label>

          <button
            type="button"
            disabled
            className="bg-[#29463D] text-white px-6 py-4 rounded-sm text-left opacity-70"
          >
            Start the conversation ↗
          </button>

          <p className="text-xs text-[#52615A]">
            Form preview — submission will be enabled shortly.
          </p>

        </form>

      </div>
    </section>
  );
}
