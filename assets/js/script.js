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