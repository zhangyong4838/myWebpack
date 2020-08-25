module.exports = function(source){
    console.log(this.query);
    const result = source.replace('laohan',this.query.name)
    this.callback(null,result)
}