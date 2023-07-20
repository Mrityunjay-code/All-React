import React from 'react';

const IteamList = ({ items }) => {
  if (items.length === 0) {
    return <p>No items found</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default IteamList;
