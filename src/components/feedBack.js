import React, { useState } from 'react';
import './feedBack.css';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the feedback to local storage
    localStorage.setItem('userFeedback', feedback);

    // Clear the input box by setting feedback to an empty string
    setFeedback('');

    // Provide some user feedback after submission (you can customize this part)
    alert('Thank you for your feedback!');
  };
  // Retrieve user feedback details from local storage
const feedbackData = localStorage.getItem('feedbackData');

// Parse the JSON data (if it was stored as a JSON string)
const feedbackDetails = JSON.parse(feedbackData);

// Now, you can access the feedback details
console.log(feedbackDetails);


  return (
    <div className="feedback-container">
      <h2>Response Box</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="feedback-input"
          placeholder="Tell us if our delivery service meets your needs , please share your needs and preferences with us so that we can better serve you?.....type here and click submit or contact 8121784826"
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
    
  );
}

export default FeedbackForm;
