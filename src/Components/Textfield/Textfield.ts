import { Box } from "../../Lib/Box";

type TextFieldProps=
|{
    
    label?:HTMLElement | string,
    helperText?:HTMLElement | string,
    
} | any

export const Textfield = (
    props:TextFieldProps = {
        label:"",
        helperText:"",
    }
    
) => {
    const {label,helperText,...restprops}=props;
    const id =crypto.randomUUID();
    return Box({
        element:"Div",
        attr:{
            class:"flex flex-col"
        },
        children:[
            label && Box({
            element:"label",
            attr:{
                for:id
            },
            children:label,
        }),
        Box({
            element:"input",
            attr:{
                id,
                class:"block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                ...restprops
            },
            children:"",
        })
    ]
    })
}