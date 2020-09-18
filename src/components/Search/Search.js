import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  SearchContainer,
  SearchBoxComponentContainer,
  SearchBoxContainer,
  SearchBoxTitleLabel,
  TabMenuContainer,
  TabMenuItem,
} from './Search.styled';
import Location from './Location/Location';
import CheckIn from './CheckIn/CheckIn';
import CheckOut from './CheckOut/CheckOut';

function Search(props) {
  const [selectedTab, setSelectedTab] = useState('a');
  const [hoveredSearch, setHoveredSearch] = useState(false);
  const [hasSubmit, setHasSubmit] = useState(false);
  const handleSubmit = () => {
    setHasSubmit(true);
  };
  return hasSubmit ? (
    <Redirect push to='/mapview' />
  ) : (
    <SearchContainer>
      <TabMenuContainer>
        <TabMenuItem
          isSelected={selectedTab === 'a'}
          onClick={() => setSelectedTab('a')}
        >
          Places to stay
        </TabMenuItem>
        <TabMenuItem
          isSelected={selectedTab === 'b'}
          onClick={() => setSelectedTab('b')}
        >
          Experiences
        </TabMenuItem>
        <TabMenuItem
          isSelected={selectedTab === 'c'}
          onClick={() => setSelectedTab('c')}
        >
          Online Experiences
        </TabMenuItem>
      </TabMenuContainer>
      <SearchBoxComponentContainer border={'0px'} onSubmit={handleSubmit}>
        <SearchBoxContainer
          isHovered={hoveredSearch === 1}
          onMouseEnter={() => {
            setHoveredSearch(1);
          }}
          onMouseLeave={() => {
            setHoveredSearch(false);
          }}
          neighborHovered={hoveredSearch === 2}
        >
          <SearchBoxTitleLabel htmlFor='location'>Location</SearchBoxTitleLabel>
          <Location id='location' placeholder={'Where are you going?'} />
        </SearchBoxContainer>
        <SearchBoxContainer
          isHovered={hoveredSearch === 2}
          onMouseEnter={() => {
            setHoveredSearch(2);
          }}
          onMouseLeave={() => {
            setHoveredSearch(false);
          }}
          neighborHovered={hoveredSearch === 1 || hoveredSearch === 3}
        >
          <SearchBoxTitleLabel htmlFor='checkin'>Check-in</SearchBoxTitleLabel>
          <CheckIn id='checkin' placeholder='Add dates' />
        </SearchBoxContainer>
        <SearchBoxContainer
          isHovered={hoveredSearch === 3}
          onMouseEnter={() => {
            setHoveredSearch(3);
          }}
          onMouseLeave={() => {
            setHoveredSearch(false);
          }}
          neighborHovered={hoveredSearch === 2 || hoveredSearch === 4}
        >
          <SearchBoxTitleLabel htmlFor='checkout'>
            Check-out
          </SearchBoxTitleLabel>
          <CheckOut id='checkout' placeholder='Add dates' />
        </SearchBoxContainer>

        <SearchBoxContainer
          isHovered={hoveredSearch === 4}
          onMouseEnter={() => {
            setHoveredSearch(4);
          }}
          onMouseLeave={() => {
            setHoveredSearch(false);
          }}
          neighborHovered={hoveredSearch === 3}
        >
          <SearchBoxTitleLabel>Guests</SearchBoxTitleLabel>
        </SearchBoxContainer>
      </SearchBoxComponentContainer>
    </SearchContainer>
  );
}

export default Search;
