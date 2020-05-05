import ISOfrenchNames from '../../Data/frenchNameFromIso.json';

const getFrenchNameFromIso = iso => (
  ISOfrenchNames[iso]
);

export default getFrenchNameFromIso;
