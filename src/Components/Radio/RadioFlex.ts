import { Radio } from "."
import { Box } from "../../Lib/Box"

export const RadioFlex = () => {
    return Box({
        element:"Div",
        attr:{
            class:"flex justify-between m-y-2 px-3"
        },
        children:[Radio({label:"Sim" , id:"sim"}),Radio({label:"Device"})],
    })
}