export const validateFieldes = (...field:string[]):boolean => {
    return field.every((field) => !!field.toString())
}