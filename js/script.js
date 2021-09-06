function proses(){
    var idrtousd, usdtoidr, result, opt;
    x = document.konversi.input.value;
    Number(x);
    for(var i=0; i<document.konversi.opt.length; i++){
        if(document.konversi.opt[i].checked==true){
            pilihan=document.konversi.opt[i].value;
            break;
        }
    }
    if(pilihan=='idrtousd'){
        hasil=x/14000;
    }
    else if(pilihan=='usdtoidr'){
        hasil==x*14000
    }
    document.konversi.result.value=hasil;
}