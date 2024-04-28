import { useEffect, useRef } from "react"
const useCanvas = (player, platforms, genobjs) => {


    //Return this will allow the canvas element from parent component to be accessed
    const ref = useRef();

    //The following allows for side effects by running the following every render of the canvas component Canvas
    useEffect(() => {

        const canvas = ref.current;
        const context = canvas.getContext('2d');
        let animationID

        const renderer = () => {
            context.clearRect(0, 0, 3000, 3000)
            genobjs.forEach(genobj => { genobj.draw(context) })
            platforms.forEach(platform => { platform.draw(context) })
            player.update(context)

            //Returns long that represents which animation frame we're in;
            //The argument tells the window to return to this function for next repaint
            animationID = window.requestAnimationFrame(renderer);
        }

        renderer()

        //Why is this needed? Don't know
        return () => cancelAnimationFrame(animationID)

    })



    return ref;
}
export default useCanvas

