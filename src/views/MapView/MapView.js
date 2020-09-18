import React from 'react';
import styled from 'styled-components';
import dummyData from './dummy-data';
import Header from '../../components/Header/Header';
import GoogleMapView from '../../components/GoogleMapView/GoogleMapView';

const MapViewContainer = styled.div`
  display: flex;
  border: 1px solid yellow;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  margin: auto;
  width: 83%;
`;

const MapAndResultsContainer = styled.div`
  display: flex;
`;

const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
`;

const SearchResultsHeader = styled.h1``;

const SearchResultContainer = styled.div``;

const SearchResultHeader = styled.h2``;

function MapView() {
  return (
    <MapViewContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MapAndResultsContainer>
        <SearchResultsContainer>
          <SearchResultsHeader>Derp</SearchResultsHeader>
          {dummyData.map((data) => (
            <SearchResultContainer>
              <SearchResultHeader>{data.title}</SearchResultHeader>
              lat: {data.position.lat}
              lng: {data.position.lng}
            </SearchResultContainer>
          ))}
        </SearchResultsContainer>
        <GoogleMapView data={dummyData} />
      </MapAndResultsContainer>
    </MapViewContainer>
  );
}

export default MapView;
