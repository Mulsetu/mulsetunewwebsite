"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { bookingForm } from "@/data/booking";
import { services } from "@/data/services";

type FormState = "idle" | "sending" | "sent" | "error";

export default function BookCallForm() {
  const [status, setStatus] = useState<FormState>("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="book-form book-form--success" role="status">
        <span className="book-form__check" aria-hidden="true">
          <img src="/icons/check.svg" alt="" width={20} height={24} />
        </span>
        <h2 className="book-form__success-title">{bookingForm.successTitle}</h2>
        <p className="book-form__success-copy">{bookingForm.successCopy}</p>
        <p className="book-card__eyebrow">{bookingForm.successNextTitle}</p>
        <ol className="book-form__next">
          {bookingForm.successNext.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ol>
        <div className="book-form__success-actions">
          <Button href="/" size="sm">
            {bookingForm.successHome}
          </Button>
          <Button href="/services" variant="secondary" size="sm">
            {bookingForm.successServices}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="book-form" onSubmit={onSubmit} aria-busy={status === "sending"}>
      {status === "error" ? (
        <p className="book-form__error" role="alert">
          {bookingForm.errorCopy}
        </p>
      ) : null}

      <div className="book-form__row">
        <label className="book-field">
          <span>
            {bookingForm.name.label} <em>*</em>
          </span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={bookingForm.name.placeholder}
          />
        </label>
        <label className="book-field">
          <span>{bookingForm.company.label}</span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={bookingForm.company.placeholder}
          />
        </label>
      </div>

      <div className="book-form__row">
        <label className="book-field">
          <span>
            {bookingForm.email.label} <em>*</em>
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={bookingForm.email.placeholder}
          />
        </label>
        <label className="book-field">
          <span>{bookingForm.phone.label}</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={bookingForm.phone.placeholder}
          />
        </label>
      </div>

      <label className="book-field">
        <span>{bookingForm.service.label}</span>
        <select name="service" defaultValue="">
          <option value="" disabled>
            {bookingForm.service.placeholder}
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.navLabel}
            </option>
          ))}
        </select>
      </label>

      <label className="book-field">
        <span>
          {bookingForm.message.label} <em>*</em>
        </span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder={bookingForm.message.placeholder}
        />
      </label>

      <Button
        type="submit"
        className="btn--block"
        icon="/icons/arrow.svg"
        disabled={status === "sending"}
      >
        {status === "sending" ? bookingForm.sending : bookingForm.submit}
      </Button>
    </form>
  );
}
