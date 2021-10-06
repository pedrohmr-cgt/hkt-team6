import React, { useState, createContext } from 'react';
import { node } from 'prop-types';

// import api from '../services/api';

export const GroupContext = createContext();

const mockData = [
  { id: 'groupA', name: 'Group A', members: [] },
  { id: 'groupB', name: 'Group B', members: [] },
  { id: 'groupC', name: 'Group C', members: [] },
];

export const GroupContextProvider = ({ children }) => {
  const [groups, setGroups] = useState(mockData);

  // setTimeout(() => {
  //   setGroups(mockData);
  // }, 3000);

  return (
    <GroupContext.Provider value={[groups, setGroups]}>
      {children}
    </GroupContext.Provider>
  );
};

GroupContextProvider.propTypes = {
  children: node.isRequired,
};
