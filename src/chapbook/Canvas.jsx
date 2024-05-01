import chairs from './Images/chairrow.png'
import lechall from './Images/Hall Resized.png'
import doors from './Images/Doors.png'
import sf from './Images/sftall2.png'
import target from './Images/target.png'
import greentarget from './Images/greentarget.png'
import lab from './Images/Lab.png'
import me from './Images/me.png'
import meright from './Images/merunleft.png'
import meleft from './Images/merunright.png'
import metal from './Images/metal.jpeg'
import intro from './Images/Intro.png'
import bacc from './Images/baccvat.png'
import shards from './Images/shards.png'
import santafevat from './Images/santafe.png'
import frenchtoastvat from './Images/frenchtoastvat.png'
import yard from './Images/yard.png'
import { useState, useEffect, useRef } from "react"


const Canvas = () => {


    function createImage(image) {
        const img = new Image()
        img.src = image
        return img
    }

    class MeImage {
        constructor(name, image) {
            this.name = name
            this.image = image
        }
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
            this.width = 107
            this.height = 291
        }
    }

    class Platform {
        constructor({ x, y, image, border, trigger }) {

            this.position = {
                x,
                y,
            }
            this.image = image
            this.width = image.width
            this.height = image.height
            this.border = border
            this.trigger = trigger
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
    }

    class Environment {
        constructor({ name, platforms, genobjs, background }) {
            this.name = name
            this.platforms = platforms
            this.genobjs = genobjs
            this.background = background
        }
        draw = (context) => {
            context.drawImage(this.image, this.position.x, this.position.y)
        }
    }

    const santafe = new Environment({
        name: 'santafe',
        platforms: [
            new Platform({
                x: 1300, y: -735, image: createImage(greentarget), border: 'top', trigger:
                    () => {
                        window.open("https://docs.google.com/document/d/1GWt_AhSbHuNmVhq-ARRjVe-kv4zXVDaPo2hFqK1zWsw/edit?usp=sharing", "_blank")
                        setenv(home)
                        player.position.x = 10
                        player.position.y = 700
                    }
            }),
            new Platform({ x: 800, y: -768, image: createImage(target), border: 'top', trigger: null }),
            new Platform({ x: 350, y: -795, image: createImage(target), border: 'top', trigger: null }),
            new Platform({ x: 185, y: -650, image: createImage(target), border: 'top', trigger: null }),
            new Platform({ x: 185, y: -460, image: createImage(target), border: 'top', trigger: null }),
            new Platform({ x: 185, y: -270, image: createImage(target), border: 'top', trigger: null }),
            new Platform({ x: 185, y: -80, image: createImage(target), border: 'top', trigger: null }),
            new Platform({ x: 185, y: 110, image: createImage(target), border: 'top', trigger: null }),
            new Platform({ x: 185, y: 300, image: createImage(target), border: 'top', trigger: null }),
            new Platform({ x: 185, y: 500, image: createImage(target), border: 'top', trigger: null }),
            new Platform({ x: 185, y: 680, image: createImage(target), border: 'top', trigger: null }),
        ], genobjs: [], background: [new GenericObject({ x: 0, y: -1164, image: createImage(yard) })]
    })
    const classroom = new Environment({
        name: 'classroom',
        platforms: [
            new Platform({ x: 300, y: 720, image: createImage(chairs), border: 'top', trigger: null }),
            new Platform({ x: 750, y: 580, image: createImage(chairs), border: 'top', trigger: null }),
            new Platform({ x: 400, y: 450, image: createImage(chairs), border: 'top', trigger: null }),
            new Platform({ x: 790, y: 165, image: createImage(doors), border: 'bottom', trigger: null }),
            new Platform({
                x: 845, y: 345, image: createImage(greentarget), border: 'top', trigger:
                    () => {
                        window.open("https://docs.google.com/document/d/1T8xD6tlW2CqC0c6QnUod2aph5lYthVo3sbtq_wiDJ5k/edit?usp=sharing", "_blank")
                        setenv(home)
                        player.position.x = 10
                        player.position.y = 700
                    }

            })
        ], genobjs: [], background: [new GenericObject({ x: 0, y: 0, image: createImage(lechall) })]
    })
    const sanfran = new Environment({
        name: 'sanfran',
        platforms: [
            new Platform({ x: 400, y: 1460 - 1207, image: createImage(target), border: 'top', trigger: null }),
            new Platform({ x: 585, y: 1350 - 1207, image: createImage(target), border: 'top', trigger: null }),
            new Platform({
                x: 910, y: 1355 - 1207, image: createImage(greentarget), border: 'top', trigger:
                    () => {
                        player.velocity.y = 0
                        setfly(true)
                    }

            }),
            new Platform({ x: 470, y: 1890 - 1207, image: createImage(target), border: 'top', trigger: null }),
            new Platform({ x: 580, y: 1640 - 1207, image: createImage(target), border: 'top', trigger: null }),
            new Platform({ x: 880, y: 1820 - 1207, image: createImage(target), border: 'top', trigger: null })]
        , genobjs: [], background: [new GenericObject({ x: 0, y: -1164, image: createImage(sf) })]
    })
    const home = new Environment({
        name: 'home',
        platforms: [
            //Floors
            new Platform({
                x: 200, y: 500, image: createImage(metal), border: 'mid', trigger:
                    () => {
                        if ((player.position.x > 395)
                            && (player.position.x < 480)) {
                            keys.g.pressed = false
                            window.open("https://walterosborne.com/frenchtoast", "_blank")
                            //player.position.x = 10
                            //player.position.x = .3 * height
                        }
                    }
            }),
            new Platform({
                x: 830, y: 500, image: createImage(metal), border: 'mid', trigger:
                    () => {
                        if ((player.position.x > 1027)
                            && (player.position.x < 1120)) {
                            setenv(classroom)
                            player.position.x = 10
                            player.position.y = 700
                        } else {
                            console.log(player.position.x)
                        }
                    }
            }),
            new Platform({
                x: 1035, y: 700, image: createImage(metal), border: 'mid', trigger: () => {
                    setenv(santafe)
                    player.position.x = 10
                    player.position.y = 700
                }
            }),
            new Platform({
                x: 500, y: 700, image: createImage(metal), border: 'mid', trigger: () => {

                    if ((player.position.x > 500)
                        && (player.position.x < 590)) {
                        setenv(sanfran)
                        player.position.x = 10
                        player.position.y = 700
                    }
                }
            }),
            //Vats
            new Platform({ x: 1130, y: 430, image: createImage(santafevat), border: 'top', trigger: null }),
            new Platform({ x: 600, y: 430, image: createImage(shards), border: 'top', trigger: null }),
            new Platform({ x: 200, y: 560 - 327, image: createImage(frenchtoastvat), border: 'top', trigger: null }),
            new Platform({ x: 840, y: 560 - 327, image: createImage(bacc), border: 'top', trigger: null })
        ],
        genobjs: [
            new GenericObject({
                x: (414),
                y: (525),
                image: createImage(greentarget)
            }),

            new GenericObject({
                x: 1050,
                y: 525,
                image: createImage(greentarget)
            }),
            new GenericObject({
                x: 1050,
                y: 725,
                image: createImage(greentarget)
            }),
            new GenericObject({
                x: 525,
                y: 725,
                image: createImage(greentarget)
            }),
            new GenericObject({
                x: 400,
                y: 0,
                image: createImage(intro)
            })],
        background: [new GenericObject({ x: 0, y: 0, image: createImage(lab) })]
    })

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
        },
        g: {
            pressed: false
        }
        ,
        k: {
            pressed: false
        },
        h: {
            pressed: false
        }
    }


    window.addEventListener('keydown', ({ key }) => {
        //console.log(keyCode)
        switch (key) {
            case "a":
            case "A":
            case "ArrowLeft":
                keys.left.pressed = true;
                break
            case "w":
            case "W":
            case "ArrowUp":
                //console.log('up')
                if (player.velocity.y == 0) {
                    player.velocity.y -= 10
                }
                keys.up.pressed = true;
                break
            case "s":
            case "S":
            case "ArrowDown":
                keys.down.pressed = true;
                break
            case "d":
            case "D":
            case "ArrowRight":
                keys.right.pressed = true;
                break
            case "g":
                keys.g.pressed = true
                break
            case "k":
                keys.k.pressed = true
                break
            case "h":
                keys.h.pressed = true
                break

        }
    })
    window.addEventListener('keyup', ({ key }) => {
        //console.log(keyCode)
        switch (key) {
            case "a":
            case "A":
            case "ArrowLeft":
                keys.left.pressed = false;
                break
            case "w":
            case "W":
            case "ArrowUp":
                keys.up.pressed = false;
                break
            case "s":
            case "S":
            case "ArrowDown":
                keys.down.pressed = false;
                break
            case "d":
            case "D":
            case "ArrowRight":
                keys.right.pressed = false;
                break
            case "g":
                keys.g.pressed = false;
                break
            case "k":
                keys.k.pressed = false;
                break
            case "h":
                keys.h.pressed = false;
                break
        }
    })


    let [height, setHeight] = useState(864);
    let [width, setWidth] = useState(1536);
    let [player, setPlayer] = useState(new Player());
    let [environment, setenv] = useState(home);
    let [meimg, setMeimg] = useState(me);
    let [flying, setfly] = useState(false);

    let gravity = .25


    //Return this will allow the canvas element from parent component to be accessed
    const ref = useRef();

    //The following allows for side effects by running the following every render of the canvas component Canvas
    useEffect(() => {

        const canvas = ref.current;
        const context = canvas.getContext('2d');
        let animationID

        const renderer = () => {

            context.clearRect(0, 0, 3000, 3000)
            environment.background.forEach(genobj => { context.drawImage(genobj.image, genobj.position.x, genobj.position.y) })
            environment.platforms.forEach(platform => { context.drawImage(platform.image, platform.position.x, platform.position.y) })
            environment.genobjs.forEach(genobj => { context.drawImage(genobj.image, genobj.position.x, genobj.position.y) })
            //context.fillStyle = 'red'
            //context.fillRect(player.position.x, player.position.y, player.width, player.height);
            context.drawImage(createImage(meimg), player.position.x, player.position.y)
            player.position.x += player.velocity.x
            if ((environment.name == 'santafe')
                && (environment.background[0].position.y != -1164)
                && ((player.position.y + player.height + player.velocity.y) > .8 * height)) {
                environment.background.forEach(background => { background.position.y -= 5 })
                environment.platforms.forEach(platform => { platform.position.y -= 5 })
                environment.genobjs.forEach(genobj => { genobj.position.y -= 5 })
            }
            if ((player.position.y + player.height + player.velocity.y) < height) {
                player.position.y += player.velocity.y
                player.velocity.y += gravity
            }
            else {
                player.position.y = height - player.height
                player.velocity.y = 0
            }
            if ((environment.name == 'santafe') && ((player.position.y + player.height + player.velocity.y) < .2 * height)) {
                environment.background.forEach(background => { background.position.y += 5 })
                environment.platforms.forEach(platform => { platform.position.y += 5 })
                environment.genobjs.forEach(genobj => { genobj.position.y += 5 })
                player.position.y += 5
            }
            //console.log((player.position.y + player.height + player.velocity.y))
            //console.log(.2 * height)
            if (keys.right.pressed && player.position.x < (width) - player.width) {
                player.velocity.x = 5
                // if (meimg != meleft) {setMeimg(meleft)}
            }
            else if (keys.left.pressed && player.position.x > 0) {
                player.velocity.x = -5
                // setMeimg(meright)
            }

            else {
                /*Moves platforms
                if (keys.right.pressed) {
                    environment.platforms.forEach(platform => { platform.position.x -= 5 })
                } else if (keys.left.pressed) {
                    environment.platforms.forEach(platform => { platform.position.x += 5 })
                }*/
                player.velocity.x = 0
            }


            if (flying) {
                if (gravity > 0) {
                    gravity = -.25
                    player.velocity.y = -1
                }
                if (environment.background[0].position.y < -30) {
                    environment.platforms.forEach(platform => { platform.position.y += 3 })
                    environment.background.forEach(genobj => { genobj.position.y += 3 })
                }
                else {
                    setfly(false)
                    window.open("https://docs.google.com/document/d/1zELrjcJs1G8CG7kHPOLHFT6P0BLDevqCPgjGYIloHv8/edit?usp=sharing", "_blank")
                    setenv(home)
                    player.position.x = 10
                    player.position.y = 700
                    player.velocity.y = 0
                }
            }

            environment.platforms.forEach(platform => {
                if (platform.border == 'top') {
                    if ((player.position.y + player.height <= platform.position.y)
                        && (player.position.y + player.height + player.velocity.y >= platform.position.y)
                        && (player.position.x + player.width >= platform.position.x)
                        && (player.position.x <= platform.position.x + platform.width)
                        && (!keys.down.pressed)) {
                        player.velocity.y = 0
                        if (platform.trigger && keys.g.pressed) {
                            console.log('triggered')
                            console.log(platform.trigger())
                        }
                    }
                }
                if (platform.border == 'bottom') {
                    if ((player.position.y + player.height <= (platform.position.y + platform.height))
                        && (player.position.y + player.height + player.velocity.y >= (platform.position.y + platform.height))
                        && (player.position.x + player.width >= platform.position.x)
                        && (player.position.x <= platform.position.x + platform.width)
                        && (!keys.down.pressed)) {
                        player.velocity.y = 0
                        if (platform.trigger && keys.g.pressed) {
                            console.log('triggered')
                            console.log(platform.trigger())
                        }
                    }
                }

                if (platform.border == 'mid') {
                    if ((player.position.y + player.height <= (platform.position.y + (platform.height / 2)))
                        && (player.position.y + player.height + player.velocity.y >= (platform.position.y + (platform.height / 2)))
                        && (player.position.x + player.width >= platform.position.x)
                        && (player.position.x <= platform.position.x + platform.width)
                        && (!keys.down.pressed)) {
                        player.velocity.y = 0
                        if (platform.trigger && keys.g.pressed) {
                            console.log('triggered')
                            platform.trigger()
                        }
                    }
                }
            })

            if (keys.k.pressed) {
                setenv(santafe)
            }

            if (keys.h.pressed) {
                setenv(home)
            }

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
export default Canvas

