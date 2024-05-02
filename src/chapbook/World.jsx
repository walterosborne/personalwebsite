import Canvas from "./Canvas";

function World() {



    if (innerHeight < 864 || innerWidth < 1536) {
        return (
            <div>
                <p>Please view this content on a screen at least 864x1536 pixels</p>
            </div>
        )
    } else {

        const ref = Canvas();
        return (
            <div id="scroller" style={{ height: '100vh', width: '100vw', padding: 0, margin: 0, backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                return <canvas ref={ref} height={864} width={1536} />;
            </div >)
    }


}
export default World;