import { Box } from "../../Lib"
import { Button,userProfile,RadioFlex,Textfield} from "../../Components"
import { validateFieldes } from "../../Lib/ValidateFieldes"


export const Form = ()=> {


    const contactForm = {
        contactName:"",
        phoneNumber:"",
        storage:"",
    }
    
    const handelCreateContact = (event:Event) => {
        event.preventDefault();
        const element = document.querySelector<HTMLInputElement>("#sim")
        element?.checked ? contactForm.storage="sim": contactForm.storage="device"
        validateFieldes(contactForm.contactName,contactForm.phoneNumber)?null:alert("fill all fieldes")
        console.log(contactForm)
        
        
    }

    return [
        Box({
            element:"Div",
            attr:{
                class:"flex justify-center mb-3 "
            },
            children:userProfile(),
        }),
        Box({
        element:"form",
        attr:{
            class:"flex flex-col gap-y-3",
            onsubmit:handelCreateContact,
        },
        children:[
            
            Textfield({label:"Contact Name",
            value:contactForm.contactName,
            onkeyup:(e:Event)=>{
                contactForm.contactName=((e.target as HTMLInputElement) .value)
            }
            
        }),
            Textfield({label:"Phone Number",
            value:contactForm.phoneNumber,
            onkeyup:(e:Event)=>{
                contactForm.phoneNumber=((e.target as HTMLInputElement).value)
            }
        }),
            RadioFlex(),
            Button({children:"Submit",attr:{type:"submit",}}),
        ]
    }),
    ]
}

