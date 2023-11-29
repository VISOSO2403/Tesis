import React, {useContext, useEffect, useRef} from 'react';
import MapView, {Marker, Polygon, Polyline} from 'react-native-maps';

import useLocation from '../hooks/location/useLocation';
import {ThemeContext} from '../context/theme/ThemeContext';
import LoadingComponent from './LoadingComponent';
import FabComponent from './FabComponent';

interface Props {
  // markers?: Marker[];
}

const MapComponent = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    stopFollowUserLocation,
    userLocation,
  } = useLocation();

  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);

  useEffect(() => {
    followUserLocation();

    return () => {
      // Cancela el seguimiento
      stopFollowUserLocation();
    };
  }, []);

  useEffect(() => {
    if (!following.current) return;

    const {latitude, longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
      pitch: 20,
    });
  }, [userLocation]);

  const centerPosition = async () => {
    const {latitude, longitude} = await getCurrentLocation();

    following.current = true;

    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
      zoom: 18,
    });
  };

  if (!hasLocation) {
    return <LoadingComponent size={30} />;
  }

  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        style={{flex: 1}}
        // provider={PROVIDER_GOOGLE} Solo para usar google maps en ambos dispositivos
        showsUserLocation
        customMapStyle={undefined} //Cambia el estilo del mapa
        showsMyLocationButton={false}
        showsCompass={false}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
        onTouchStart={() => (following.current = false)}>
        {/* Area para marcadores  */}

        {/* Area para delimitaciones de zonas  */}

        <Polyline
          coordinates={[
            {latitude: 19.084485, longitude: -104.308748},
            {latitude: 19.086942, longitude: -104.297518},
            {latitude: 19.087548, longitude: -104.29797},
            {latitude: 19.085104, longitude: -104.309132},
            {latitude: 19.084485, longitude: -104.308748},
          ]}
          strokeWidth={3}
        />

        <Polygon
          coordinates={[
            {latitude: 19.127122, longitude: -104.400344},
            {latitude: 19.124233, longitude: -104.396674},
            {latitude: 19.122155, longitude: -104.40015},
            {latitude: 19.124699, longitude: -104.40382},
          ]}
          fillColor="rgba(69, 242, 63, 0.35)"
        />
      </MapView>

      <FabComponent
        iconName="locate"
        iconSize={30}
        styles={{bottom: 20, right: 20}}
        onPress={centerPosition}
      />
    </>
  );
};

export default MapComponent;
