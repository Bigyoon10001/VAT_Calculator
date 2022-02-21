var Total = {
  calculate:function (self){
    var total = self.val();
    document.querySelector('#total_value_of_supply').value = Math.round(total / 1.1).toLocaleString();
    document.querySelector('#total_tax_amount').value = Math.round(total / 11).toLocaleString();
  }
}

var Supply = {
  calculate:function (self){
    var supply = self.val();
    document.querySelector('#supply_tax_amount').value = Math.round(supply / 10).toLocaleString();
    document.querySelector('#supply_total_amount').value = Math.round(supply * 1.1).toLocaleString();
  }
}
