function ContoCorrente(id, code, openingDate, clientName, saldo){
    this.id = id;
    this.code = code;
    this.openingDate = openingDate;
    this.clientName = clientName;
    this.saldo = saldo;
};

let cc = new ContoCorrente(1, "VH5F", new Date(2000,10,20), "Pippo", 0);

ContoCorrente.prototype.deposit = function(amount){
    this.saldo += amount;
};

ContoCorrente.prototype.getSaldo = function(){
    return this.saldo;
};

console.log(cc.getSaldo());

cc.deposit(5000);

console.log(cc.getSaldo());

function ContoCayman(id,code,openingDate,clientName,saldo,secretCode){
    ContoCorrente.call(this,id,code,openingDate,clientName,saldo);
    this.secretCode = secretCode;
};

ContoCayman.prototype = new ContoCorrente();

ContoCayman.prototype.evadiTasse = function(key){
    if(key == this.secretCode){
        this.saldo += this.saldo * 0.1;
    } else{
        this.saldo -= this.saldo *0.1;
    }
};

let cm = new ContoCayman(2, "HG4S", new Date(), "Pluto", 10000, "cba");

console.log(cm.getSaldo());

cm.evadiTasse("cba");
console.log(cm.getSaldo());










