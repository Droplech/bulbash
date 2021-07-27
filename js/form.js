$(document).ready(function(){

    $('#basket_form').bind("submit",checkForm);
    function checkForm(e){
        e.preventDefault()

        var el = document.getElementById('basket_form')

        var name = el.name.value;
        var phone = el.phone.value;
        var addres = el.addres.value;
        var cell_back = el.cell_back.value
        var fail = "";
        var acept = "Форма заполнена";
        
        if(name == "" || phone == "" || addres == "" || cell_back == "")
        fail = "Все поля должны быть заполнены корректно";

        else if(name.length <= 1 || name.length > 50  )
        fail = "Введите корректное имя";

        else if(phone.length < 12 || phone.length > 12)
        fail = "Номер введен некорректно"

        
        console.log("Name:" + " " + name + ";")
        console.log("Phone"  + " " + phone + ";");
        console.log("Addres"  + " " + addres + ";");
        console.log("Cell back"  + " " + cell_back + ";");
        if( fail != ""){
            $("#error").html(fail)
            $("#acept").html("")
        }else{
            $("#acept").html(acept)
            $("#error").html("")
            $('.modal_order_completed').fadeIn()
            $('body,html').animate({scrollTop:0},300);
            
        }
    }



    $('#form_contacts').bind("submit",checkFormContacts);
    function checkFormContacts(e){
        e.preventDefault()

        var el = document.getElementById('form_contacts')

        var name = el.name.value;
        var phone = el.phone.value;
        var fail = "";
        var acept = "Форма заполнена";
        
        if(name == "" || phone == "" )
        fail = "Все поля должны быть заполнены корректно";

        else if(name.length <= 1 || name.length > 50  )
        fail = "Введите корректное имя";

        else if(phone.length < 12 || phone.length > 12)
        fail = "Номер введен некорректно"
        
        console.log("Name:" + " " + name + ";")
        console.log("Phone"  + " " + phone + ";");
        
        if( fail != ""){
            $("#error").html(fail)
            $("#acept").html("")
        }else{
            $("#acept").html(acept)
            $("#error").html("")
            $('.modal_order_completed').fadeIn()
            
            
        }
    }


    $('#order_callBack_form').bind("submit",checkOrderCallBackForm);
    function checkOrderCallBackForm(e){
        e.preventDefault()

        var el = document.getElementById('order_callBack_form')

        var name = el.name.value;
        var phone = el.phone.value;
        var fail = "";
        var acept = "Форма заполнена и отправлена. Оператор свяжется с вами в ближайшее время";
        
        if(name == "" || phone == "" )
        fail = "Все поля должны быть заполнены корректно";

        else if(name.length <= 1 || name.length > 50  )
        fail = "Введите корректное имя";

        else if(phone.length < 12 || phone.length > 12)
        fail = "Номер введен некорректно"
        
        console.log("Name:" + " " + name + ";")
        console.log("Phone"  + " " + phone + ";");
        
        if( fail != ""){
            $("#error").html(fail)
            $("#acept").html("")
        }else{
            $("#acept").html(acept)
            $("#error").html("")
            setTimeout(() => {
                $('.order_callBack').slideUp()
            }, 3000);
            
            
            
            
        }
    }
})
