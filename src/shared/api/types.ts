export interface IEntity {
  id: number;
  created: string;
  updated: string;
}

export interface ILocalizableEntity extends IEntity {
  lang_code: string;
}

export interface IActivatableFeature {
  name: string;
  enable: boolean;
}
