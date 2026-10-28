import {ReactNode} from "react"

interface GridContainerProps{
     children:ReactNode
}
export function GridContainer({children} : GridContainerProps){
    return(
        <div className="w-full max-w-container mx-auto px-3">{children}</div>
    )
}
