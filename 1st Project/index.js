document.getElementById('mySubmit').onclick = function() {

    const fullname = document.getElementById('idName').value;
    const age = document.getElementById('idAge').value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const marital = document.getElementById('idMS').value;

    if (!fullname || !age || !genderElement || !marital) {
        document.getElementById('err').textContent = 'Please fill all fields!';
        return;
    }

    const gender = genderElement.value;

    document.getElementById('res1').textContent = fullname;
    document.getElementById('res2').textContent = age;
    document.getElementById('res3').textContent = gender;
    document.getElementById('res4').textContent = marital;
    document.getElementById('err').textContent = '';
}

function resett() {
    document.getElementById('idName').value = '';
}

