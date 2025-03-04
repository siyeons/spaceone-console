export interface ReferenceItem<Data = Record<string, any>> {
    key?: string;
    label?: string;
    name?: string;
    color?: string;
    icon?: string;
    linkTemplate?: string;
    continent?: {
        continent_code?: string;
        continent_label?: string;
        latitude?: number;
        longitude?: number;
    };
    latitude?: string;
    longitude?: string;
    data?: Data;
}

export type ReferenceMap<Item extends ReferenceItem = ReferenceItem> = Record<string, Item>;

export type ReferenceType =
    'projectGroup'|'project_group' // supports both camel case and snake case
    |'project'
    |'cloudServiceType'|'cloud_service_type'
    |'provider'
    |'region'
    | 'serviceAccount'|'service_account'
    |'collector'
    |'protocol'
    |'plugin'
    |'secret'
    |'user'
    |'webhook';

interface ReferenceTypeInfo {
    type: ReferenceType;
    key: string; // project_id
    name: string; // Project
    referenceMap: ReferenceMap;
}
export type AllReferenceTypeInfo = Record<ReferenceType, ReferenceTypeInfo>;

export interface ReferenceState<Items = Record<string, any>> {
    items: Items;
}

export interface ReferenceRootState {
    isAllLoaded: boolean;
}

export interface ReferenceLoadOptions {
    lazyLoad?: boolean;
    force?: boolean;
}
