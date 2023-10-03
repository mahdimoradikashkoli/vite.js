import { Box } from "../../Lib/Box"

type Radioprops={
    label?:HTMLElement | string,
    name?:string,
    id?:string
}

export const Radio = (
    props:Radioprops={
        label:"",
        id:""
    }
    ) => {
        const {label,name,id,...restprops}=props
    return Box({
        element:"Div",
        attr:{
            class:"flex items-center mb-4"
        },
        children:[Box({
            element:'input',
            attr:{
                ...restprops,
                type:"radio",
                name:"radio-1",
                id:"sim",
                class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            },
            children:"",
        }),
         Box({
            element:"label",
            attr:{
                class:"ml-2 text-sm font-medium text-black"
            },
            children:props.label,
        })
    ]
    })
}

//<Div class="text-black">

