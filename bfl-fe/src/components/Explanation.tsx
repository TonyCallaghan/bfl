import React from "react";
import "../styles/explanation.css";

const Explanation = () => {
  return (
    <section
      id="explanation"
      className="h-screen w-screen bg-primary flex flex-col justify-center items-center text-center px-6"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        What is Brute Force Learning?
      </h2>
      <p className="text-lg md:text-xl text-white max-w-3xl leading-relaxed">
        Brute Force Learning is a learning philosophy that emphasizes intense repetition, direct testing,
        and consistent review. Instead of passive reading or endless tutorials, you’ll actively engage
        with challenges, push through failure, and develop mastery through real mental reps.
      </p>
    </section>
  );
};

export default Explanation;
