exports.run = (client, message, args) => {
    var rand = Math.floor(Math.random() * 100);
    if (rand <= 0) {
        message.channel.send('방송연장')
    }
    else if (rand >= 1, rand < 5) {
        message.channel.send('방종권')
    }
    else if (rand >= 5, rand < 19){
        message.channel.send('다시ㄱ')
    }
    else if (rand >= 19, rand < 38){
        message.channel.send('노래부르기')
    }
    else if(rand >= 38, rand < 49){
        message.channel.send('덕담 3가지')
    }
    else if(rand >= 49){
        message.channel.send('꽝')
    }
    console.log(rand)
}
