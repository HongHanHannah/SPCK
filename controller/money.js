//class money
export default class Money {
    id
    name
    amount
    date
    createAt
    createBy
    updatedAt
    updatedBy
    status
    type

    constructor(name,amount, date, status, type){
        id = getAutoId();
        this.name = name;
        this.amount = amount;
        this.date = date;
        this.status = status;
        this.type = type;
        this.createAt = Date.now();
        this,this.createBy = getCurrentUser();

    }

    getAutoId() {}

}

