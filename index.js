var Tdata = [{
        "id": 1,
        "name": "Fredericka Fuke",
        "student": 62
    }, {
        "id": 2,
        "name": "Sena Bowlands",
        "student": 58
    },
    {
        "id": 3,
        "name": "Branden Bartlomieczak",
        "student": 22
    },
    {
        "id": 4,
        "name": "Ossie Malec",
        "student": 20
    }, {
        "id": 5,
        "name": "Veronique Anderton",
        "student": 86
    }];
var data = [{
        "id": 1,
        "name": "Fredericka Fuke",
        "age": 62,
        "salary": 4820
    }, {
        "id": 2,
        "name": "Sena Bowlands",
        "age": 58,
        "salary": 5391
    }, {
        "id": 3,
        "name": "Branden Bartlomieczak",
        "age": 22,
        "salary": 688
    }, {
        "id": 4,
        "name": "Ossie Malec",
        "age": 20,
        "salary": 6594
    }, {
        "id": 5,
        "name": "Veronique Anderton",
        "age": 86,
        "salary": 5
    }];
function sort(arr, by) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j][by] > arr[j + 1][by]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
//   console.log(data)
console.log(sort(Tdata, "name"));
