import Card from "../../components/Card";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const FAQ = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleFAQ = () => {
    setShowAnswer(prev => !prev);
  };

  return (
    <Card 
      className={`faq ${showAnswer ? "active" : ""}`} 
      onClick={toggleFAQ}
    >
      <div className="faq__header">
        <h5 className="faq__question">{faq.question}</h5>
        <button 
          className="faq__icon" 
          onClick={(e) => {
            e.stopPropagation();
            setShowAnswer(false);
          }}
          aria-label="Toggle Answer"
        >
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showAnswer && <p className="faq__answer">{faq.answer}</p>}
    </Card>
  );
};

export default FAQ;
