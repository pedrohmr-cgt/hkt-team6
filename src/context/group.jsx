import React, { useState, createContext } from 'react';
import { node } from 'prop-types';

export const GroupContext = createContext();

export const GroupContextProvider = ({ children }) => {
  const [groups, setGroups] = useState(['Group A', 'Group B', 'Group C']);

  return (
    <GroupContext.Provider value={[groups, setGroups]}>
      {children}
    </GroupContext.Provider>
  );
};

GroupContextProvider.propTypes = {
  children: node.isRequired,
};
