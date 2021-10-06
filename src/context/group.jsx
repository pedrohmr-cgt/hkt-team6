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
  const [groups, setGroups] = useState(null);
  const [selected, setSelected] = useState(null);

  setTimeout(() => {
    setGroups(mockData);
    setSelected(mockData[0]);
  }, 1000);

  const selectItem = id => {
    setSelected(groups.find(group => group.id === id));
  };

  return (
    <GroupContext.Provider value={[groups, selected, selectItem]}>
      {children}
    </GroupContext.Provider>
  );
};

GroupContextProvider.propTypes = {
  children: node.isRequired,
};
