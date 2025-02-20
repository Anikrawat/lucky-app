import React, { useState } from "react";
import "./Last.css";

const faqs = [
  {
    question: "What is an FAQ section?",
    answer:
      'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".',
  },
  {
    question: "Why do FAQs matter?",
    answer:
      "FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience..",
  },
  {
    question: "Where can I add my FAQs?",
    answer: "FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go..",
  },
];

const Lastone = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lastone;
