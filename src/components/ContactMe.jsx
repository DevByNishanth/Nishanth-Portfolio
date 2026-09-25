import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HorizontalLine from "./HorizontalLine";
import { Mail, Phone } from "lucide-react";

// ============================================================
// Theme
// ============================================================

const ACCENT = "#871304";
const ACCENT_SOFT = "#e0523a";

// ============================================================
// Heading animation
// ============================================================

const lineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const charVariants = {
  hidden: {
    y: "110%",
    rotate: 6,
  },
  visible: {
    y: "0%",
    rotate: 0,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 110,
    },
  },
};

// Animated heading line
const AnimatedLine = ({
  text,
  className = "",
  size = "text-5xl md:text-[80px]",
  delay = 0,
}) => (
  <motion.h1
    className={`font-medium -tracking-normal ${size} ${className}`}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.08,
          delayChildren: delay,
        },
      },
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.6 }}
    aria-label={text}
  >
    {text.split(" ").map((word, wi, arr) => (
      <React.Fragment key={wi}>
        <motion.span
          variants={wordVariants}
          className="inline-block whitespace-nowrap"
          aria-hidden="true"
        >
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className="inline-block overflow-hidden align-top"
            >
              <motion.span
                variants={charVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            </span>
          ))}
        </motion.span>

        {wi < arr.length - 1 && " "}
      </React.Fragment>
    ))}
  </motion.h1>
);

// ============================================================
// Shared animation variants
// ============================================================

const formVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const baseLineVariants = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ============================================================
// Underline
// ============================================================

const Underline = ({ active, error }) => (
  <div className="relative h-px w-full">
    <motion.span
      variants={baseLineVariants}
      className="absolute inset-0 origin-left bg-gray-500"
    />

    <motion.span
      className="absolute inset-0 origin-left"
      style={{
        backgroundColor: error ? "#ef4444" : ACCENT_SOFT,
      }}
      initial={false}
      animate={{
        scaleX: active || error ? 1 : 0,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  </div>
);

// ============================================================
// Error message
// ============================================================

const ErrorText = ({ message }) => (
  <AnimatePresence>
    {message && (
      <motion.p
        initial={{
          opacity: 0,
          y: -6,
          height: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
          height: "auto",
        }}
        exit={{
          opacity: 0,
          y: -6,
          height: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="mt-2 text-xs text-red-400"
      >
        {message}
      </motion.p>
    )}
  </AnimatePresence>
);

// ============================================================
// Text field
// ============================================================

const TextField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  multiline = false,
  autoComplete,
}) => {
  const [focused, setFocused] = useState(false);

  const handleInput = (e) => {
    if (multiline) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const shared = {
    id: name,
    name,
    value,
    onChange,
    onInput: handleInput,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    autoComplete,
    className:
      "w-full bg-transparent pb-3 pt-2 text-base text-white outline-none " +
      "autofill:shadow-[inset_0_0_0_1000px_#020b16] autofill:[-webkit-text-fill-color:white]",
  };

  return (
    <motion.div variants={itemVariants} className="relative">
      <label
        htmlFor={name}
        className="block text-sm transition-colors duration-300"
        style={{
          color: focused ? ACCENT_SOFT : "#9ca3af",
        }}
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          {...shared}
          rows={1}
          className={`${shared.className} min-h-[56px] resize-none`}
        />
      ) : (
        <input {...shared} type={type} />
      )}

      <Underline active={focused} error={!!error} />

      <ErrorText message={error} />
    </motion.div>
  );
};

// ============================================================
// Custom select
// ============================================================

const serviceOptions = [
  "Web Development",
  "Website re-design",
  "UI / UX Design",
  "Landing page",
  "Ecommerce site",
  "Booking site",
  "Billing software",
  "Admin Dashboard",
  "Custom software development",
  "Other",
];

const SelectField = ({ label, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <motion.div
      variants={itemVariants}
      ref={wrapperRef}
      className="relative z-20"
    >
      <span
        className="block text-sm transition-colors duration-300"
        style={{
          color: open ? ACCENT_SOFT : "#9ca3af",
        }}
      >
        {label}
      </span>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between pb-3 pt-2 text-left text-base outline-none"
      >
        <span className={value ? "text-white" : "text-transparent"}>
          {value || "Select"}
        </span>

        <motion.svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white"
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <path
            d="M5 9l7 7 7-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <Underline active={open} />

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.97,
            }}
            transition={{
              duration: 0.22,
              ease: "easeOut",
            }}
            className="custom-scrollbar absolute left-0 right-0 top-full mt-3 max-h-[200px] origin-top overflow-auto rounded-xl border border-white/10 bg-[#06172a] py-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {serviceOptions.map((option, i) => (
              <motion.li
                key={option}
                role="option"
                aria-selected={value === option}
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: i * 0.04,
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className="group flex w-full items-center justify-between px-5 py-3 text-left text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {option}
                  </span>

                  {value === option && (
                    <span style={{ color: ACCENT_SOFT }}>
                      ✓
                    </span>
                  )}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ============================================================
// Submit button
// ============================================================

const SubmitButton = ({ status }) => (
  <motion.button
    variants={itemVariants}
    type="submit"
    disabled={status !== "idle"}
    whileTap={{ scale: 0.97 }}
    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border px-8 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-white disabled:cursor-not-allowed"
    style={{
      borderColor: ACCENT,
    }}
  >
    <span
      className="absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"
      style={{
        backgroundColor: ACCENT,
      }}
    />

    <span className="relative flex items-center gap-3">
      <AnimatePresence mode="wait" initial={false}>
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className="flex items-center gap-3"
          >
            Send message

            <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </motion.span>
        )}

        {status === "sending" && (
          <motion.span
            key="sending"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className="flex items-center gap-3"
          >
            <motion.span
              className="block h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            Sending
          </motion.span>
        )}

        {status === "sent" && (
          <motion.span
            key="sent"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className="flex items-center gap-3"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
            >
              <motion.path
                d="M5 12.5l4.5 4.5L19 7.5"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 0.4,
                }}
              />
            </svg>

            Message sent
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  </motion.button>
);

// ============================================================
// Contact form
// ============================================================

const emptyForm = {
  firstName: "",
  lastName: "",
  service: "",
  email: "",
  newsletter: false,
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const setField = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleChange = (e) => {
    setField(e.target.name, e.target.value);
  };

  const validate = () => {
    const next = {};

    if (!form.firstName.trim()) {
      next.firstName = "Please enter your first name";
    }

    if (!form.email.trim()) {
      next.email = "Please enter your email";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Please enter a valid email address";
    }

    if (!form.service.trim()) {
      next.service = "Please select a service";
    }

    if (!form.message.trim()) {
      next.message = "Please describe your project";
    }

    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const found = validate();

    setErrors(found);

    if (Object.keys(found).length) {
      return;
    }

    setStatus("sending");

    try {
      // Map frontend field names to your backend field names
      const payload = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        service: form.service,
        clientsEmail: form.email.trim(),
        projectDescription: form.message.trim(),
      };

      const response = await fetch(
        "https://portfoliobackend-cojn.onrender.com/sendMail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Failed to send message"
        );
      }

      console.log("Email API response:", data);

      setStatus("sent");

      // Reset the form after successful submission
      setTimeout(() => {
        setForm(emptyForm);
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("idle");

      alert(
        error.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="flex flex-col gap-9"
    >
      {/* Name */}
      <div>
        <motion.p
          variants={itemVariants}
          className="mb-4 text-sm font-semibold text-white"
        >
          Name (required)
        </motion.p>

        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-8">
          <TextField
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            error={errors.firstName}
            autoComplete="given-name"
          />

          <TextField
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            autoComplete="family-name"
          />
        </div>
      </div>

      {/* Service */}
      <SelectField
        label="Service"
        value={form.service}
        onChange={(v) => setField("service", v)}
      />

      {/* Email */}
      <div className="flex flex-col gap-5">
        <TextField
          label="Email (required)"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />
      </div>

      {/* Project description */}
      <TextField
        label="Project description"
        name="message"
        value={form.message}
        onChange={handleChange}
        error={errors.message}
        multiline
      />

      {/* Submit */}
      <div>
        <SubmitButton status={status} />
      </div>
    </motion.form>
  );
};

// ============================================================
// Contact row
// ============================================================

const ContactRow = ({
  icon: Icon,
  text,
  href,
  className = "",
}) => (
  <motion.a
    href={href}
    variants={itemVariants}
    className={`group relative flex w-full items-center gap-4 pb-5 text-white ${className}`}
  >
    <Icon className="shrink-0 transition-colors duration-300 group-hover:text-[#e0523a]" />

    <p className="break-all text-sm transition-transform duration-300 group-hover:translate-x-1.5 md:text-base">
      {text}
    </p>

    <motion.span
      variants={baseLineVariants}
      className="absolute bottom-0 left-0 h-px w-full origin-left bg-gray-400"
    />
  </motion.a>
);

// ============================================================
// ContactMe
// ============================================================

const ContactMe = () => {
  return (
    <>
      <div
        id="contact"
        className="main-container mt-3 bg-[#020b16] px-4 py-5 sm:px-6 md:px-8 lg:px-14"
      >
        <div className="big-title relative pb-5 text-white">
          <AnimatedLine
            text="LET'S TALK ABOUT"
            size="text-4xl sm:text-5xl md:text-[80px]"
            className="leading-tight"
          />

          <AnimatedLine
            text="YOUR PROJECT"
            className="-mt-1 leading-tight sm:-mt-2 md:-mt-8"
            size="text-4xl sm:text-5xl md:text-[80px]"
          />

          <motion.div
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-gray-400"
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.6,
            }}
            transition={{
              duration: 1.2,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>

        <div className="contact-form-section mt-8 flex flex-col gap-10 md:mt-5 md:flex-row md:gap-4">
          <div className="first-container w-full md:w-[40%]">
            <motion.header
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
            >
              <div className="heading flex items-center gap-2">
                <motion.div
                  variants={baseLineVariants}
                  className="origin-left"
                >
                  <HorizontalLine />
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="mb-2 text-xl font-medium text-[#871304]"
                >
                  Contact
                </motion.h1>
              </div>

              <AnimatedLine
                text="GET IN"
                size="text-4xl md:text-[50px]"
                className="text-white"
                delay={0.2}
              />

              <AnimatedLine
                text="TOUCH"
                size="text-4xl md:text-[50px]"
                className="text-white"
                delay={0.35}
              />

              <div className="mail-phn-container mt-4">
                <ContactRow
                  icon={Mail}
                  text="code.with.nishanth03@gmail.com"
                  href="mailto:code.with.nishanth03@gmail.com"
                />

                <ContactRow
                  icon={Phone}
                  text="+91 6369032375"
                  href="tel:+916369032375"
                  className="mt-6"
                />
              </div>
            </motion.header>
          </div>

          <div className="second-container flex-1 pb-10 pl-0 pt-0 md:pl-16 md:pt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;