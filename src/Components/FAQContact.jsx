import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQContact = () => {
  const [question, setQuestion] = useState("");
  const companyEmail = "info@klobtech.com"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedQuestion = encodeURIComponent(question);
    window.location.href = `mailto:${companyEmail}?subject=FAQ Question&body=${encodedQuestion}`;
    setQuestion(""); 
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full bg-white p-12 shadow-xl"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-6xl font-bold text-center text-gray-800">
            Didn't Find Your Answer?
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="flex justify-center">
            <textarea
              placeholder="Type your question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={4}
              className="w-full max-w-4xl p-8 text-3xl border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#099381] focus:border-transparent resize-y min-h-[200px]"
              required
            />
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#099381" }}
              transition={{ duration: 0.2 }}
              type="submit"
              className="bg-[#25ccb6] text-white px-12 py-8 rounded-2xl text-3xl font-medium flex items-center justify-center gap-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Question
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default FAQContact;