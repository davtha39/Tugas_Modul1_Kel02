function proses(){
    var input = $('nilaiawal').val();
    const konversike = $('konversike').val();
    var hasil = 0;
    if(input !=""){
        input = parseFloat(input);
        if(konversike=="usdtoidr"){
            hasil=input*14000;
        }
        else if(konversike=="idrtousd"){
            hasil=input/14000;
        }
        $('#hasil').val(hasil);
    }
}
