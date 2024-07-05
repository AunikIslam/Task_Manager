export function getEnumSelector(pTargetEnum: any): { title: string; value: any }[] {
    return Object.keys(pTargetEnum).map(pKey => ({value: pKey, title: pTargetEnum[pKey]}));
}