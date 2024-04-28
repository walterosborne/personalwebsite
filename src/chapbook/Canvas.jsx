
import useCanvas from "./UseCanvas";
const Canvas = props => {

    const { player, environment, ...rest } = props;

    //Sets ret equal to the reference made in child component
    const ref = useCanvas(player, environment.platforms, environment.genobjs);

    //Assigns canvas' ref to ref so that ref.current will be the canvas element

    return <canvas ref={ref}{...rest} />;
}
export default Canvas

