export interface ICity {
  id: number;
  name: string;
  alias: string;
  city_type_title: string;
  city_type_short_title: string;
  district_id: number;
  district_name: string;
  state_id: number;
  state_name: string;
  country_id: string;
  country_name: string;
  koatuu_code: string;
}

export interface ICityByNameProps {
  name: string;
  size?: number;
}
