function createSelectBox(startYear, endYear) {
    let selectBox = document.createElement('select');
    for (let i = startYear; i <= endYear; i++) 
    {
    let option = document.createElement('option');
    option.text = i;
    option.value = i;
    selectBox.add(option);
    }
    return selectBox; 
};
createSelectBox(2000, 2021);
document.body.appendChild(selectBox);