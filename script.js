let t1=gsap.timeline()

t1.from(".name-box1 .myname",{
    y:-100,
    duration:0.6,
    stagger:0.1
})

t1.from("li",{
    y:-55,
    duration:0.6,
    stagger:0.1
})
t1.from("h3",{
    duration:0.5,
    x:40,
    opacity:0,
})
t1.from("h1",{
    duration:0.5,
    x:-40,
    opacity:0,
})
t1.from("#sub",{
    duration:0.5,
    x:-40,
    opacity:0,
})
t1.from("p",{
    duration:0.5,
    x:40,
    opacity:0,
})
t1.from("a",{
    duration:0.2,
    opacity:0,
    stagger:0.4
})
t1.from(".img-box img",{
    scale:1
})

