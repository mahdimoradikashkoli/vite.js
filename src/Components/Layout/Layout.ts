import { layoutProps } from "."
import { Box } from "../../Lib/Box"

export const Layout =(props:layoutProps) => {
    return Box({
        element:"Div",
        attr:{
            class:"max-w-lg bg-slate-400 mx-auto p-3 rounded-lg mt-6"
        },
        children:props.children,
    })
    
}


//<Div class="max-w-xl bg-slate-400 text-red-400 justify-center">