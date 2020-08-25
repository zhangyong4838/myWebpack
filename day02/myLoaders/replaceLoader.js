module.exports = function(source){
    console.log(this.query);
    const result = source.replace('laohan','哈哈哈')
    this.callback(null,result)
}