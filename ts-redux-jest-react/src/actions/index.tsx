import * as constants from '../constants'

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
    // export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;
}
export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}
// 提供给mapDispatchToProps, dispatch: Dispatch<actions.EnthusiasmAction>
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;
// IncrementEnthusiasm在使用dispatch(actions.incrementEnthusiasm()返回数据的类型
export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM// {type: "INCREMENT_ENTHUSIASM"}
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}