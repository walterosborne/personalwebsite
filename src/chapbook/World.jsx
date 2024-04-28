import Canvas from "./Canvas";
import chairs from './Images/chairrow.png'
import lechall from './Images/Hall Resized.png'
import doors from './Images/Doors.png'
import sf from './Images/sftall.png'
import target from './Images/target.png'
import { useState } from "react";


function World() {

    const scrollToTop = () => {
        console.log('here')
        document.getElementById("scroller").scroll(0, 2000)
    }

    let [height, setHeight] = useState(864);
    let [width, setWidth] = useState(1536);

    let gravity = .25
    let flying = false

    function createImage(image) {

        const img = new Image()
        img.src = image
        return img

    }

    class Player {
        constructor() {
            this.position = {
                x: 10,
                y: .3 * height
            }
            this.velocity = {
                x: 0,
                y: 1
            }
            this.width = 30
            this.height = 30
        }

        draw = (context) => {
            context.fillStyle = 'red'
            context.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update(context) {
            this.draw(context)
            this.position.x += this.velocity.x
            if ((this.position.y + this.height + this.velocity.y) < height) {
                this.position.y += this.velocity.y
                this.velocity.y += gravity
            } else {
                this.position.y = height - this.height
                this.velocity.y = 0
            }

            if (keys.right.pressed && player.position.x < (.9 * width)) {
                player.velocity.x = 5
            }
            else if (keys.left.pressed && player.position.x > (.1 * width)) {
                player.velocity.x = -5
            }
            else {
                //Moves platforms
                if (keys.right.pressed) {
                    environment.platforms.forEach(platform => { platform.position.x -= 5 })
                } else if (keys.left.pressed) {
                    environment.platforms.forEach(platform => { platform.position.x += 5 })
                }
                player.velocity.x = 0
            }
            if (flying) {
                if (gravity > 0) {
                    gravity = -.25
                    player.velocity.y = -1
                }
                if (environment.genobjs[0].position.y < -30) {
                    environment.platforms.forEach(platform => { platform.position.y += 3 })
                    environment.genobjs.forEach(genobj => { genobj.position.y += 3 })
                }
                else {
                    flying = false
                    window.open("https://docs.google.com/document/d/1zELrjcJs1G8CG7kHPOLHFT6P0BLDevqCPgjGYIloHv8/edit?usp=sharing", "_blank")
                    setenv(classroom)
                }
            }
            //The following keeps player on platforms

            environment.platforms.forEach(platform => {
                if (platform.border == 'top') {
                    if ((player.position.y + player.height <= platform.position.y)
                        && (player.position.y + player.height + player.velocity.y >= platform.position.y)
                        && (player.position.x + player.width >= platform.position.x)
                        && (player.position.x <= platform.position.x + platform.width)
                        && (!keys.down.pressed)) {
                        player.velocity.y = 0
                    }
                }
                if (platform.border == 'bottom') {
                    if ((player.position.y + player.height <= (platform.position.y + platform.height))
                        && (player.position.y + player.height + player.velocity.y >= (platform.position.y + platform.height))
                        && (player.position.x + player.width >= platform.position.x)
                        && (player.position.x <= platform.position.x + platform.width)
                        && (!keys.down.pressed)) {
                        player.velocity.y = 0
                    }
                }
            })

        }
    }

    class Platform {
        constructor({ x, y, image, border }) {

            this.position = {
                x,
                y,
            }
            this.image = image
            this.width = image.width
            this.height = image.height
            this.border = border
        }
        draw = (context) => {
            context.drawImage(this.image, this.position.x, this.position.y)
        }
    }
    class GenericObject {
        constructor({ x, y, image }) {

            this.position = {
                x,
                y,
            }
            this.image = image
            this.width = image.width
            this.height = image.height
        }
        draw = (context) => {
            context.drawImage(this.image, this.position.x, this.position.y)
        }
    }

    const player = new Player();

    class Environment {
        constructor({ name, platforms, genobjs }) {
            this.name = name
            this.platforms = platforms
            this.genobjs = genobjs
        }
        draw = (context) => {
            context.drawImage(this.image, this.position.x, this.position.y)
        }
    }


    const classroom = new Environment({
        name: 'classroom',
        platforms: [
            new Platform({ x: 300, y: 720, image: createImage(chairs), border: 'top' }),
            new Platform({ x: 750, y: 580, image: createImage(chairs), border: 'top' }),
            new Platform({ x: 400, y: 450, image: createImage(chairs), border: 'top' }),
            new Platform({ x: 790, y: 165, image: createImage(doors), border: 'bottom' }),
        ], genobjs: [new GenericObject({ x: 0, y: 0, image: createImage(lechall) })]
    })
    const sanfran = new Environment({
        name: 'sanfran',
        platforms: [
            new Platform({ x: 400, y: 1460 - 1177, image: createImage(target), border: 'top' }),
            new Platform({ x: 585, y: 1350 - 1177, image: createImage(target), border: 'top' }),
            new Platform({ x: 910, y: 1355 - 1177, image: createImage(target), border: 'top' }),
            new Platform({ x: 470, y: 1890 - 1177, image: createImage(target), border: 'top' }),
            new Platform({ x: 600, y: 1650 - 1177, image: createImage(target), border: 'top' }),
            new Platform({ x: 880, y: 1820 - 1177, image: createImage(target), border: 'top' })],
        genobjs: [new GenericObject({ x: 0, y: -1177, image: createImage(sf) })]
    })

    let [environment, setenv] = useState(classroom);

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        },
        down: {
            pressed: false
        },
        up: {
            pressed: false
        }
    }

    window.addEventListener('keydown', ({ key }) => {
        //console.log(keyCode)
        switch (key) {
            case "a":
            case "A":
                keys.left.pressed = true;
                break
            case "w":
            case "W":
                //console.log('up')
                if (player.velocity.y == 0) {
                    player.velocity.y -= 10
                }
                keys.up.pressed = true;
                break
            case "s":
            case "S":
                keys.down.pressed = true;
                break
            case "d":
            case "D":
                keys.right.pressed = true;
                break
            case "g":
                if (environment.name != 'sanfran') {
                    console.log('space')
                    setenv(sanfran)
                    environment = sanfran
                }
                console.log(player.position.y)
                if ((player.position.y == 147.75) /*&&
            ((900 - createImage(target).width) < player.position.x) && ((900 + createImage(target).width) > player.position.x)*/) {
                    player.velocity.y = 0
                    flying = true
                }
                break

        }
    })
    window.addEventListener('keyup', ({ key }) => {
        //console.log(keyCode)
        switch (key) {
            case "a":
            case "A":
                keys.left.pressed = false;
                break
            case "w":
            case "W":
                keys.up.pressed = false;
                break
            case "s":
            case "S":
                keys.down.pressed = false;
                break
            case "d":
            case "D":
                keys.right.pressed = false;
                break
            case 32:

                break
        }
    })


    return (
        <div id="scroller" style={{ padding: 0, margin: 0, backgroundColor: 'black', height: Math.max(innerHeight, height), display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
            <Canvas player={player} environment={environment} width={width} height={height} padding={0} margin={0} style={{ backgroundColor: 'white' }} />
        </div >
    )

}
export default World;