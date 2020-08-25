module.exports = function(source){
    const callback = this.async()
    setTimeout(()=>{
        const result = source.replace('hello','你好')
        callback(null,result)
    },2000)
}