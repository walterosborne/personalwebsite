import Canvas from "./Canvas";

function World() {

    const ref = Canvas();

    return (
        <div id="scroller" style={{ height: '100vh', width: '100vw', padding: 0, margin: 0, backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
            return <canvas ref={ref} height={864} width={1536} />;
        </div >
    )

}
export default World;