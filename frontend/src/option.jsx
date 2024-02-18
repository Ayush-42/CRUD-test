import React, { useEffect, useState } from 'react';
import './AutoCompleteEmails.css'; // Import your CSS file
import axios from "axios"

const AutoCompleteEmails = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestedEmails, setSuggestedEmails] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [isSubmit, setISSubmit] = useState(null)

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Simulate fetching suggested emails with images based on the input value
    const suggestions = fetchEmailSuggestions(value);
    setSuggestedEmails(suggestions);
  };

  const handleEmailClick = (email) => {
    setSelectedEmails((prevEmails) => [...prevEmails, email]);
    setInputValue('');
    setSuggestedEmails([]);
  };

  const handleRemoveEmail = (email) => {
    setSelectedEmails((prevEmails) => prevEmails.filter((e) => e.email !== email.email));
  };

  const fetchEmailSuggestions = (query) => {
    // Simulate fetching email suggestions with images from an API or a list
    const emailList = [
      { email: 'user1@example.com', image: 'https://lh4.googleusercontent.com/pzcL7G25jch7H0Vpgm9NvY_C47dcs2jBCJ0rcTApLLOhOBgQ1M7zLyq3qCAJT3HLkuPq_6CECXpVtCmK8-6PA0lXDNAtPTixHiZahoomXOmEfxzMFs-REzysEaJ5tPaRAH0wtFclD1HD_cHC9c-5-q4' },
      { email: 'user2@example.com', image: 'https://cdn.pixabay.com/photo/2017/01/28/13/23/color-circle-articles-2015356_640.png' },
      { email: 'user3@example.com', image: 'https://img.freepik.com/premium-vector/abstract-colorful-logo-design_650075-1506.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1705190400&semt=ais' },
    ];

    return emailList.filter((user) =>
      user.email.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSubmit = (e) => {
    setISSubmit(true) 
  }

  const submitFunction = async() => {
    try {
      const emails = selectedEmails?.map((item)=> item?.email)
      console.log(emails, '------------------emails')
      const response = await axios.post('http://localhost:5000/', {names:emails}); // Update the URL to match your backend route
      console.log(response, '-----------------response')
      if(response?.status === 201)
      setISSubmit(false)
;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  useEffect(() => {
    // Function to fetch posts
    if(isSubmit === true) 
    {
      submitFunction()
    }
  },[isSubmit])

    // Call the fetchPosts function

  return (
    <div className="auto-complete-emails">
      <div className="selected-emails">
        {selectedEmails.map((user) => (
          <div key={user.email} className="email-chip">
            <img src={user.image} alt={user.email} />
            {user.email}
            <span onClick={() => handleRemoveEmail(user)}>X</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
      <ul className="suggested-emails">
        {suggestedEmails.map((user) => (
          <li key={user.email} onClick={() => handleEmailClick(user)}>
            <img src={user.image} alt={user.email} />
            {user.email}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AutoCompleteEmails;
