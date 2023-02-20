let prog = "Marksheet Of Students"
let heading = document.getElementById('heading').innerHTML = prog;
header = ["Roll No", "Name", "Science", "Maths", "Computer", "English", "Hindi", "Gujarati", "Total", "Average", "Result"];
names = ["Mayank", "Rohit", "Anuj", "Kiran", "Aanchal", "Simran", "Aakash", "Kartik", "Ridhima", "Kirti", "Virat"];
snames = ["Shah", "Patel", "Gupta", "Sharma", "Tiwari", "Ahuja", "Kapoor", "Dhawan", "Singh", "Srivastav", "Barot"];
let tbl = document.getElementById('Mydata');
let row = tbl.insertRow();
//header 
for (i = 0; i < header.length; i++) {
    let cell = row.insertCell();
    cell.innerHTML = header[i];
    cell.style.backgroundColor = 'darkblue';
    cell.style.color = 'whitesmoke';
    cell.style.padding = '1%';
}
let n = 8; //number of students
for (i = 0; i < n; i++) {
    let row = tbl.insertRow();
    let total = 0;
    let flag = 0;
    if (i % 2 == 1) {
        row.style.backgroundColor = 'lightgray';
    } else {
        row.style.backgroundColor = 'lightyellow';
    }
    for (j=0; j<11; j++){
        let cell = row.insertCell();
        cell.style.padding = '4px';
        if (j == 0) {
            cell.innerHTML = i + 1;
            cell.width = '55px';
        } else if (j == 1) {
            cell.style.textAlign = 'left';
            cell.innerHTML = names[Math.floor(Math.random() * names.length)];
            cell.innerHTML += " " + snames[Math.floor(Math.random() * snames.length)];
            cell.width = '90px';
        }
        else if (j >= 2 && j <= 7) {
            cell.width = '55px';
            let x = Math.floor((Math.random() * 70)) + 30;
            total = Number(total) + Number(x);
            cell.innerHTML = x;
            if (x < 33) {
                flag = flag + 1;
                cell.style.backgroundColor = 'red';
                cell.style.color = 'whitesmoke';
                cell.style.fontWeight = '900';
            }
        } else if (j == 8) {
            cell.innerHTML = total;
            cell.style.fontWeight = '850';
            cell.style.color = 'blue';
            cell.width = '55px';
            if (flag > 0) {
                cell.style.backgroundColor = 'red';
                cell.style.color = 'whitesmoke';
            }
        } else if (j==9) {
            cell.innerHTML = (total / 5).toFixed(2);
            cell.width = '80px';
            if (flag > 0) {
                cell.style.backgroundColor = 'red';
                cell.style.color = 'whitesmoke';
            }
        } else if (j == 10) {
            if (flag == 0) {
                cell.innerHTML = "PASS";
            }
            else {
                cell.innerHTML = "FAIL";
                cell.style.color = 'whitesmoke';
                cell.style.backgroundColor = 'red';
                cell.style.fontWeight = '900';
            }
            cell.width = '100px';
        }
    }
} 
