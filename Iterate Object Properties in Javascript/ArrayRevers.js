const myobj = {
    x:20,
    y:30,
    z:40,
    xx:40,
    yy:45,
    zz:39
}


console.log('z' in myobj)

for(var i in myobj){
    console.log(i)
    console.log(myobj[i])
}