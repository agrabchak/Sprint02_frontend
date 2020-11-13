let numb_name = 11;
let bigint_name = 99n;
let str_name = 'string';
let bool_name = true;
let zero_name = null;
let age_name;
let user_name = {
    name: 'Lion'
};
let ip_name = Symbol("ip");

let func_name = function findList_name()  {}

alert(`numb_name is data_${typeof numb_name}
bigint_name is data_${typeof bigint_name}
str_name is data_${typeof str_name}
bool_name is data_${typeof bool_name}
zero_name is data_${typeof zero_name}
age_name is data_${typeof age_name}
user_name is data_${typeof user_name}
ip_name is data_${typeof ip_name}
func_name is data_${typeof func_name}`);
