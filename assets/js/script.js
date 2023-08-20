const akan = function (y, m, d, g) {
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const d = new Date(y, --m, d);
    if (g === "Female") {
        return d && femaleNames[d.getDay()];
    } else {
        return d && maleNames[d.getDay()];
    }

};


$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        const y = parseInt($("#year").val());
        const m = parseInt($("#month").val());
        const d = parseInt($("#date").val());
        const g = $("input:radio[name=gender]:checked").val();
        const result = akan(y, m, d, g);
        alert("Your akan name is: " + result);
        //refresh page
        document.getElementById("form").reset();
    });
});