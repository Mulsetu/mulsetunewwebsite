export const bookingPage = {
  email: "founder@mulsetu.com",
  emailHref: "mailto:founder@mulsetu.com",
  callNote: "30-min free strategy session",
  reachTitle: "Ways to Reach Us",
  expectTitle: "What to expect",
  expect: [
    "Reply within 4 business hours",
    "Free 30-minute strategy session",
    "Clear technology roadmap proposal",
    "No-obligation, no sales pressure",
  ],
};

export const bookingForm = {
  name: { label: "Full name", placeholder: "Your name", required: true },
  company: { label: "Company name", placeholder: "Your company" },
  email: { label: "Email", placeholder: "your@email.com", required: true },
  phone: { label: "Phone", placeholder: "+1 555 000 0000" },
  service: { label: "Service interested in", placeholder: "Select a service..." },
  message: {
    label: "Tell us more",
    placeholder:
      "Describe your project, what you're trying to solve, or what you need help with...",
    required: true,
  },
  submit: "Send Message",
  sending: "Sending…",
  successTitle: "Message sent successfully",
  successCopy:
    "Thanks for reaching out to Mulsetu. We’ve received your enquiry and will get back to you within 4 business hours.",
  successNextTitle: "What happens next",
  successNext: [
    "We review your requirements",
    "We contact you within 4 business hours",
    "We arrange your free 30-minute strategy session",
  ],
  successHome: "Back to Home",
  successServices: "Explore Our Services",
  errorCopy:
    "We couldn't send your message. Please try again, or email founder@mulsetu.com.",
};
