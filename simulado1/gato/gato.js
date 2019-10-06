function gato(array){

    let dist = array.slice(0,2)
                    .map(v => Math.abs(array[2]-v))
    if(dist[0]==dist[1])
        return 'Mouse C'
    else if (dist[0]<dist[1])
        return 'Cat A'
    else
        return 'Cat B'
}

export{gato}