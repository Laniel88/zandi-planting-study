import {UserInfoDto} from "./userInfo.dto"
import {FineFormula} from "../fineFormula";


export interface ConfigDto {
    subtitle: string;
    title: string;
    icon: string;
    globalStartDate: string;
    globalDueDate?: string;
    users: UserInfoDto[];
    fineFormula: FineFormula;
}
