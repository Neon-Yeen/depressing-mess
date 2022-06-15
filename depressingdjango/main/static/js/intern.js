//==============================================
// validators for forms
//
//==============================================


// Log in validator
function login_validator(obj) {
    //validation for email, password
    var mailObj = document.getElementById('email');
    var pwdObj = document.getElementById('pwd');
    var warmail = document.getElementById('mailwarning');
    var warpwd = document.getElementById('pwdwarning');

    warmail.innerHTML = ""
    warpwd.innerHTML = ""

    var mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (mailObj.value == '') {
        //document.getElementsByName('mail')[0].placeholder = 'Ingresa tu mail';
        warmail.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Ingresa tu mail</p>'
        return false;
    } else if (!(mailObj.value.match(mailformat))) {
        warmail.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">E-mail invalido</p>'
        return false;
    } else if (pwdObj.value == '') {
        warpwd.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Ingresa tu contraseña</p>'
        return false;
    } else if (pwdObj.value.length < 8) {
        warpwd.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Contraseña no valida</p>'
        return false;
    }

    var sha256 = CryptoJS.SHA256(pwdObj.value);

    pwdObj.value = sha256;
    return true;


}

// validation for sigin
function signin_validator(obj) {
    // validates first name, last name, birthday, RUT, region, home adrress, phone number, email, password with repetition
    var fnObj = document.getElementById('fname');
    var warfn = document.getElementById('fnwarning');
    warfn.innerHTML = "";

    var lnObj = document.getElementById('lname');
    var warln = document.getElementById('lnwarning');
    warln.innerHTML = "";

    var Fn = {
        // Magia chilena
        validaRut: function(rutCompleto) {
            rutCompleto = rutCompleto.replace("‐", "-");
            if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
                return false;
            var tmp = rutCompleto.split('-');
            var digv = tmp[1];
            var rut = tmp[0];
            if (digv == 'K') digv = 'k';

            return (Fn.dv(rut) == digv);
        },
        dv: function(T) {
            var M = 0,
                S = 1;
            for (; T; T = Math.floor(T / 10))
                S = (S + T % 10 * (9 - M++ % 6)) % 11;
            return S ? S - 1 : 'k';
        }
    }

    var rutObj = document.getElementById('rut');
    var warrut = document.getElementById('rutwarning');
    warrut.innerHTML = "";

    var dateObj = document.getElementById('bdate');
    var wardate = document.getElementById('datewarning');
    wardate.innerHTML = "";

    // 0 = year 1 = month 3 = day
    datenow = new Date().toISOString().split("T")[0].split("-");
    dateinput = dateObj.value.split("-");


    var regionObj = document.getElementById('rg');
    var warregion = document.getElementById('regwarning');
    warregion.innerHTML = "";

    var addrObj = document.getElementById('addr');
    var waraddr = document.getElementById('addrwarning');
    waraddr.innerHTML = "";

    var phoneObj = document.getElementById('pnumber');
    var warphone = document.getElementById('phonewarning');
    var phoneformat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    warphone.innerHTML = "";

    var mailObj = document.getElementById('email');
    var warmail = document.getElementById('mailwarning');
    var mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    warmail.innerHTML = "";

    var pwd1Obj = document.getElementById('pwd1');
    var warpwd1 = document.getElementById('pwdwarning1');
    warpwd1.innerHTML = "";

    var pwd2Obj = document.getElementById('pwd2');
    var warpwd2 = document.getElementById('pwdwarning2');
    warpwd2.innerHTML = "";



    var pwdObj1 = document.getElementById('pwd1');
    var pwdObj2 = document.getElementById('pwd2');
    var sha256_1 = CryptoJS.SHA256(pwdObj1.value);
    var sha256_2 = CryptoJS.SHA256(pwdObj2.value);

    console.log(regionObj.value);

    if (fnObj.value == '') {
        warfn.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Ingresa tu nombre</p>'
        return false;
    } else if (lnObj.value == '') {
        warln.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Ingresa tu apellido</p>'
        return false;
    } else if (!(Fn.validaRut(rutObj.value))) {
        warrut.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Rut no valido</p>'
        return false;
    } else if (dateObj.value == '') {
        wardate.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Ingresa una fecha</p>'
        return false;
    } else if (parseInt(dateinput[0]) > parseInt(datenow[0])) {
        wardate.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Año en el futuro</p>'
        return false;
    } else if ((parseInt(dateinput[0]) == parseInt(datenow[0])) && (parseInt(dateinput[1]) > parseInt(datenow[1]))) {
        wardate.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Mes en el futuro</p>'
        return false;
    } else if ((parseInt(dateinput[0]) == parseInt(datenow[0])) && (parseInt(dateinput[1]) == parseInt(datenow[1])) && (parseInt(dateinput[2]) > parseInt(datenow[2]))) {
        wardate.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Dia en el futuro</p>'
        return false;
    } else if (regionObj.value == '22') {
        warregion.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Ingresa una region</p>'
        return false;
    } else if (addrObj.value == '') {
        waraddr.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Ingresa una direccion</p>'
        return false;
    } else if (phoneObj.value == '') {
        warphone.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Ingresa un numero</p>'
        return false;
    } else if (!(phoneObj.value.match(phoneformat))) {
        warphone.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Ingresa un numero valido</p>'
        return false;
    } else if (!(mailObj.value.match(mailformat))) {
        warmail.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">E-mail invalido</p>'
        return false;
    } else if (pwd1Obj.value == '') {
        warpwd1.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Ingresa una clave</p>'
        return false;
    } else if (pwd1Obj.value.length < 8) {
        warpwd1.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">La contraseña debe tener mas de 8 caracteres</p>'
        return false;
    } else if (!(pwd1Obj.value == pwd2Obj.value)) {
        warpwd2.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Las contraseñas no son identicas</p>'
        return false;
    }





    pwdObj1.value = sha256_1;
    pwdObj2.value = sha256_2;
}


// Admin product input validator 
function iteminput_validator(obj) {
    // validates product name, product tag, product price, product stock number, product description
    var imgObj = document.getElementById('pimg');

    var nameObj = document.getElementById('pname');
    var warpname = document.getElementById('pname_warning');

    var tagObj = document.getElementById('ptag');
    var warptag = document.getElementById('ptag_warning');

    var priceObj = document.getElementById('pprice');

    var stockObj = document.getElementById('pstock');

    var descriptionObj = document.getElementById('pdescription');
    var warpdescription = document.getElementById('pdescription_warning');


    warpname.innerHTML = "";
    warpdescription.innerHTML = "";
    warptag.innerHTML = "";

    console.log(descriptionObj.value)

    if (nameObj.value == '') {
        warpname.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Ingresa un nombre</p>'
        return false;
    } else if (tagObj.value == '22') {
        warptag.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Ingresa un tag</p>'
        return false;
    } else if (descriptionObj.value == '') {
        warpdescription.innerHTML = '<p class="d-flex justify-content-center" style="color: #ff0000">Ingresa una descripcion</p>'
        return false;
    }

    return true;
}

// store items seatch prototipe, remember to move it to a different file !
function search_tag() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('planteria_items');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}