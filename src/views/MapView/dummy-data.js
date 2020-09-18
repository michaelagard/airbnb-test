export default [
  {
    id: 1,
    title: 'Title1',
    position: {
      lat: 37.772,
      lng: -122.214,
    },
    draggable: true,
    onLoad: (marker) => {
      console.log('marker: ', marker);
    },
  },
  {
    id: 2,
    title: 'Title2',
    position: {
      lat: 37.78742,
      lng: -122.416266,
    },
    onLoad: (marker) => {
      console.log('marker: ', marker);
    },
  },
  {
    id: 3,
    title: 'Title3',
    position: {
      lat: 37.777024,
      lng: -122.429165,
    },
    onLoad: (marker) => {
      console.log('marker: ', marker);
    },
  },
  {
    id: 4,
    title: 'Title4',
    position: {
      lat: 37.753955,
      lng: -122.448404,
    },
    onLoad: (marker) => {
      console.log('marker: ', marker);
    },
  },
  {
    id: 5,
    title: 'Title5',
    position: {
      lat: 37.756398,
      lng: -122.407865,
    },
    onLoad: (marker) => {
      console.log('marker: ', marker);
    },
  },
];
