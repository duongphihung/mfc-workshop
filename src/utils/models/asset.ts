import { Location, ObjectBase, ObjectWithCreatedAndDes } from "./common"

export interface AssetInterface extends ObjectWithCreatedAndDes {
    code: string
    type: string
    active: boolean
    location: Location
    other_information: string
    asset_parent: ObjectBase
}

export interface AssetProfile extends ObjectWithCreatedAndDes {
    additional_info: string
}

export interface AssetPayload {
    name: string
    code: string
    description: string
    id?: string
    area_parent_id?: string
    type?: string
    active?: boolean
    archive?: boolean
    upload?: string
}